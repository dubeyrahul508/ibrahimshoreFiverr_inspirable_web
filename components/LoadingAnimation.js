import React from "react";
import Lottie from "react-lottie";
import animationData from "../animations/LoadingScreen.json";
import "./LoadingAnimation.scss";

const LoadingAnimation = (props) => {
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
    <div>
      {props.children}
      <div className="overlay">
        <div className="loading-animation">
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
