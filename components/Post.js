import "./Post.scss";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import getTime from 'reading-time';
import ActiveLink from "./ActiveLink";
import {useEffect} from "react";

const Post = ({ post }) => {
  const router = useRouter();

  return (
    <ActiveLink href={`/posts/${post.id}`}>
      <div className="post-container">
      <div
        className="image-container-post"
        style = {{backgroundImage: 'url(' + post.image + ')'}}
      >
          <div className="arrow" style={{backgroundImage:'url(images/arrow.png)'}}>
          </div>
      </div>
      <div className="container-text">
        <span>By {post.author.name} - {moment(post.created_at).format("DD MMMM YYYY").toString()}</span>
        <h3>{post.name}</h3>
        <p style={{fontSize:'13px', position:'absolute',bottom:'1rem', left: '39%'}}>{getTime(post.content).text}</p>
      </div>
      </div>
    </ActiveLink>
  );
};

export default Post;

