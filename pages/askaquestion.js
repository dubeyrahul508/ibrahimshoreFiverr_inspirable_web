import React, { useState, useRef, useContext, useEffect } from 'react';
import Layout from "../components/layout";
import Title from '../components/Title';
import Subscribe from '../components/Subscribe';
import { getUserInfo } from "../services/rest_service";
import {something, getSomething, please, questionFormData} from "../services/testing";
import "./askaquestion.scss";
import axios from 'axios';
import Cookie from "js-cookie";
import ActiveLink from '../components/ActiveLink';
import Head from "next/head";
import Banner from "../components/Banner";

const AskAQuestion = () => {
    useEffect(() => {
        const getInitialData = async ()=>{
            const currtoken = Cookie.get('authToken')
            console.log(currtoken, "currrrrrrrrtttttooookeen")
            const currUser  = await getUserInfo(currtoken);
            setCurrUser(currUser)

        }
        getInitialData();
    }, [])
    const [selectedFileName, setSelectedFileName] = useState("")
    const [currUser, setCurrUser] = useState("")
    
    const chooseFile = useRef(null)
    const fileUpload = () => {
        // var file = document.getElementById("fileUpload");

        chooseFile.current.click();
        // console.log(chooseFile.current.files[0].name);
    }

    const submitForm = () => {
        var subject = document.getElementById("subject").value;
        var contactId = currUser.id;
        // var departmentId = "48240000000007061";
        var email = currUser.email;
        var description = document.getElementById("description").value;
        var file = selectedFileName;

        questionFormData({
            subject,
            // contactId,
            // departmentId,
            email,
            description,
            priority: 1,
            status: 2
        }, file);
        /* please();
            /* var file = document.getElementById("fileUpload").files[0];
            getSomething({file,ticketId: "48240000000122527"}); */ 
    }

    return (
        <Layout>
            {/* <Banner /> */}
            <head>
                {process.browser?<script type="text/javascript" src="../public/js/GTM.js"></script>:<></>}
            </head>
            <div className="first-container-askaquestion">
                <p>Send us a message and we will get back to you within 48 hours.</p>
                <Title text="Ask A " boldText="Question"/>
            </div>

            <div class = "askaquestion-container">
                <div className="card">
                    <div className = "card-title"> Ask A Question </div>
                    <input type = "text" placeholder = "Subject" id = "subject" className = "subject" />        
                    <textarea placeholder = "Enter Your Question" id = "description" className = "textArea"></textarea>
                    <div class = "file">
                        <input type = "text" placeholder = "choose a file (you can upload files upto 2mb)" class = "fileUploadDummy" readOnly = "true" />
                        <img onClick={fileUpload} src="images/paperclip-25.png"/>
                        <input type = "file" ref={chooseFile} className = "fileUpload" onChange={e=>setSelectedFileName(e.target.files[0])} id = "fileUpload" /><br></br>
                        <h2>{selectedFileName?selectedFileName.name:''}</h2>
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