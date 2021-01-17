import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import RoundedButton from "../components/RoundedButton";
import { useFetchData } from "../utils/hooks";
import { validateEmail } from "../utils/emailHelpers";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link'


import "./ContactForm.scss";

const ContactForm = () => {
  let [email, setEmail] = useState(""); //this var will store the email value
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [message, setMessage] = useState("");
  let [error, setError] = useState("default");
  //let [contactData, setContactData] = useState({email: ''});
  let [emailValidationState, setEmailValidationState] = useState("");
  let [firstNameValidationState, setFirstNameValidationState] = useState("");
  let [lastNameValidationState, setLastNameValidationState] = useState("");
  let [submitting, setSubmitting] = useState(false);
  let [verifyingEmail, setVerifyingEmail] = useState(false);
  const [res, apiMethod] = useFetchData({
    url:
      "https://cors-anywhere.herokuapp.com/https://inspirable.api-us1.com/api/3/contacts",
    headers: {
      "Api-Token": process.env.INSPIRABLE_APP_ACTIVECAMPAIGN_KEY,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    payload: { contact: { email, firstName, lastName } },
  });

  const validationErrorStyles = {
    fontSize: "1rem",
    textAlign: "left",
    marginTop: 0,
    marginBottom: 0,
    clear: "both",
  };

  const onBlurFirstName = (e) => {
    setFirstNameValidationState("");

    const firstName = e.target.value;

    if (!firstName.length) {
      setFirstNameValidationState("First name is required");
      return;
    }

    if (!/^[a-zA-Z]{2,}$/.test(firstName)) {
      setFirstNameValidationState("Invalid First Name");
      return;
    }
  };

  const onBlurLastName = (e) => {
    setLastNameValidationState("");

    const LastName = e.target.value;

    if (!LastName.length) {
      setFirstNameValidationState("Last name is required");
      return;
    }

    if (!/^[a-zA-Z]{2,}$/.test(LastName)) {
      setFirstNameValidationState("Invalid First Name");
      return;
    }
  };

  const onBlurEmail = async (e) => {
    1;
    setEmailValidationState("");
    setVerifyingEmail(true);

    const email = e.target.value;

    if (!email.length) {
      setEmailValidationState("Email address is required");
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

  const showButtonText = () => {
    if (submitting) {
      return <span>Submitting...</span>;
    }

    return <span>Submit</span>;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://inspirable.api-us1.com/api/3/contacts",
        { contact: { email, firstName, lastName } },
        {
          headers: {
            "Api-Token": process.env.INSPIRABLE_APP_ACTIVECAMPAIGN_KEY,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then(function (response) {
        console.log(response);
        setSubmitting(false);
        setError("false");
        setFirstName("");
        setLastName("");
        setEmail("");
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
        setFirstName("");
        setLastName("");
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
            <div className="error-icon">
              <FontAwesomeIcon
                size={"4x"}
                color={"#EC2C43"}
                icon={["fas", "times-circle"]}
              />
            </div>
          </div>
        );
        break;
      case "false":
        return (
          <div className="error-content">
            <h1>Success!</h1>
            <span style={{ fontSize: "14px" }}>Thanks to know about Us...</span>
            <div className="error-icon">
              <FontAwesomeIcon
                size={"5x"}
                color={"#20B829"}
                icon={["fas", "check-circle"]}
              />
            </div>
          </div>
        );
        break;

      default:
        return (
          <>
            <span className="title">
              <strong>My Details</strong>
            </span>
            <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                name="name"
                className={
                  firstNameValidationState === ""
                    ? "form-control"
                    : "form-control is-invalid"
                }
                placeholder="First Name"
                onBlur={onBlurFirstName}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <input
                type="text"
                id="lastName"
                name="lastName"
                className={
                  firstNameValidationState === ""
                    ? "form-control"
                    : "form-control is-invalid"
                }
                placeholder="Last Name"
                onBlur={onBlurLastName}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />

              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email Address"
                className={
                  emailValidationState === ""
                    ? "form-control"
                    : "form-control is-invalid"
                }
                onBlur={onBlurEmail}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                id="message"
                name="message"
                rows="4"
                cols="50"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <button type="submit" id="contact" name="contac" value="Submit">
                {showButtonText()}
              </button>

              {/* <p style={{ fontSize: ".8rem", padding: "1em" }}>
                By clicking on Submit, you are indicating that you have read
                and that you agree to our
                <Link href="/privacy">
                  <a style={{ cursor: "pointer", color: "#334d5e" }}> Privacy Policy </a>
                </Link>
              </p> */}

              {emailValidationState !== "" && (
                <p className="text-danger" style={validationErrorStyles}>
                  <strong> {emailValidationState} </strong>
                </p>
              )}
            </form>
            </div>
          </>
        );
        break;
    }
  };
  return (
    <div className="contact-container-form">
      <div className="absolute-container">{renderContent()}</div>
    </div>
  );
};

export default ContactForm;
