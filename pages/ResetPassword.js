import "../components/Account.scss";
import { useRouter } from 'next/router';
import  LoadingAnimation from "../components/LoadingAnimation";
import React, {  useState, useContext } from "react";
import {resetPassword, ResetPasswordToken} from "../services/rest_service";

import Grid from '@material-ui/core/Grid';
import ActiveLink from "../components/ActiveLink";
import Banner from "../components/Banner";
function ResetPassword (props) {
    const [email,setEmail]=useState("");
    const [token,setToken]=useState("")
    const [newPassword,setNewPassword]=useState("");
    const [confirmPassword,setNewConfirmPassword]=useState("")
    const [selectedTab, setSelectedTab] = useState(2);
    const handleForgotEmail=async (e)=>{
        e.preventDefault();
        setSelectedTab(3);
    }
    const handForgotOtp=async (e)=>{
        e.preventDefault();
        setSelectedTab(3);
    }
    const getRouteEmail=()=>{
        const router=useRouter();
        const {email }= router.query;
        return email;
    }
    const getRouteToken=()=>{
        const router=useRouter();
        const {token }= router.query;
        return token;
    }
    const   updatePassword=async (e)=>{
        e.preventDefault();
        if(newPassword!==confirmPassword){
            document.getElementById("error-reset-message").innerHTML="Password Doesn't match";
            return;
        }
      if(!(newPassword.length>6)){
          document.getElementById("error-reset-message").innerHTML="Password Length is too short";
          return;
      }

            const res = await resetPassword({
            token: document.getElementById("tokenFromUrl").value,
            email: document.getElementById("emailFromUrl").value,
            password: newPassword,
            password_confirmation: confirmPassword
        });
        if(res.status === 0){
            console.log(res.data.errors.email);
            document.getElementById("error-reset-message").innerHTML=res.data.errors.email;
        }
        else{
            setSelectedTab(4);
        }

    }
    const resetSuccessfully = ()=>{
        window.location='/';
        setSelectedTab(1);
    }
    return (

        <div className = "Account">
            <Banner />
            <div>
                <input type="text" value={getRouteEmail()} id="emailFromUrl" hidden/>
                <input type="text" value={getRouteToken()} id="tokenFromUrl" hidden/>
            </div>
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

                        {selectedTab===1?(

                                 <div>
                                     <LoadingAnimation />
                                    </div>

                        ):selectedTab===2 ?(
                            <div>
                                <span id="error-reset-message" style={{color:"red"}}></span>
                                <h3>Enter New Password</h3>
                                <form  onSubmit={updatePassword}>

                                    <label>Password*</label>
                                    <input type="password" required
                                           onChange={(e)=>setNewPassword(e.target.value)}
                                    />
                                    <label>Confirm Password*</label>

                                    <input type="password" required
                                           onChange={(e)=>setNewConfirmPassword(e.target.value)}
                                    />

                                    <div className = "SignButtonContainer" id = "forgotButton" style={{marginTop:'20px'}}>

                                        <button className="button button-block" style = {{marginLeft: '40%'}} >
                                            <span> Submit</span>
                                        </button>
                                    </div>
                                </form>
                            </div>

                        ): selectedTab===3 ? (
                            <div>
                                <h3>Enter New Password</h3>
                                <form  onSubmit={updatePassword}>

                                    <label>Password*</label>
                                    <input type="password"
                                           onChange={(e)=>setNewPassword(e.target.value)}
                                    />
                                    <label>Confirm Password*</label>

                                    <input type="password"
                                           onChange={(e)=>setNewPassword(e.target.value)}
                                    />

                                    <div className = "SignButtonContainer" id = "forgotButton" style={{marginTop:'20px'}}>

                                        <button className="button button-block" style = {{marginLeft: '40%'}} >
                                            <span> Submit</span>
                                        </button>
                                    </div>
                                </form>
                            </div>

                        ):selectedTab===4 ? (
                            <div>
                                <h3>Your Password Reset Successfully</h3>
                                <button className="button button-block"  style = {{marginLeft: '40%',width:'200px'}} onClick = {resetSuccessfully}>
                                    <span> Go to Home </span>
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

export default ResetPassword;
