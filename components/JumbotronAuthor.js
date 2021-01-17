import "./JumbotronAuthor.scss";

const JumbotronAuthor = (author) => {
  console.log(author);
  return (
    <div className="container-jumbotron">
      <div className="image-author">
        <img className="author-image" src={author.author.image ? author.author.image : '../images/avatar.png'  } />
      </div>
      <div className="author-data">
        <h3>{author.author.name}</h3>
        <span>{author.author.description}</span>
      </div>
    </div>
  );
};

export default JumbotronAuthor;
