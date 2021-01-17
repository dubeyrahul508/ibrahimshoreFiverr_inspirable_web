import "./Footer.scss";
import FooterLinks from "./FooterLinks";
import IconsList from "./IconsList";
import ActiveLink from "./ActiveLink";

const Footer = ({typeHeader}) => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="image-column">
        <div className="logo-hold">
          <ActiveLink href={"/"}>
            <img className="logo-link"
              src={
               typeHeader === "main" ? "images/logo-light.svg" : "../images/logo-light.svg"
              }
              alt="logo"
            />
          </ActiveLink>
        </div>
          <div className="icons-content">
           <IconsList color = {"#f2f9fb"} />
          </div>
        </div>
        <div className="content-links">
          <FooterLinks />
        </div>
        <div className="image-column">
          <div className="logo-hold" style = {{textAlign: 'center'}}>
            <img className="appButton" src="../images/appstore.svg" alt="icon" />
            <img className="appButton" src="../images/googleplay.svg" alt="icon" />
          </div>
        </div>
      </div>
      <div className="content-privacy">
        <span> &copy;2020 INSPIRABLE </span>
      </div>
    </div>
  );
};

export default Footer;
