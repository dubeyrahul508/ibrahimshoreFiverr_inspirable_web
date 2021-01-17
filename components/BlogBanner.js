import Title from "../components/Title";
import moment from "moment";
import getTime from 'reading-time';
import "./BlogBanner.scss";
import { useRouter } from "next/router";
import ReactHtmlParser from "react-html-parser";

const BlogBanner = ({ post }) => {
  const router = useRouter();
  console.log(post);

  let cleanPost = post.content.replace(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g, '');
  let previewText = cleanPost.split('.')[0];
  console.log('pre', previewText);

  return (
    <div
      className="full-container"
      onClick={() => {
        router.push(`/posts/[id]`, `/posts/${post.id}`);
      }}
    >
      <div className="img-container">
        <img src={post.image} />
      </div>
      <div className="full-text-container">
        <span className="date hide-on-mobile">
        By {post.author.name} - {moment(post.created_at).format("DD MMMM YYYY").toString()}
        </span>
        <span className="title hide-on-mobile">{post.name}</span>
          <p className="preview hide-on-mobile">{ReactHtmlParser(previewText)}...</p>
        <span className="hide-on-mobile">{getTime(post.content).text}</span>

        <span className="title hide-on-desk">{post.name}</span>
        <span className="date hide-on-desk">
          {moment(post.created_at).format("DD MMMM YYYY").toString()}
        </span>
        <span className="author hide-on-desk">{post.author.name}</span>
        <p className="preview hide-on-desk">{ReactHtmlParser(previewText)}...</p>
        
      </div>
    </div>
  );
};

export default BlogBanner;
