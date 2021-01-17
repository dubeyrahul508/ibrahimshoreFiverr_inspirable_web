import React from "react";
import { ModalContext } from "../context/modalContext";
import Cookie from 'js-cookie'
import { AuthToken } from "../services/auth_token";
import { useRouter } from 'next/router'

const SignInButton = ({ backgroundColor = "#344e5f", color = "white", text, redirect, isText }) => {
  let { handleModal } = React.useContext(ModalContext);


   const renderText =  () => {
     if(text) {
       return <span>{text}</span>
     }
     if(Cookie.get('authToken')){
      return <span>My Account</span>
     }else{
       return <span>Sign In</span>
     }
   }

   const router = useRouter()
  console.log(handleModal);
  return (
    <>
      {!isText?
        <button
          className="content-button"
          style={{
            backgroundColor: backgroundColor,
            color: color,
            padding: "15px 45px",
            borderRadius: "26px",
            margin: "5px",
            fontSize: "16px",
            cursor:'pointer',
            marginBottom:'1em'
          }}
          onClick={() => Cookie.get('authToken') ? (redirect)? '' : router.push('/myaccount')  :handleModal("This is component modal content")}
        >
          {renderText()}
        </button>
      :
          <span 
            onClick = {() => Cookie.get('authToken') ? router.push(redirect):handleModal("This is component modal content")}
          >
            {" " + text + " "}
          </span>
      }
    </>
  );
};

export default SignInButton;
