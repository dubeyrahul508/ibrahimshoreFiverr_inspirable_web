import axios from "axios";
import { getCountry } from "./getGeoInfo";
import { useState, useEffect, useContext } from "react";
import { AuthToken } from "./auth_token";
import { ModalContext } from "../context/modalContext";
import { AuthContext } from "../context/auth";
import Cookie from "js-cookie";
import qs from "qs";
import { AccordionSummary } from "@material-ui/core";

const properties = {
  log_info: {
    app_version: "0.0.1",
    country: "usa",
    device_system: "test",
  },
};

export const add_contact = async ({email, listId}) => {
  try {
    const data =await Object.entries({
      email: email,
      ["p[" + listId + "]"]: listId,
      api_key:
        "d99045b437388b4965018ad16ed88df9690ff8a33c56a6468877500c0c5749f3a1ef8e9b",
    })
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");
    const res = await axios.post(
      "https://cors-anywhere.herokuapp.com/https://inspirable.api-us1.com/admin/api.php?api_action=contact_add",
      data,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(res);
    return { code: "200" };
  } catch (error) {
    return { code: "422", error };
  }
};

export const postLogin = async (data) => {
  console.log(data);
  try {
    const res = await axios.post(
      "https://production.inspirable.io/api/auth/login",
      { ...data, ...properties },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Access Token: " + res.data.access_token);
    await AuthToken.storeToken(res.data.access_token);

    return { code: "200", user: res.data.me };
  } catch (error) {
    return { code: "422", error };
  }
};

export const getAllBooks = async (token) => {
  console.log("hahahahahaha");
  var dat;
  try {
    const data = await axios.get(
      "https://production.inspirable.io/api/children/12/books/reading",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        },
      }
    )
    console.log(data.data.data);
    return data.data.data
  } catch (error) {
    return {code: "422", error};
  }
}

export const getCompletedBooks = async (token) => {
  console.log("hahahahahaha");
  var dat;
  try {
    const data = await axios.get(
      "https://production.inspirable.io/api/children/12/books/completed",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        },
      }
    )
    console.log(data.data.data);
    return data.data.data
  } catch (error) {
    return {code: "422", error};
  }
}

export const getChildrenProfiles = async (token) => {
  try {
    const data = await axios.get(
      "https://production.inspirable.io/api/children",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        }
      }
    );

    return data.data.data;
  } catch(error) {
    return {code: "422", error};
  }
}

export const getUserInfo = async (token) => {
    var dat;
  try {
    await axios.get(
      "https://production.inspirable.io/api/profile",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        },
      }
    )
    .then(result => {dat = result.data.data})
      return dat;
  } catch(error) {
    return {code: "422", error};
  }
}

export const postRegister = async (data) => {
  try {
    const res = await axios.post(
      "https://production.inspirable.io/api/auth/register",
      { ...data, ...properties },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res);
    if (res.data && res.data.access_token) {
      await AuthToken.storeToken(res.data.access_token);

      return { code: "200" };
    }
  } catch (error) {
    return { code: "422", error };
  }
};
    export const ResetPasswordToken = async (data) => {
      try {
        const res = await axios.post(
            "https://production.inspirable.io/api/auth/password/email",
            { ...data, ...properties },
            {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            }
        );
        if(res.data){
          if(res.data.errors.email){
            res.status =0;
          }
        }
       return res;
      } catch (error) {
        return { code: "422", error };
      }
    };
  export  const resetPassword= async (data)=>{
    try {
      console.log(data);

      const res = await axios.post(
          "https://production.inspirable.io/api/auth/password/reset",
          data,
          {
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json",
            },
          }
      );
      if(res.data){
        if(res.data.errors.email){
          res.status =0;
        }
      }
      return res;
    } catch (error) {
      return { code: "422", error };
    }
  };