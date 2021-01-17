import React, { useState } from "react";

const GridBox = (props) => {
  const { title, text, textExpanded } = props;
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="content" onClick={() => toggle()}>
      <div className="col">
        <h3 className="title"><strong>{title}</strong></h3>
        <div className="text-content">
          <p className="text">{text}</p>
        </div>
      </div>
      {isActive && (
        <div className="expanded-content">
          <p>
              {textExpanded}
          </p>
        </div>
      )}
    </div>
  );
};
