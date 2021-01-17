import React from "react";

import icons from "../config/icons";
import "./IconList.scss"

const IconList = (props) => {
  const { color } = props;
  return (
  <div className="iconsList">
    {icons(color).map((icon, key) => (
      <a key={key} href={icon.link}>
        <div key={key} className="icon">{icon.icon}</div>
      </a>
    ))}
  </div>
  )
};

export default IconList;