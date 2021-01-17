import "./PlayStore.scss";
import ActiveLink from "../components/ActiveLink";


const PlayStore = () => {
  return (
    <div className="playStoreContainer">
      <div className="playStore">
        <img className="appButton" src="images/appstore.svg" alt="icon" />
        <img className="appButton" src="images/googleplay.svg" alt="icon" />
      </div>
    </div>

  );
};

export default PlayStore;
