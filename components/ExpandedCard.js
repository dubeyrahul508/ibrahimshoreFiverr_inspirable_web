import React, { Component } from "react";
import QuestionBox from './QuestionBox';
import './QuestionBox.scss';
import Icon from '@material-ui/core/Icon';
import ActiveLink from './ActiveLink';
import "./ExpandedCard.scss";

class ExpandedCard extends Component {
  render() {

  const  { excerpt, excerpt2, excerpt3, excerpt4, id, title, isOpen, onClick, section } = this.props;

  var displayBasedOnSection = section === "helpdesk" ? (
      <div
        className={`card-excerpt helpdeskFAQ ${isOpen ? "open" : ""}`}
        onClick={() => onClick(id)}
        style = {{backgroundColor: 'none'}}
      >
        <div className="QuestionBox">
          <div className="iconQuestionBox">
            <Icon style={{ fontSize: 40 }}>{"help_outline"}</Icon>
          </div>
          <div className="textQuestionBox">
            {title}
          </div>
        </div>
      </div>
  ) : (
    <div className="card-wrapper">
      <div
        className={`card-excerpt ${isOpen ? "open" : ""}`}
        onClick={() => onClick(id)}
      >
        <h3>
          {title}
        </h3>
        {excerpt}
        <br></br>
        {excerpt2}
        <ActiveLink href={"/closeaccount"}>
          <div className = "excerpt3" style = {{textDecoration: 'underline', display: 'contents'}}>
            {excerpt3}
          </div>
        </ActiveLink>
        {excerpt4}
        
      </div>
    </div>
   )

    return (
      <div className="card-container">
        {displayBasedOnSection}        
      </div>
    )
  }
}

export default ExpandedCard;
