import "./PressKit.scss";

import Title from "../components/Title";



const PressKit = () => {
  return (
    <div className="PressKitContainer">
      <div className="PressKit">
        <div className="block">

          <Title boldText={"Press"} />

          <div className="textPress">
            <p>For media enquiries, please contact <span><a href="mailto:press@inspirable.io">press@inspirable.io</a></span></p>
          </div>

          <div className="pressButton">
            <a target={"_blank"} href="https://drive.google.com/drive/folders/14lEfoLcu8t33B3Ix_3Wq_y4S2r9FpxRj?usp=sharing">
              <button type="button" name="button">Download Press Kit</button>
            </a>
          </div>

        </div>
      </div>
    </div>

  );
};

export default PressKit;
