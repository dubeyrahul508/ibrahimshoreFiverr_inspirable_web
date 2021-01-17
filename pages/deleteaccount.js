import React from "react";
import Layout from "../components/layout";
import Subscribe from '../components/Subscribe';
import Title from '../components/Title';
import "./deleteaccount.scss";
import { Grid } from "@material-ui/core";
import Banner from "../components/Banner";

const DeleteAccount = () => {
  return (
    <Layout>
      <Banner />
    <div className="first-container-delete">
        <Title text="Account " boldText="Closing"/>
    </div>


    <div className="subscribe-container">
      <Subscribe />
    </div>

    </Layout>
  );
};

export default DeleteAccount;
