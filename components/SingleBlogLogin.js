import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { postRegister, postLogin, add_contact } from "../services/rest_service";
import SignUpTodayButton from "../components/SignUpTodayButton";
import { ModalProvider } from "../context/modalContext";
import './SingleBlogLogin.scss';

const SingleBlogLogin = (props) => {
    const [email, setEmail] = useState("");
    const [passwordL, setPasswordL] = useState("");
    const [message, setMessage] = useState("");

    
    const handleSumbitLogin = async (e) => {
        e.preventDefault();
        /* setSubmitting(true); */
        const res = await postLogin({
          email,
          password: passwordL,
        });
        /* setSubmitting(false); */
        if (res.code !== "200") {
            console.log("here");
          setMessage("An error ocurred.Check your data.");
          setTimeout(() => {
            setMessage("");
          }, 5000);
        }/*  else {
            document.getElementById("singleBlogLogin").style.display = "none";
        } */
    };

    return(
        <div className = "singleBlogLogin" id = "singleBlogLogin" style = {{display: props.show}}>
            <div className = "form">
                <div className = "formHeader">
                    <div className = "title">
                        <h2>Login</h2>
                        <div className = "imgHolder">
                            <img src = "../images/cancel-25.png" onClick = {props.method}/>
                        </div>
                    </div>

                    <div className = "formContent">
                        <Grid item xm = {12} sm = {12} md = {6}>
                            <form action="/" method="post" onSubmit={handleSumbitLogin}>
                                <label>User</label>
                                <input
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="text"
                                    required
                                    type="email"
                                    required
                                    autoComplete="off"
                                />

                                <label>Password</label>
                                <input
                                    onChange={(e) => setPasswordL(e.target.value)}
                                    id="passwordl"
                                    type="password"
                                    required
                                    autoComplete="off"
                                    /* onKeyUp={(e) => onKeyUp(e.target.value, e.target.id, "login")} */
                                />

                                <p>I forgot my password</p>

                                {message !== "" ? (
                                    <p
                                    className="text-danger"
                                    style={{ color: "red", paddingBottom: "1em" }}
                                    >
                                    {message}
                                    </p>
                                ):<p></p>}
                            </form>
                        </Grid>
                        <Grid item xm = {12} sm = {12} md = {1} style = {{borderRight: '1px solid rgba(0,0,0,0.2)'}}></Grid>
                        <Grid item xm = {12} sm = {12} md = {5}>
                            <button>
                                <img src = "../images/email-open-30.png" />
                                <span> with email</span>
                            </button>
                        </Grid>
                    </div>

                    <div className = "formFooter">
                        <button onClick = {handleSumbitLogin}>
                            <img src = "../images/private-lock-30.png" />
                            Login
                        </button>
                        <ModalProvider>
                            <SignUpTodayButton isText = "true" color= "#2a2a9c" text = "Create New Account" redirect = "/blog" fontSize = "1.3em" marginLeft = "5%" paddingTop= "1%"/>
                        </ModalProvider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlogLogin;