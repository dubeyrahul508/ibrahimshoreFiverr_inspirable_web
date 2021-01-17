import "./Benefits.scss";

import Icon from '@material-ui/core/Icon';


const Benefits = (props) => {
  return (
        <div class="benefitsCard">
          <div className="iconBenefitsCard">
            <Icon style={{ fontSize: 40 }}>{props.icon}</Icon>
          </div>
          <div className="textBenefitsCard">
            {props.text}
          </div>
        </div>
  );
};

export default Benefits;
