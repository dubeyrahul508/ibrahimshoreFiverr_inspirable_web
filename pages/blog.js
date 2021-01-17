import React, { useState } from "react";
import Layout from "../components/layout";
import Posts from "../components/Posts";
import "./Blog.scss";
import Title from "../components/Title";
import Subscribe from "../components/Subscribe";
import BlogBanner from "../components/BlogBanner";
import LatestBlog from "../components/LatestBlogs";
import Modal from "../components/Modal";
import { getCountry } from '../services/getGeoInfo'
import Head from "next/head";
import Banner from "../components/Banner";

const Blog = ({ posts }) => {
  const [count, setCount] = useState(1);
  const [updatedPosts, setUpdatedPosts] = useState(posts)

  const getPosts = () => {
    if(posts.links.next !== null) {
      setCount(count+1);
      fetch("https://production.inspirable.io/api/blog?page="+count)
        .then(res => {
          setUpdatedPosts(res.json())
      })
    }
  }

  const nextButton = () => {
    getPosts();
  }

  let mostRecentDate = new Date(
    Math.max.apply(
      null,
      posts.data.map((post) => {
        return new Date(post.updated_at);
      })
    )
  );
   
  console.log(mostRecentDate)
  let mostRecentPost = posts.data.filter((post) => {
    let d = new Date(post.updated_at);
    return d.getTime() == mostRecentDate.getTime();
  });

  const buttons = () => {
    if(posts.links.next !== null) {
      return (
        <div className = "buttons">
          <button className = "controlButton">{count}</button>
          <button className = "controlButton">{count + 1}</button>
          <button className = "controlButton" onClick = {nextButton}><img src="https://img.icons8.com/fluent-systems-filled/15/000000/forward.png"/></button>
        </div>
      );
    }
  }

  console.log(mostRecentPost);

  return (
    <Layout type="blog" typeHeader="blog">
      <Head>
      {
					process.browser?
					<>
					<script type="text/javascript" src="../public/js/branch.js"></script>
					<script type="text/javascript" src="../public/js/GTM.js"></script>
					</>:
					<></>
				}
      </Head>
      <div className="blog-container">
        <BlogBanner post={mostRecentPost[0]} />
        <div className="posts-container-blog">
          <Title text="Latest " boldText="Blogs" />
          {/* <LatestBlog posts={(updatedPosts)? updatedPosts: posts}/> */}
          <Posts posts={(updatedPosts)? updatedPosts: posts} />
        </div>
        {buttons()}
      </div>
      <Subscribe />
    </Layout>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://production.inspirable.io/api/blog?page=1");
  const posts = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: posts,
    },
  };
}

export default Blog;
