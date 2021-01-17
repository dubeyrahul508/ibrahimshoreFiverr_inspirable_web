import "./Invite.scss";
import Popover from '@material-ui/core/Popover';
import SharedPage from "../components/SharedPage";


const Invite = () => {

  let url = `full-webapp-inspirable.herokuapp.com/`;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className="inviteContainer">
      <div className="invite">
        <div className="block">
          <div className="inviteText">
            Tell a friend or family member about us!
          </div>
          <div className="inviteButton">
            <button onClick={handleClick} type="button" name="button">Invite</button>

              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'center',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'center',
                  horizontal: 'center',
                }}
              >
                <div className="popover-shared">
                  <span>Share the app with your friends!</span>
                  <SharedPage shareLink={url} />
                </div>
            </Popover>

          </div>
        </div>
      </div>
    </div>

  );
};

export default Invite;
