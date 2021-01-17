import "./Comment.scss";
import moment from "moment";

const Comment = ({ comment }) => {
  return (
    <div className="comment-container">
      <div className="image-author-comment">
        <img className="author-image-comment" src={"../images/avatar.png"} />
      </div>
      <div className="author-data-comment">
        <span style={{color:'black'}}>{`${comment.client.first_name} ${
          comment.client.last_name
        } on ${moment(comment.client.created_at).format("Do MM YYYY")}`}</span>
        <span>{comment.content}</span>
      </div>
    </div>
  );
};

export default Comment;
