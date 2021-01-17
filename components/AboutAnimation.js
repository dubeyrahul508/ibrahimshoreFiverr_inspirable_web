import React from "react";
import Lottie from "react-lottie";
import animationData from "../animations/About_us.json";

const AboutAnimation = (props) => {
  console.log(props);
  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    
      <Lottie options={defaultOptions}  />
   
  );
};

export default AboutAnimation