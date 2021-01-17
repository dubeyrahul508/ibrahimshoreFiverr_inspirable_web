import React from "react";
import Layout from "../components/layout";
import Subscribe from "../components/Subscribe";
import PressKit from "../components/PressKit";
import { pressAboutInspirableText1, pressAboutInspirableText2, pressAboutInspirableText3 } from "../config/text";
import "./press.scss";
import { Grid } from "@material-ui/core";
import Banner from "../components/Banner";

const Press = () => {
  
  
  return (
    <Layout>
        <Banner />
      <PressKit />

      <div className="press-container">
        <div className="image-container-r hide-on-desk">
          <img src="images/press-about-image.png" alt="logo" />
        </div>
        <div className="text-container-l">
          <h3>About Inspirable</h3>
          <p>{pressAboutInspirableText1}</p>
          <p>{pressAboutInspirableText2}</p>
          <p>{pressAboutInspirableText3}</p>
        </div>
        <div className="image-container-r hide-on-mobile">
          <img src="images/press-about-image.png" alt="logo" />
        </div>
      </div>

      <div className="subscribe-container">
        <Subscribe />
      </div>
    </Layout>
  );
};

export default Press;
