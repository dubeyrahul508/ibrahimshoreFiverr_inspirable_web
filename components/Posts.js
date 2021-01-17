import Post from "../components/Post";
import './Posts.scss'
import {useEffect} from "react";

const Posts = ({posts}) => {

  return (
    <div className="posts-container"  style ={{paddingLeft: '5%', paddingRight: '5%'}}>
      {posts.data.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
