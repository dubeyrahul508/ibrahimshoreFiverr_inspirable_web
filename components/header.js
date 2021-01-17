import React, { useState, useEffect, useContext } from "react";
import ActiveLink from "./ActiveLink";
import RoundedButton from "./RoundedButton";
import "./Header.scss";
import navButtons from "../config/buttons";
import NavBar from "./NavBar";
import IconList from "./IconsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { ModalContext, ModalProvider } from "../context/modalContext";
import SignInButton from "./SignInButton";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyle";
import { lightTheme, darkTheme } from "./Themes";
import Switch from "@material-ui/core/Switch";
import Cookie from "js-cookie";
import { AuthToken } from "../services/auth_token";

library.add(fas);

const Header = (props) => {
  const { type, color, textColor, toggleColor, colorText, typeHeader } = props;
  const [isNavVisible, setIsNavVisible] = useState(false);
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 992px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  let socialIconStyle = { width: "30px" };
  let backgroundColor =
    type === "home" || type === "blog" || type === "features" ? "transparent" : "#E8FCFF";
  let headerClasses = ["header"];
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  if (scrolled) {
    type === "home"
      ? headerClasses.push("scrolledHome")
      : type === "blog"
      ? headerClasses.push("scrolledWhite")
      : headerClasses.push("scrolled");
  } else {
    type === "home" || type === "blog"
      ? headerClasses.push("initial-header")
      : type === "features" ?
        headerClasses.push("featuresNavbar")
      :
       headerClasses.push("scrolled");
  }

  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div
          style={{ backgroundColor: backgroundColor }}
          className={headerClasses.join(" ")}
        >
          <div className="image_column">
            <div className="logo-hold">
              <ActiveLink href={"/"}>
                <img
                  className="logo-link"
                  src={
                    type === "features" && !scrolled
                      ? "images/logo-light.svg"
                      :
                    typeHeader === "main"
                      ? "images/logo.svg"
                      : "../images/logo.svg"
                  }
                  alt="logo"
                />
              </ActiveLink>
            </div>
          </div>
          {(!isSmallScreen || isNavVisible) && (
            <div
              className="buttons_column"
              style={{
                animation: isNavVisible
                  ? "1s hide forwards"
                  : "1s moveOver forwards",
              }}
            >
              {isSmallScreen && (
                <div className="header_logo">
                  <ActiveLink href={"/"}>
                    <img
                      className="logo-link"
                      src={
                        typeHeader === "main"
                          ? "images/logo-light.svg"
                          : "../images/logo-light.svg"
                      }
                      alt="logo"
                    />
                  </ActiveLink>
                </div>
              )}
              {isSmallScreen && (
                <div className="times_icon" onClick={toggleNav}>
                  <FontAwesomeIcon color={"#f2f9fb"} icon={["fas", "times"]} />
                </div>
              )}
              <div className="navBar">
                <NavBar
                  color={(isSmallScreen ? "#f2f9fb" : (scrolled ? (type === "features" ? "black" : color) : (type === "features" ? "white" : color)))}
                  navButtons={navButtons}
                />
              </div>
              <div className="header_button">
                <ModalProvider>
                  <SignInButton
                    backgroundColor={type === "home" ? "#E8FCFF" : (scrolled ? (type === "features" ? "#344e5f" : "#344e5f") : type === "features" ? "white" : "#344e5f")}
                    color={type === "home" ? "#344e5f" : (scrolled ? (type === "features" ? "white" : "white") : type === "features" ? "black" : "white")}
                  />
                </ModalProvider>
              </div>
              <div className="icon_list">
                <IconList color={isSmallScreen ? "#f2f9fb" : (scrolled ? (type === "features" ? "#344e5f" : color) : (type === "features" ? "white" : color))} />
              </div>
              {Cookie.get("authToken") ? (
                <div style={{ backgroundColor: type === 'home' ? 'white' : 'rgb(52, 78, 95)' }} onClick={()=>AuthToken.removeToken()} className="logout">
                  <span style={{ color: type === 'home' ? 'rgb(52, 78, 95)' : '#f2f9fb' }}>Log out</span>
                </div>
              ) : null}
              <div
                style={{
                  display: type === "blog" || type === "posts" ? "" : "none",
                }}
                onClick={themeToggler}
                className="container-dark-mode"
              >
                <div className="moon-dark-mode"></div>
              </div>
            </div>
          )}
          <div className="toggle" onClick={toggleNav}>
            <FontAwesomeIcon color={toggleColor} icon={["fas", "bars"]} />
          </div>
        </div>
      </>
    </ThemeProvider>
  );
  p;
};

export default Header;
