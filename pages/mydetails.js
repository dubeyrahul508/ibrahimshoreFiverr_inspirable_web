import React from "react";
import Layout from "../components/layout";
import Subscribe from '../components/Subscribe';
import Title from '../components/Title';
import "./mydetails.scss";
import DetailsForm from '../components/DetailsForm'
import { Grid } from "@material-ui/core";
import Banner from "../components/Banner";

const MyDetails = () => {
  return (
    <Layout>
      <Banner />
      
    <div className="first-container-details">
        <Title text="My " boldText="Details"/>
    </div>

    <div className="details-container">
      <div className="details-container">
        <DetailsForm />
      </div>
    </div>


    <div className="subscribe-container">
      <Subscribe />
    </div>

    </Layout>
  );
};

export default MyDetails;
