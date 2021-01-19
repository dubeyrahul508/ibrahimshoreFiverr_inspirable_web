import Layout from "../../components/layout";
import { getAllPostIds, getPostData, putPostData } from "../../config/posts";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ReactHtmlParser from "react-html-parser";
import Subcribe from "../../components/Subscribe";
import SignInButton from '../../components/SignInButton';
import SingleBlogLogin from "../../components/SingleBlogLogin";
import "./post.scss";
import moment from "moment";
import getTime from 'reading-time';
import JumbotronAuthor from "../../components/JumbotronAuthor";
import SharedIcons from "../../components/SharedIcons";
import axios from "axios";
import Comments from "../../components/Comments";
import Cookie from "js-cookie";
import { getUserInfo } from "../../services/rest_service";
import { ModalProvider } from "../../context/modalContext";

const Post = ({ postData, id }) => {
  const [correct, isCorrect] = useState(false);
  const [comment, setComment] = useState("");
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState("none");

  useEffect(() => {
    if(localStorage.getItem(`blogView${id}`)!==id){
      putPostData(id)
      localStorage.setItem(`blogView${id}`, id);
    }
  }, [])

  const fileClick = () => {
    document.getElementById('fileUpload').click();
    console.log("clicked");
  }

  const getUserName = () => {
    getUserInfo(Cookie.get('authToken')).then( result => {
      setUserName(result.first_name);
    });
  }

  const selectionOccured = () => {
    var html = "";
    if (typeof window.getSelection != "undefined") {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var container = document.createElement("div");
            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                container.appendChild(sel.getRangeAt(i).cloneContents());
            }
            html = container.innerHTML;
        }
    } else if (typeof document.selection != "undefined") {
        if (document.selection.type == "Text") {
            html = document.selection.createRange().htmlText;
        }
    }

    return html;
  }

  const makeBold = () => {
    const text = selectionOccured();
    const textArea = document.getElementById('textArea').innerHTML;
    document.getElementById('textArea').innerHTML = textArea.replace(text, "<span style = 'font-weight: bold'}>"+text+"</span>");
  }

  const makeItalic = () => {
    const text = selectionOccured();
    const textArea = document.getElementById('textArea').innerHTML;
    document.getElementById('textArea').innerHTML = textArea.replace(text, "<span style = 'font-style: italic'}>"+text+"</span>");
  }

  const makeUnderline = () => {
    const text = selectionOccured();
    const textArea = document.getElementById('textArea').innerHTML;
    document.getElementById('textArea').innerHTML = textArea.replace(text, "<span style = 'text-decoration: underline'}>"+text+"</span>");
  }

  const makeStrikeThrough = () => {
    const text = selectionOccured();
    const textArea = document.getElementById('textArea').innerHTML;
    document.getElementById('textArea').innerHTML = textArea.replace(text, "<span style = 'text-decoration: line-through'}>"+text+"</span>");
  }

  const renderTextArea = () => {
    getUserName();
    if (Cookie.get("authToken")) {
      return (
        <div className="comment-area" id = "commentArea" style = {{display: 'none'}}>
          <div className = "topBar">
            <h4>{postData.comments_count} Comments</h4>
          </div>
          <div className = "box">
            <img src = "../images/photo.png" />
            <div style = {{width: '100%', position: 'relative'}}>
              
              <div className = "textArea" id = "textArea" contentEditable></div>
              <div className = "bottomBox">
                <input type = "file" style = {{display: 'none'}} id = "fileUpload"/>
                <img src="https://img.icons8.com/pastel-glyph/25/000000/image--v2.png" onClick = {fileClick}/>
                <img src="https://img.icons8.com/ios-filled/25/000000/b.png" onClick = {makeBold}/>
                <img src="https://img.icons8.com/metro/25/000000/italic.png" onClick = {makeItalic}/>
                <img src="https://img.icons8.com/android/25/000000/underline.png" onClick = {makeUnderline}/>
                <img src="https://img.icons8.com/fluent-systems-filled/25/000000/strikethrough.png" onClick = {makeStrikeThrough}/>
                {/* <img src="https://img.icons8.com/fluent-systems-filled/25/000000/quote-right.png"/> */}
                <div style = {{width: '100%'}}>
                  <button
                    onClick={() => onNewComment()}
                    disabled={comment !== "" ? false : true}
                    className="comment-button"
                  >
                    {correct ? <span>Success</span> : <span>Post As {userName}</span>}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return;
    }
  };

  const onNewComment = () => {
    axios
      .post(
        `https://production.inspirable.io/api/blog/${id}/comments`,
        { content: comment },
        {
          headers: {
            Authorization: `Bearer ${Cookie.get("authToken")}`,
          },
        }
      )
      .then(function (response) {
        isCorrect(true);
        setComment("");
        setTimeout(() => {
          isCorrect(false);
        }, 4000);
      })
      .catch(function (error) {
        isCorrect(false);
      });
  };

  const startDiscussion = () => {
    if(Cookie.get('authToken')) {
      document.getElementById('commentArea').style.display = 'flex';
      document.getElementById('startDiscussionButton').style.display = 'none';
    } else {
      setShow("block");
    }
  }

  const continueDiscussion = () => {
    if(Cookie.get('authToken')) {
      document.getElementById('commentArea').style.display = 'flex';
      document.getElementById('continueDiscussionButton').style.display = 'none';
    } else {
      setShow("block");
    }
  }

  const crossClicked = () => {
    setShow("none");
  }

  let url = `full-webapp-inspirable.herokuapp.com/posts/${postData.id}`;
  return (
    <div className = "idJS">
      <div className = "singleBlogLogin" id = "singleBlogLogin1" style ={{display: show}}>
        <SingleBlogLogin method = {crossClicked} show = {show} />
      </div>
      <Layout type={"blog"} typeHeader="blog">
        <div className="render-content">
          <div className="img-render">
            <div className="post-data">
              <span className="post-title">{postData.name}</span>
              <div className="post-metadata">
                <span className="post-date">
                  {moment(postData.created_at).format("D MMMM YYYY").toString()}
                </span>
                <span className="post-time">{getTime(postData.content).text}</span>
              </div>
            </div>
            <img className="post-image" src={postData.image}></img>
          </div>
          <div className="post-render">
            {ReactHtmlParser(postData.content)}
            <JumbotronAuthor author={postData.author} />
            {postData.comments_count > 0 ? (
              <div className = "comments">
                <Comments comments={postData.comments} />
                <div id = "continueDiscussionButton" style = {{width: '100%', textAlign: 'center'}} onClick = {continueDiscussion}>
                  <button 
                    class = "continueDiscussion"
                    style = {{
                      padding: '1%',
                      borderRadius: '20px',
                      border: 'none',
                      backgroundColor: '#344E5F',
                      color: 'white'
                    }}
                  >
                    Continue Discussion
                  </button>
                  {/* <ModalProvider>
                    <SignInButton text = "Continue Discussion" redirect = "none"/>
                  </ModalProvider>  */}   
                </div>
              </div>
            ) : 
            <div id = "startDiscussionButton" style = {{width: '100%', textAlign: 'center', marginTop: '5%'}} onClick = {startDiscussion}>
              <button 
                class = "startDiscussion"
                style = {{
                  padding: '1%',
                  borderRadius: '20px',
                  border: 'none',
                  backgroundColor: '#344E5F',
                  color: 'white'
                }}
              >
                Start Discussion
              </button>
              {/* <ModalProvider>
                <SignInButton text = "Start Discussion" redirect = "none"/>
              </ModalProvider> */}
            </div>}
            {renderTextArea()}
          </div>
        </div>
        <SharedIcons shareLink={url} />
        <Subcribe isBlog={true} />
      </Layout>  
    </div>
  );
};

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // const postPutView = await putPostData(params.id);
  const post = await getPostData(params.id);
  return {
    props: {
      postData: post.post,
      id: params.id,
    },
  };
}

export default Post;
