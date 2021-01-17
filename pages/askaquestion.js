import React from 'react';
import Layout from "../components/layout";
import Title from '../components/Title';
import Subscribe from '../components/Subscribe';
import {something, getSomething, please, questionFormData} from "../services/testing";
import "./askaquestion.scss";
import axios from 'axios';
import ActiveLink from '../components/ActiveLink';
import Head from "next/head";
import Banner from "../components/Banner";

const AskAQuestion = () => {
    const fileUpload = () => {
        var file = document.getElementById("fileUpload");
        file.click();
    }

    const submitForm = () => {
        var subject = document.getElementById("subject").value;
        var contactId = "48240000000120051";
        var departmentId = "48240000000007061";
        var email = "something@something.com";
        var description = document.getElementById("description").value;
        var file = document.getElementById("fileUpload").files[0];

        questionFormData({
            subject,
            contactId,
            departmentId,
            email,
            description
        }, file);
        /* please();
            /* var file = document.getElementById("fileUpload").files[0];
            getSomething({file,ticketId: "48240000000122527"}); */ 
    }

    return (
        <Layout>
            <Banner />
            <head>
                {process.browser?<script type="text/javascript" src="../public/js/GTM.js"></script>:<></>}
            </head>
            <div className="first-container-askaquestion">
                <p>Send us a message and we will get back to you within 48 hours.</p>
                <Title text="Ask A " boldText="Question"/>
            </div>

            <div class = "askaquestion-container">
                <div class="card">
                    <div class = "card-title"> Ask A Question </div>
                    <input type = "text" placeholder = "Subject" id = "subject" class = "subject" />        
                    <textarea placeholder = "Enter Your Question" id = "description" class = "textArea"></textarea>
                    <div class = "file">
                        <input type = "text" placeholder = "choose a file (you can upload files upto 2mb)" class = "fileUploadDummy" readOnly = "true" />
                        <img src = "images/paperclip-25.png" onClick = {fileUpload}/>
                        <input type = "file" class = "fileUpload" id = "fileUpload" /><br></br>
                    </div>
                    {/* <ActiveLink href = {"/myaccount"}> */}
                        <button class = "submit" onClick = {submitForm}>Submit</button>
                    {/* </ActiveLink> */}
                </div>
            </div>

            <div className="subscribe-container">
              <Subscribe />
            </div>
        </Layout>
    );
}

export default AskAQuestion;