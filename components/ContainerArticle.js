import React from "react";
import "./ContainerArticle.scss";
import RoundedButton from "./RoundedButton";

const ContainerArticle = (props) => {
  const {
    backgroundImage,
    title,
    colorTitle,
    colorSubTitle,
    subTitle,
    titleButton,
    colorButton,
    colorTextButton,
  } = props;

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="principal-container"
    >
      <div className="title-header-container">
        <span style={{color: colorTitle}} className="title">{title}</span>
        <span  style={{color: colorSubTitle}} className="subTitle">{subTitle}</span>
      </div>
      <div className="button-container">
        <RoundedButton
          text={titleButton}
          backgroundColor={colorButton}
          color={colorTextButton}
        />
      </div>
    </div>
  );
};

export default ContainerArticle;
