import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

function icons(color) {
  console.log(color)
  return icons = [
    {
      name: "fb",
      icon: <FontAwesomeIcon color={color} icon={["fab", "facebook-f"]} />,
      link:
        "https://www.facebook.com/inspirableBooks",
    },
    {
      name: "is",
      icon: <FontAwesomeIcon color={color}  icon={["fab", "instagram"]} />,
      link: "https://www.instagram.com/inspirablebooks/",
    },/*
    {
      name: "tw",
      icon: <FontAwesomeIcon color={color}  icon={["fab", "twitter"]} />,
      link: "https://twitter.com/InspirableBooks",
    },*/
    {
      name: "yt",
      icon: <FontAwesomeIcon color={color}  icon={["fab", "youtube"]} />,
      link:
        "https://www.youtube.com/channel/UCW5p3U29I4rdV1aVCSf9zVQ?view_as=subscriber",
    },/*,
    {
      name: "pinterest",
      icon: <FontAwesomeIcon color={color}  icon={["fab", "pinterest-p"]} />,
      link: "https://www.pinterest.co.uk/InspirableBooks/",
    },*/
  ];
}
export default icons;
