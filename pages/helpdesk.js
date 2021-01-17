import React from "react";
import Layout from "../components/layout";
import Subscribe from '../components/Subscribe';
import Title from '../components/Title';
import HelpDeskBox from "../components/HelpDeskBox";
import QuestionBox from "../components/QuestionBox";
import CardSection from "../components/CardSection";
import cards from "../config/cards";
import "./helpdesk.scss";
import { Grid } from "@material-ui/core";
import Banner from "../components/Banner";

const HelpDesk = () => {
  return (
    <Layout>
     <Banner />
    <div className="first-container-help-desk">
        <p className = "paragraph">Send us a message and we'll get back to you within 48 hours.</p>
        <Title text="Help " boldText="Desk"/>
    </div>

    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

    <div className="help-container">

    <div className="helpdesk-container">

      <div className="helpdeskbox-container">
        <HelpDeskBox
          text="Welcome to the customer service center"
          icon="support_agent"
          info="Our team aim to respond to all queries within 48 hours"
        />
        <HelpDeskBox
          text="FAQs"
          icon="info_outline"
          info="Find answers to our most commonly asked questions"
          button="Search FAQs"
          buttonClickNewLink = "/faq"
        />
        <HelpDeskBox
          text="Ask a Question"
          icon="help_outline"
          info="Send us a message and we'll get back to you"
          button="Ask a Question"
          buttonClickNewLink = "/askaquestion"
        />
      </div>

      <div className="questions-container">

        <div className="title-quuestions">
          <p>Most commonly asked questions</p>
        </div>

        <div className="question-container">
          <CardSection cards={cards} section = "helpdesk"/>
        </div>

      </div>

      <div className="info-question-container">
        <p>You don't have any conversations. <span>Click here to ask us a question.</span></p>
      </div>

      <div className="info-container">
        <p>We can deal with your enquiry more quickly if you're logged in and use the  contact form. However, if you are unable to use the form, please email.</p>
      </div>

      <div className="email-container">
      <a href="mailto:contactus@inspirable.io">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" className="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg> 
          contactus@inspirable.io</a>
      </div>

    



    </div> 
      
    </div>

    <div className="subscribe-container">
      <Subscribe />
    </div>

    </Layout>
  );
};

export default HelpDesk;
