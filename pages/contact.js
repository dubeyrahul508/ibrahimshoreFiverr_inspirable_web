import React from 'react'
import Layout from '../components/layout'
import Title from '../components/Title'
import './contact.scss'
import { contactSubtitle } from '../config/text'
import ContactForm from '../components/ContactForm'
import Subscribe from '../components/Subscribe'
import Head from "next/head";
import Banner from "../components/Banner";

const Contact = () => {
    return (
    <Layout>
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
        <div className="first-container-contact">
            <Title text={" Us"} boldText="Contact" alignBoldText="left"/>
            <div className="subtitle-container-contact">
                <p style={{ color: '#6E6E6E' }}>Do you have a question about Inspirable, our mobile app, or anything else? 
                If so, you have come to the right place. Please take a look at our FAQ page to see if we have already answered 
                your question. If you do not see your unique question listed, or if you require further assistance, please do
                 not hesitate to contact us directly by filling out the provided form below.</p>
            </div>
        </div>
        <div className="contact-container">
            <div className="details-container">
                <ContactForm />
            </div>
        </div>

        <Subscribe />

    </Layout>
    )
}

export default Contact
