import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import Title from "./Title";

import { ModalContext } from "../context/modalContext";
import { homepage_firstTitle, homepage_firstParagraph } from "../config/text";

import "./LayoutHome.scss";
import { ModalProvider } from "../context/modalContext";
import SignUpToday from "./SignUpTodayButton";
import PlayStore from "../components/PlayStore";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { AuthProvider } from "../context/auth";

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';



const useStyles = makeStyles((theme) => ({
  root: {
    height: 400,
    flexGrow: 1,
    minWidth: 400,
    transform: 'translateZ(0)',
    // The position fixed scoping doesn't work in IE 11.
    // Disable this demo to preserve the others.
    '@media all and (-ms-high-contrast: none)': {
      display: 'none',
    },
  },
  modal: {
    display: 'flex',
    padding: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
  },
}));

const LayoutHome = (props) => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return(
  <div className="layout">


    <Head>
      <title>Inspirable</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <div>
      <div className="image-layout-container">
      <Header type={"home"} color={"#f2f9fb"} textColor={"#334d5e"} toggleColor={'#334d5e'} colorText={"#334d5e"}/>
        <Container maxWidth = "false">	
          <Grid container className="first-container-home">
            {/* <Grid items xs={12} sm={6} className="video-home hide-on-desk">
            <div className="video-container">
              <iframe className="video1" width="560" height="315" src="https://www.youtube.com/embed/a64U6FM9J3w" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              <img className="image2" src="images/square.png" alt="logo" />
            </div>
            </Grid> */}
            <Grid items xs={12} sm={6} className="text-container">
            <div className="container-title">
              <Title fontSize='2.3em' html={"Reading Made Better – <br><strong>One Book At A Time</strong>"} alignText="left"  alignBoldText="left"/>
            </div>
            <p style={{ color: "#A1A1A1" }}>
              Inspirable is the best place for children to discover, organise, read, and engage with books!
            </p>
            <div className="subscribeForm">
              <div className="formEmail">
              <ModalProvider>
                <SignUpToday />
              </ModalProvider>
              </div>
            </div>
            </Grid>
            <Grid items xs={12} sm={6} className="video-home hide-on-mobile">
            <div className="video-container">
              <div className="video1" onClick={handleOpen}>
                <div className="button-play">
                  <button class="ytp-large-play-button ytp-button" aria-label="Play"><svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%"><path class="ytp-large-play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00c"></path><path d="M 45,24 27,14 27,34" fill="#fff"></path></svg></button>
                </div>
                <div className="image-video">
                 <img className="image3" src="https://img.youtube.com/vi/a64U6FM9J3w/maxresdefault.jpg" alt="logo" />
                </div>
              </div>
              <img className="image2" src="images/square.png" alt="logo" />
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <div className="makeStyles-paper-3" >
                    <iframe className="video1"  src="https://www.youtube.com/embed/a64U6FM9J3w?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                  </div>
                </Fade>
              </Modal>
      
            </div>
            </Grid>

          </Grid>
        </Container>
        {/* <div className="text-play-store">
          <span className="muted-text">Start Your Child's Reading Journey Today!</span>
        </div>
        <PlayStore /> */}

      </div>


      <div className="content">
       {props.children}
     
        </div>

      <Footer />
    </div>
  </div>

  )
};

export default LayoutHome;
