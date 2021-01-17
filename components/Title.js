import React from "react";
import Parser from "html-react-parser";

import "./Title.scss";

const Title = (props) => {
  const {
    text = "",
    subTitle,
    boldText = "",
    html = "",
    alignText = "center",
    alignBoldText= "right",
    fontSize= "26px",
    Display= "flex",
    marginTop = "",
  } = props;

  const classNameTitle = subTitle ? `title` : `title text`;

  const AnotherClass = props.underline ? classNameTitle + ' underline': classNameTitle;

  const classNameSubtitle = subTitle ? `subtitle text` : `subtitle`;

  const renderText = () => {
    if ( html.length > 0 ) {
      return (
        <p style={{fontSize:fontSize, textAlign:alignText}} className={AnotherClass}>
          {Parser(html)}
        </p>
      );
    }

    if (alignBoldText === "right") {
      return (
        <p style={{fontSize:fontSize}} className={AnotherClass}>
          {text} <strong>{boldText}</strong>
        </p>
      );
    }
    else {
      return (
        <p style={{fontSize:fontSize, textAlign:alignText}} className={AnotherClass}>
          <strong>{boldText}</strong>
          {text}
        </p>
      );
    }
  };
  return (
    <div style={{ alignItems: alignText, marginTop: marginTop, paddingTop: props.padTop, display: (props.Display === 'block')?props.Display: 'flex', textAlign: props.textAlign }} className="container-title">
      {renderText()}

      {subTitle && <span className={classNameSubtitle}>{subTitle}</span>}
    </div>
  );
};

export default Title;
