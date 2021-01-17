import React, {useContext} from "react";
import Layout from "../components/layout";
import Subscribe from '../components/Subscribe';
import Cards from '../components/Cards';
import Invite from '../components/Invite';
import Title from '../components/Title';
import "./myaccount.scss";
import { Grid } from "@material-ui/core";
import { AuthContext } from "../context/auth";
import Banner from "../components/Banner";

const MyAccount = () => {
  const{ user } = useContext(AuthContext);
  console.log(user);
  return (
    <Layout>
    <div className="first-container-account">
      <Title text="My " boldText="Account"/>
    </div>

    <Invite />

    <Cards />

    <div className="subscribe-container">
      <Subscribe />
    </div>

    </Layout>
  );
};

export default MyAccount;
