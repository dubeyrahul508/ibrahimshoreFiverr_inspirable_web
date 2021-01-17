import "./HelpDeskBox.scss";

import Icon from '@material-ui/core/Icon';
import ActiveLink from "./ActiveLink";


const HelpDeskBox = (props) => {

  const testing = () => {
    console.log("We got: " + props.buttonClickNewLink);
  }

  return (
        <div class="helpDeskBox">
          <div className="iconHelpDeskBox">
            <Icon style={{ fontSize: 40 }}>{props.icon}</Icon>
          </div>
          <div className="textHelpDeskBox">
            {props.text}
          </div>
          <div className="infoHelpDeskBox">
            {props.info}
          </div>
          {props.button ? 
            <ActiveLink href = {(props.buttonClickNewLink)? props.buttonClickNewLink: ""}>
              <input type="submit" id="sendEmail" onClick = {testing} name="sendEmail" value={props.button} /> 
            </ActiveLink>
            : ''
          }
           
        </div>
  );
};

export default HelpDeskBox;
