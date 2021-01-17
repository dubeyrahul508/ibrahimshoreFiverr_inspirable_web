import React from 'react';
import Layout from "../components/layout";
import Title from "../components/Title";
import Subscribe from '../components/Subscribe';
import "./closeaccount.scss";

const CloseAccount = () => {
    return (
        <Layout>
            <div className="first-container-closeaccount">
                <Title text={"close "} boldText="Account" />
            </div>

            <div class = "closeAccountContent">
                <h3>Tell us why you are closing your account?</h3>
                <div class = "label">
                    <input type="radio" class="form-check-input" name="optradio" />
                    <label>I have a duplicate account</label><br></br>
                </div>
                <div class = "label">
                    <input type="radio" class="form-check-input" name="optradio" />
                    <label>I'm getting too many emails</label><br></br>
                </div>
                <div class = "label">
                    <input type="radio" class="form-check-input" name="optradio" />
                    <label>I'm not getting any value from membership</label><br></br>
                </div>
                <div class = "label">
                    <input type="radio" class="form-check-input" name="optradio" />
                    <label>I've a privacy concern</label><br></br>
                </div>
                <div class = "label">
                    <input type="radio" class="form-check-input" name="optradio" />
                    <label>I'm recieving unwanted contact</label><br></br>
                </div>
                <div class = "label">
                    <input type="radio" class="form-check-input" name="optradio" />
                    <label>Other</label><br></br>
                </div>

                <h3>Your feedback matters. Is there anything else you'd like us to know?</h3>
                <textarea></textarea>
                <div class = "buttons">
                    <button class = "backToSetting">Back To Setting</button>
                    <button class = "next">Next</button>
                </div>
            </div>

            <div className="subscribe-container">
              <Subscribe />
            </div>
        </Layout>
    );
}

export default CloseAccount;