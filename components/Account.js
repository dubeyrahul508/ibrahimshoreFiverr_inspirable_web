import "./Account.scss";
import { useState, useContext ,useEffect} from "react";
import { postRegister, postLogin, add_contact ,ResetPasswordToken} from "../services/rest_service";
import { AuthContext } from "../context/auth";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Router from "next/router";
import ActiveLink from "./ActiveLink";
import { validateEmail } from "../utils/emailHelpers";

const Account = (props) => {
  const [forgotEmail,setForgotEmail]=useState("");
  const [newPassword,setNewPassword]=useState("");
  const [selectedTab, setSelectedTab] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordL, setPasswordL] = useState("");
  const [confirmationPass, setConfirmationPass] = useState("");
  const [passwordValidationState, setPasswordValidationState] = useState("");
  const [firstNameValidationState, setFirstNameValidationState] = useState("");
  const [lastNameValidationState, setLastNameValidationState] = useState("");
  const [signInLogin, setSignInLogin] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
const [emailValidation, setEmailValidation] = useState("Not Valid");
  //var signInLogin = 0;
  // var emailValidation = "Not Valid";
  
  const context = useContext(AuthContext);
  var closeButton;
  useEffect(()=>{
    if(props.setSignup==="0"){
      setSelectedTab(0);
    }
    if(props.setSignup==="1"){
      setSelectedTab(1);
    }
  },[]);
  setTimeout(function() {
    closeButton = document.getElementsByClassName("close-button")[0];
    closeButton.style.display = 'none';
  }, 300);

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
    if (!/^[a-zA-Z]{2,}$/.test(firstName)) {
      setFirstNameValidationState("Invalid First Name");
      return;
    }
  };

  const onBlurLastName = (e) => {
    setLastNameValidationState("");
    const lastName = e.target.value;
    if (!/^[a-zA-Z]{2,}$/.test(lastName)) {
      setLastNameValidationState("Invalid Last Name");
      return;
    }
  };

  const onBlurEmail = async () => {
    const emailGot = email;
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailValid = await validateEmail(email)
    // !re.test(emailGot) || 
    if (emailGot === "" || !isEmailValid) {
      // emailValidation = "Not Valid";
      setEmailValidation("Not Valid");
      return;
    } else {
      // emailValidation = "Valid";
      setEmailValidation("Valid");
    }
  };

  const onBlurPassword = (e) => {
    setPasswordValidationState("");
    const password = e.target.value;
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/.test(password)) {
      setPasswordValidationState(
          "The password must container at least one letter and one number"
      );
    }
  };

  const onKeyUp = (e, name, form) => {
    /* let element = document.getElementById(`${name}_l`);
    e !== ""
      ? element.classList.add("active")
      : element.classList.remove("active"); */
    if (form === "register") {
      let elementPass = document.getElementById("password");
      let elementConfirm = document.getElementById("confirm_password");
      if (password === confirmationPass) {
        elementPass.classList.remove("diferent");
        elementConfirm.classList.remove("diferent");
        elementPass.classList.add("equals");
        elementConfirm.classList.add("equals");
      } else {
        elementPass.classList.add("diferent");
        elementConfirm.classList.add("diferent");
      }
    }
  };

  const showButtonLogin = () => {
    if (submitting) {
      return <span>Submitting...</span>;
    }
    return <span>Log In</span>;
  };

  const showEmailLogin = () => {
    if (!signInLogin) {
      return <span>Next</span>
    }
    else {
      return <span>{showButtonLogin()}</span>;
    }
  }

  const showButtonText = () => {
    if (submitting) {
      return <span>Submitting...</span>;
    }
    return <span>Sign Up</span>;
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const res = await postRegister({
      first_name: firstName,
      last_name: lastName,
      password: password,
      password_confirmation: confirmationPass,
      email: email,
    });

    setSubmitting(false);
    if (res.code !== "200") {
      setMessage("An error ocurred.Check your data.");
      setTimeout(() => {
        setMessage("");
      }, 5000);
    } else {
      const resac = await add_contact({
        firstName,
        lastName,
        email,
        listId: 7,
      });
      console.log(resac)
    }
  };

  const handleSumbitLogin = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const res = await postLogin({
      email,
      password: passwordL,
    });
    setSubmitting(false);
    if (res.code !== "200") {
      setMessage("An error ocurred.Check your data.");
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  };

  const nextLoginClicked = () => {
    onBlurEmail();
    console.log("validation State: " + emailValidation);
    if(emailValidation === "Valid") {
      setSignInLogin(true);
      const email = document.getElementById("signInEmail");
      const password = document.getElementById("signInPassword");
      const forgotPassword = document.getElementById("forgotPassword");
      if(email )
        email.style.display = "none";
      if(password)
        password.style.display = "block";
      if(forgotPassword)
        forgotPassword.style.display = "block";
      if( document.getElementById("signButtonContainer"))
        document.getElementById("signButtonContainer").style.flexDirection = "column-reverse";
      if(document.getElementById("backButton"))
        document.getElementById("backButton").style.width = "100%";
      try {
        const nextButton = document.getElementById("nextButton");
        nextButton.style.marginLeft = "0%";
        nextButton.style.width = "100%";
        nextButton.style.marginBottom = "5%";
      } catch(error) {
        const nextButton2 = document.getElementById("nextButton2");
        if(nextButton2){
          nextButton2.style.marginLeft = "0%";
          nextButton2.style.width = "100%";
          nextButton2.style.marginBottom = "5%";
        }

      }
    }
  }

  const backLoginClicked = () => {
    const password = document.getElementById("signInPassword");

    if(password.style.display !== "none") {
      setSignInLogin(false);
      const email = document.getElementById("signInEmail");
      const password = document.getElementById("signInPassword");
      const forgotPassword = document.getElementById("forgotPassword");

      email.style.display = "block";
      password.style.display = "none";
      forgotPassword.style.display = "none";

      document.getElementById("signButtonContainer").style.flexDirection = "row";
      document.getElementById("backButton").style.width = "30%";
      try {
        const nextButton = document.getElementById("nextButton");
        nextButton.style.marginLeft = "40%";
        nextButton.style.width = "30%";
        nextButton.style.marginBottom = "0%";
      } catch(error) {
        const nextButton2 = document.getElementById("nextButton2");
        nextButton2.style.marginLeft = "40%";
        nextButton2.style.width = "30%";
        nextButton2.style.marginBottom = "0%";
      }
    } else {
      closeButton.click();
      console.log("can't do that");
    }
  }
  const handleForgotEmail=async (e)=>{
    e.preventDefault();
    setSelectedTab(3);
  }
  const handleForgotOtp=async (e)=>{
    e.preventDefault();
    const res = await ResetPasswordToken({
      email:forgotEmail
    });
    console.log(res);
    if(res.status === 0){
      console.log(res.data.errors.email);
      document.getElementById("error-reset-message").innerHTML=res.data.errors.email;
    }
    else{
      setSelectedTab(3);
    }
  }
  const   updatePassword=async (e)=>{
    e.preventDefault();
    setSelectedTab(4);
  }
  return (
      <div className = "Account">
        <div className = "accountLogo">
          <div className="image_column">
            <div className="logo-hold">
              <ActiveLink href={"/"}>
                <img
                    className="logo-link"
                    src="../images/logo.svg"
                    alt="logo"
                />
              </ActiveLink>
            </div>
          </div>
        </div>
        <div className="form" id = "accountForm">
          {/* <ul className="tab-group">
          <li onClick={() => isSelectedTab(true)}>
            <a className={selectedTab ? "active" : ""}>Sign Up</a>
          </li>
          <li onClick={() => isSelectedTab(false)}>
            <a className={!selectedTab ? "active" : ""}>Log In</a>
          </li>
        </ul> */}
          <Grid item xs = {12} sm = {12} md = {5} style = {{padding: '40px'}} >
            <div className="tab-content">
              {selectedTab===0 ? (
                  <div id="signup">
                    <h1>Sign Up <span style = {{fontSize: '0.5em'}}>/ <a onClick = {() => {setSelectedTab(1)}}> Sign In </a></span></h1>
                    <form action="/" method="post" onSubmit={handleSumbit}>
                      <div className="top-row">
                        <div className="field-wrap">
                          <label id="firstName_l">
                            First Name<span className="req">*</span>
                          </label>
                          <input
                              id="firstName"
                              onKeyUp={(e) =>
                                  onKeyUp(e.target.value, e.target.id, "register")
                              }
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              onBlur={onBlurFirstName}
                              type="text"
                              required
                              autoComplete="off"
                          />
                          {firstNameValidationState !== "" && (
                              <p className="text-danger" style={validationErrorStyles}>
                                {firstNameValidationState}
                              </p>
                          )}
                        </div>
                        <div className="field-wrap">
                          <label id="lastName_l">
                            Last Name<span className="req">*</span>
                          </label>
                          <input
                              type="text"
                              id="lastName"
                              required
                              value={lastName}
                              onBlur={onBlurLastName}
                              onChange={(e) => setLastName(e.target.value)}
                              type="text"
                              required
                              autoComplete="off"
                              onKeyUp={(e) =>
                                  onKeyUp(e.target.value, e.target.id, "register")
                              }
                          />
                          {lastNameValidationState !== "" && (
                              <p className="text-danger" style={validationErrorStyles}>
                                {lastNameValidationState}
                              </p>
                          )}
                        </div>
                      </div>
                      <div className="field-wrap">
                        <label id="email_l">
                          Email Address<span className="req">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            onKeyUp={(e) =>
                                onKeyUp(e.target.value, e.target.id, "register")
                            }
                            required
                            autoComplete="off"
                            onBlur={onBlurEmail}
                        />
                        {emailValidation !== "Valid" && (
                            <p className="text-danger" style={validationErrorStyles}>
                              {emailValidation}
                            </p>
                        )}
                      </div>

                      <div className = "signUpPasswordSection">
                        <div className="field-wrap setAPassword">
                          <label id="password_l">
                            Set A Password<span className="req">*</span>
                          </label>
                          <input
                              onChange={(e) => setPassword(e.target.value)}
                              id="password"
                              type="text"
                              onBlur={onBlurPassword}
                              autoComplete="off"
                              onKeyUp={(e) =>
                                  onKeyUp(e.target.value, e.target.id, "register")
                              }
                              type="password"
                              required
                              autoComplete="off"
                          />
                          {passwordValidationState !== "" && (
                              <p className="text-danger" style={validationErrorStyles}>
                                {passwordValidationState}
                              </p>
                          )}
                        </div>

                        <div className="field-wrap confirmPassword">
                          <label id="confirm_password_l">
                            Confirm Password<span className="req">*</span>
                          </label>
                          <input
                              onChange={(e) => setConfirmationPass(e.target.value)}
                              id="confirm_password"
                              type="text"
                              required
                              autoComplete="off"
                              onKeyUp={(e) =>
                                  onKeyUp(e.target.value, e.target.id, "register")
                              }
                              type="password"
                              required
                              autoComplete="off"
                          />
                        </div>
                      </div>
                      {message !== "" && (
                          <p
                              className="text-danger"
                              style={{ color: "white", paddingBottom: "1em" }}
                          >
                            {message}
                          </p>
                      )}
                      <button type="submit" className="button button-block getStartedButton" style={{backgroundColor:"#79a3b1"}}>
                        <span> {showButtonText()}</span>
                      </button>

                      <span>
                    By clicking <strong>Sign Up</strong> you are indicating that
                        you've read and agree to the <ActiveLink href = {"/termsOfUse"}>
                      <u>Terms of Use</u>
                    </ActiveLink> and <span> </span>
                    <ActiveLink href = {"/privacy"}>
                      <u>Privacy Policy</u>
                    </ActiveLink>
                  </span>
                    </form>
                  </div>
              ): selectedTab===1? (
                  <div id="login">
                    <h1>Sign In <span style = {{fontSize: '0.5em'}}>/ <a onClick = {() => {setSelectedTab(0)}}> Sign Up </a></span> </h1>
                    <h3>Welcome back to sign in to your account</h3>
                    <form action="/" method="post" onSubmit={handleSumbitLogin}>
                      <div className="field-wrap" id = "signInEmail">
                        {/* <label id="email_l" className = "email_l">
                      Email<span className="req">*</span>
                    </label> */}
                        <label>Email*</label>
                        <input
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            /* onKeyUp={(e) => onKeyUp(e.target.value, e.target.id, "login")} */
                            required
                            type="email"
                            required
                            autoComplete="off"
                        />
                      </div>

                      <div className="field-wrap signInPassword" id = "signInPassword">
                        {/* <label id="passwordl_l" className = "passwordl_l">
                      Password<span className="req">*</span>
                    </label>  */}
                        <label>Password*</label>
                        <input
                            onChange={(e) => setPasswordL(e.target.value)}
                            id="passwordl"
                            type="password"
                            required
                            autoComplete="off"
                            onKeyUp={(e) => onKeyUp(e.target.value, e.target.id, "login")}
                        />
                      </div>
                      <p className="forgot signInPassword" id = "forgotPassword">
                        <a onClick = {() => setSelectedTab(2)}>Forgot Password?</a>

                      </p>
                      {message !== "" && (
                          <p
                              className="text-danger"
                              style={{ color: "white", paddingBottom: "1em" }}
                          >
                            {message}
                          </p>
                      )}
                      <div className = "SignButtonContainer" id = "signButtonContainer">
                        <button className="button button-block backButton" id = "backButton" onClick = {backLoginClicked}> Back </button>
                        {props.reDirectTo ?
                            /* <ActiveLink href = {props.reDirectTo}> */
                            <button className="button button-block" id = "nextButton" style = {{marginLeft: '40%'}} onClick = {nextLoginClicked}>
                              <span> {showEmailLogin()} </span>
                            </button>
                            /* </ActiveLink> */ :
                            <button className="button button-block" id = "nextButton2" style = {{marginLeft: '40%',backgroundColor:"#79a3b1"}} onClick = {nextLoginClicked}>
                              <span> {showEmailLogin()} </span>
                            </button>}
                      </div>
                    </form>
                    <div className="message"></div>
                  </div>
              ):selectedTab===2 ?(
                  <div>
                    <span style={{color:'red'}} id="error-reset-message"></span>
                    <h3>Email Address</h3>
                    <form  onSubmit={handleForgotOtp}>


                      <input type="text"
                             onChange={(e)=>setForgotEmail(e.target.value)}
                      />
                      <div className = "SignButtonContainer" id = "forgotButton" style={{marginTop:'20px'}}>
                        <button className="button button-block"  style = {{marginLeft: '40%',backgroundColor:'#79a3b1'}} >
                          <span> Submit</span>
                        </button>
                      </div>
                    </form>
                  </div>

              ): selectedTab===3 ? (
                 <div>
                   <h3>Please Check your email and follow the instruction</h3>
                 </div>

              ):selectedTab===4 ? (
                  <div>
                    <h3>Your Password Reset Successfully</h3>
                    <button className="button button-block"  style = {{marginLeft: '40%',backgroundColor:"#79a3b1"}} onClick = {()=>setSelectedTab(1)}>
                      <span> Sign In </span>
                    </button>
                  </div>
              ):(
                  <div></div>
              )
              }
            </div>
          </Grid>
          <Grid item md = {1} className = "signInUnWantedGrid"></Grid>
          <Grid item md = {6} className = "signInUnWantedGrid" style = {{marginTop: '0%'}}>
            {
              selectedTab===0 || selectedTab===1?(
                  <div className = "SignImage">

                  </div>
              ) :selectedTab>1 && selectedTab<4?(
                  <div className = "resetPassword">

                  </div>
              ):selectedTab===4?(
                <div className = "resetSuccessfullyPassword">

                </div>
              ):(
                  <div>

                  </div>
              )

            }


          </Grid>
        </div>
      </div>
  );
};

export default Account;
