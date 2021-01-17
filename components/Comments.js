import Comment from "../components/Comment";
import './Comments.scss'

const Comments = ({comments}) => {
   console.log('commen', comments)
  return (
    <div className="comments-wrapper">
      <h2>Comments ({comments.length})</h2>
      {comments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
