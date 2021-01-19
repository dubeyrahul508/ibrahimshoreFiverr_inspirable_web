import "./LatestPost.scss";
import moment from "moment";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faHollyBerry } from "@fortawesome/free-solid-svg-icons";
import zIndex from "@material-ui/core/styles/zIndex";
import getTime from 'reading-time';
import Grid from '@material-ui/core/Grid';

library.add(fas);

const Post = ({ post }) => {
  const router = useRouter();
  console.log(post);
  const [hover, isHovering] = useState(false);

  const toogleHoverState = () => {
    console.log("aa");
    isHovering(!hover);
  };

  
  return (
    <Grid item xs={12} sm={12} md={4}>
    <div
      onMouseEnter={() => {
        toogleHoverState();
      }}
      onMouseLeave={() => {
        toogleHoverState();
      }}
      className={true ? "last-post-container" : "post-container new"}
      onClick={() => {
        router.push(`/posts/[id]`, `/posts/${post.id}`);
      }}
    >
      <div
        style={{
          backgroundImage: `url(${post.image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
        className="image-container-latest-post"
      >
        {hover && (
          <div
            style={{
              width: "4em",
              height: "2.5em",
              backgroundColor: "white",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: "4",
            }}
          >
            <FontAwesomeIcon color={"#334d5e"} icon={["fas", "arrow-right"]} />
          </div>
        )}

        {hover && (
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, .4)",
              zIndex: "3",
              borderTopRightRadius: "10px",
              borderTopLeftRadius: "10px",
            }}
          ></div>
        )}
      </div>
      <div className="container-text">
        <span>by {post.author.name} - {moment(post.created_at).format("D MMMM YYYY").toString()}</span>
        <h3>{post.name}</h3>
        <span style={{position: "absolute", bottom: "1em", left: "35%"}}>{getTime(post.content).text}</span>
      </div>
    </div>
    </Grid>
  );
};

export default Post;
