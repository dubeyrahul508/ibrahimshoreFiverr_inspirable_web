import Post from "../components/Post";
import LatestPost from "../components/LatestPost";
import './Posts.scss'
import {useEffect} from "react";

const Posts = ({posts}) => {

  return (
    <div className="posts-wrapper">
      {posts.data.map((post) => (
        <LatestPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
