import React, { useEffect, useState } from "react";
import { Media } from "react-bootstrap";
import Lottie from "react-lottie";
import animationBubble from "../animations/Home_page.json";

const HomeAnimation = (props) => {
  const [height, setHeight] = useState(0);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationBubble,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(()=>{
    if(screen.width > 1700) {
      setHeight(650);
    } else {
      setHeight(500);
    }
  })

  return(
    <Lottie options={defaultOptions} height={height} />
  )
};



export default HomeAnimation