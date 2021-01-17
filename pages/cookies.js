
import React from "react";
import Layout from "../components/layout";
import ReactHtmlParser from "react-html-parser";
import Parser from "html-react-parser";
import './privacy.scss'

const Privacy = ({ data }) => {
  console.log(data);
  return (
    <Layout>
       <div className="legal-content">
            {ReactHtmlParser(data)}
       </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://production.inspirable.io/api/pages/cookies-policy");
  const content = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
       data: content.data.replace(/&nbsp;/g, '')
    },
  };
}

export default Privacy;
