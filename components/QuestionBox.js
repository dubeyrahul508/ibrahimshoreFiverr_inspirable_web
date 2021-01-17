import "./QuestionBox.scss";

import Icon from '@material-ui/core/Icon';


const QuestionBox = (props) => {
  return (
        <div className="QuestionBox">
          <div className="iconQuestionBox">
            <Icon style={{ fontSize: 40 }}>{props.icon}</Icon>
          </div>
          <div className="textQuestionBox">
            {props.text}
          </div>
        </div>
  );
};

export default QuestionBox;
