import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import ContainerArticle from "../components/ContainerArticle";
import Title from "../components/Title";
import "./faq.scss";
import ExpandedCard from "../components/ExpandedCard";
import CardSection from "../components/CardSection";
import cards from "../config/cards";
import Subscribe from '../components/Subscribe';
import ActiveLink from "../components/ActiveLink";
import Banner from "../components/Banner";

const Faq = () => {
  return (
    <Layout>
        <Banner />
        <Head>
        {
            process.browser?
            <>
            <script type="text/javascript" src="../public/js/branch.js"></script>
            <script type="text/javascript" src="../public/js/GTM.js"></script>
            </>:
            <></>
        }
        </Head>
      <div className="first-container-faq">
        <Title text={"Frequently Asked "} boldText="Questions" />
        <div className="subtitle-container-faq">
          <p>
          Intrigued and have questions about Inspirable? Hopefully, we can answer them with the below! </p>
         <p>
          However, if your question is not answered below then head over to our Contact Us Page where you can submit your question to us.
          </p>
        </div>
      </div>
      <div className="faq-cards">
        <CardSection cards={cards} />
      </div>
      <div className="contact-form-faq">
        <a href="mailto:contactus@inspirable.io">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" className="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg> 
          contactus@inspirable.io</a>
        <p>The email address above is only for customer support queries and we won’t be able to help with 
          other questions. Additionally, if there are questions you have that we have not answered, please 
          do feel free to forward them to this same email address.</p>
      </div>
      <Subscribe/>
    </Layout>
  );
};

export default Faq;
