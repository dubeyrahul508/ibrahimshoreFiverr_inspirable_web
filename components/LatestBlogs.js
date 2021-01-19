
import LatestPost from '../components/LatestPost'
import './LatestBlog.scss'
import Title from './Title';
import RoundedButton from './RoundedButton';
import ActiveLink from "../components/ActiveLink";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
const LatestBlog = ({ posts }) => {
  let newPosts = posts.data.slice(0, 3);
  return (
    <div className="latest-container">
      <Title text="Our Latest" boldText="Blogs" fontSize="1.8em"/>
    
    <div className="posts-wrapper">
      {newPosts.map((post) => {
        return <LatestPost key={post.id} post={post} />;
      })}
    </div>
    
      <ActiveLink href={"/blog"}>
        <RoundedButton padding="15px 60px" text="All Posts"/>
      </ActiveLink>
    </div>
  )
};

export default LatestBlog;
