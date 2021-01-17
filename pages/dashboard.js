import React from "react";
import LayoutDashboard from "../components/LayoutDashboard";
import Popover from '@material-ui/core/Popover';
import "./dashboard.scss";
import { Button } from "@material-ui/core";
import Head from "next/head";
import Banner from "../components/Banner";

const Dashboard = () => {

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
    <LayoutDashboard>
      <Banner />
      <head>				{process.browser?<script type="text/javascript" src="../public/js/GTM.js"></script>:<></>}</head>
      <div className="container-dashboard">
        <div className="container-left">
          <div className="header-profile">
            <img className="logo-link" src="images/back-dash-head.png" alt="logo" />
          </div>
          <div className="header-profile-detail">
            <div className="profile-photo">
              <img src="images/photo.png" />
            </div>
            <div className="profile-detail">
              <span className="name-profile" onClick={handleClick} >Felix Jones</span>
              <span>Reader</span>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <div className="popover-profile">
                  <p>Childs Profiles</p>

                  <span>Just top to view Child</span>
                  <span>Profile below</span>

                  <div className="profile">
                    <img className="photo-small" src="images/photo.png" />
                    <spam>Felix's screen time</spam>
                  </div>
                  <div className="profile">
                    <img className="photo-small" src="images/photo.png" />
                    <spam>Alice's screen time</spam>
                  </div>
                  <div className="profile">
                    <img className="photo-small" src="images/photo.png" />
                    <spam>Barbara's screen time</spam>
                  </div>
                  <div className="profile">
                    <img className="photo-small" src="images/photo.png" />
                    <spam>Philip's screen time</spam>
                  </div>

                  <Button className="close-button">Close</Button>
                </div>

              </Popover>
            </div>
          </div>

          <div className="container-right-mov">
            <div className="section-right">
              <span>Felix's Reading Time</span>
              <div className="section-container">
                <img className="icon-section" src="images/book.png" />
                <p className="title-section">Time of book reading</p>
                <p className="time-section"><span>50 </span>Minutes</p>
              </div>
            </div>
          </div>

          <p className="books-title">Books</p>
          <div className="currently-books">
          <Button className="currently-reading">Currently reading</Button>
          <Button className="books-completed">Books completed</Button>
          <Button className="view-all">View all</Button>
          </div>
          <div className="books-container">
              <img className="book" src="images/book1.png" />
              <img className="book" src="images/book2.png" />
              <img className="book" src="images/book1.png" />
              <img className="book" src="images/book2.png" />
              <img className="book" src="images/book1.png" />
              <img className="book" src="images/book2.png" />
              <img className="book" src="images/book1.png" />
              <img className="book" src="images/book2.png" />
              <img className="book" src="images/book1.png" />
              <img className="book" src="images/book2.png" />
          </div>


          <div className="container-right-mov container-right-mov-b">
            <div className="section-right">
              <span>Vocab Helper</span>
              <div className="section-container section-container-b">
                <div className="schedule">
                  <p>1:00pm</p>
                  <p>Today</p>
                </div>
                <div className="word-page-section">
                  <p className="word-section">Twirl</p>
                  <p className="page-section">Page 1</p>
                </div>
              </div>
            </div>
          </div>




        </div>
        <div className="container-right">


          <div className="section-right">
            <span>Felix's Reading Time</span>
            <div className="section-container">
              <img className="icon-section" src="images/book.png" />
              <p className="title-section">Time of book reading</p>
              <p className="time-section"><span>50 </span>Minutes</p>
            </div>
          </div>


          <div className="section-right">
            <span>Vocab Helper</span>
            <div className="section-container">
              <div className="schedule">
                <p>1:00pm</p>
                <p>Today</p>
              </div>
              <p className="word-section">Twirl</p>
              <p className="page-section">Page 1</p>
            </div>
          </div>


          <div className="words-list">
            <Button>
              Words List
            </Button>
          </div>


        </div>
      </div>
    </LayoutDashboard>
  );
};

export default Dashboard;
