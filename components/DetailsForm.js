import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import RoundedButton from "../components/RoundedButton";
import { useFetchData } from "../utils/hooks";
import { validateEmail } from "../utils/emailHelpers";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link'
import "./DetailsForm.scss";

const DetailsForm = () => {
        return (
          <div className="container">
            <form>

            <div className="subTitle">
            <span className="title">
              <strong>My Details</strong>
            </span>
            </div>

              <input
                className="form-control"
                type="text"
                id="name"
                name="name"
                placeholder="First Name"
              />

              <input
              className="form-control"
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
              />

              <input
                className="form-control"
                type="text"
                id="email"
                name="email"
                placeholder="Email Address"
              />


              <div className="subTitle">
            <span className="title">
              <strong>Password Change</strong>
            </span>
            </div>
            
              <input
                className="form-control"
                type="text"
                id="currentPass"
                name="currentPass"
                placeholder="Current Password"
              />

              <input
              className="form-control"
                type="text"
                id="newPass"
                name="newPass"
                placeholder="New Password"
              />

              <input
                className="form-control"
                type="text"
                id="confirmPass"
                name="confirmPass"
                placeholder="Confirm Password"
              />

              <button type="submit" id="contact" name="contac" value="Submit">
                Submit Now
              </button>

            
            </form>
          </div>
        );
    }

 
export default DetailsForm;
