import "./Subscribe.scss";
import React, { useState } from "react";
import { useFetchData } from "../utils/hooks";
import { validateEmail } from "../utils/emailHelpers";
import { add_contact } from "../services/rest_service";
import axios from "axios";
import Link from 'next/link'

const Subscribe = ({ isBlog = false }) => {
  const validationErrorStyles = {
    fontSize: "1rem",
    textAlign: "left",
    marginTop: 0,
    marginBottom: 0,
    clear: "both",
  };

  let [email, setEmail] = useState("");
  let [verifyingEmail, setVerifyingEmail] = useState(false);
  let [emailValidationState, setEmailValidationState] = useState("");
  let [submitting, setSubmitting] = useState(false);
  let [error, setError] = useState("default");
  const [res, apiMethod] = useFetchData({
    url:
      "https://cors-anywhere.herokuapp.com/https://inspirable.api-us1.com/api/3/contacts",
    headers: {
      "Api-Token": process.env.INSPIRABLE_APP_ACTIVECAMPAIGN_KEY,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    payload: { contact: { email } },
  });

  const onBlurEmail = async (e) => {
    1;
    setEmailValidationState("");
    setVerifyingEmail(true);

    const email = e.target.value;

    if (!email.length) {
      setEmailValidationState("");
      setVerifyingEmail(false);
      return;
    }

    const isEmailValid = validateEmail(email);
    if (!isEmailValid) {
      setEmailValidationState("Invalid email address");
      setVerifyingEmail(false);
      return;
    }
  };

  /*
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    apiMethod();
    if (!res.error) {
      setEmail("");
    } else {
      setEmailValidationState("An error ocurred.Check your data");
      setEmail("");
    }
    setSubmitting(false);
  };
  */

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://inspirable.api-us1.com/api/3/contacts",
        { contact: { email } },
        {
          headers: {
            "Api-Token": process.env.INSPIRABLE_APP_ACTIVECAMPAIGN_KEY,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then( async function (response) {
        console.log(response);
        setSubmitting(false);
        setError("false");
        setEmail("");
        const resac = await add_contact({
          email: email,
          listId: 8,
        });
        console.log(resac)
        setTimeout(() => {
          setError("default");
        }, 5000);
      })
      .catch(function (error) {
        console.log(error);
        setError("true");
        setSubmitting(false);
        setTimeout(() => {
          setError("default");
        }, 5000);
        setEmail("");
      });
  };

  const renderContent = () => {
    switch (error) {
      case "true":
        return (
          <div className="error-content">
            <h1>Error!</h1>
            <span style={{ fontSize: "14px" }}>Check your data...</span>
          </div>
        );
        break;

      case "false":
        return (
          <div className="error-content">
            <h1>Success!</h1>
            <span style={{ fontSize: "14px" }}>Thanks for subscribe...</span>
          </div>
        );
      default:
        return (
          <>
            <h1>For more updates and news</h1>
            <p>Sign up now to hear more from us.</p>  
            <form className="formEmail" onSubmit={handleSubmit}>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your email address"
                onChange={(e) => setEmail(e.target.value)}
                onBlur={onBlurEmail}
              />
              
              <input
                type="submit"
                id="sendEmail"
                name="sendEmail"
                value="Subscribe"
              />

              {emailValidationState !== "" && (
                <p className="text-danger" style={validationErrorStyles}>
                  <strong> {emailValidationState} </strong>
                </p>
              )}
            </form>
          </>
        );
        break;
    }
  };

  return (
    <div className="subscribe">
      <div className="backTopLeft">
        <img
          src={isBlog ? "../images/square.png" : "images/square.png"}
          alt="logo"
        />
      </div>
      <div className="backBottomRight">
        <img
          src={isBlog ? "../images/square.png" : "images/square.png"}
          alt="logo"
        />
      </div>
      <div className="subscribeForm">{renderContent()}</div>
    </div>
  );
};

export default Subscribe;
