import React from "react";
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'
import { ModalContext } from "../context/modalContext";

const SignInButton = ({ backgroundColor = "#344e5f", color = "white", text, redirect, isText, fontSize, marginLeft, paddingTop }) => {
  let { handleModal } = React.useContext(ModalContext);

  console.log(handleModal);
  return (
    <>
    {!isText?
      <button
        className="content-button" id="signUpToday"
        style={{
          backgroundColor: backgroundColor,
          color: color,
          padding: "0px 50px",
          borderRadius: "26px",
          margin: "3px",
          fontSize: "16px",
          border: "0px solid #000000",
          margin: "15px 0px 0px",
          height: "40px",
          cursor:'pointer'
    
        }}
        onClick={() => handleModal("This is component modal content")}
      >
        Sign Up Today!
      </button>
      :
      <span 
        onClick = {() => Cookie.get('authToken') ? router.push(redirect):handleModal("This is component modal content")}
        style = {{color: color, fontSize: fontSize, marginLeft: marginLeft, paddingTop: paddingTop}}
      >
        {" " + text + " "}
      </span>
    }
    </>
  );
};

export default SignInButton;
