import React from "react";
import Lottie from "react-lottie";
import animationData from "../animations/Illustration_Animation (Move lips to center).json";

const ChildrenAnimation = (props) => {
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

export default ChildrenAnimation