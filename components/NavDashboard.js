import React, {Component} from 'react';
import "./NavDashboard.scss";
import navButtons from "../config/buttons-dashboard";
import NavButton from "./NavButton";
import ActiveLink from "./ActiveLink";
import { PersonOutline, ListAlt, ErrorOutline, HelpOutline, SupervisorAccount, Menu } from '@material-ui/icons';

class NavBarDashboard extends Component {
  state = {clicked: false}

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render(){
  return (
    <nav className="navDashboard">

      <div className="nav-logo-menu">

        <div className="nav-logo">
          <ActiveLink href={"/"}>
            <img className="logo-link" src="images/logo.svg" alt="logo" />
          </ActiveLink>
        </div>

        <div className="menu-icon" onClick={this.handleClick}>
        <Menu style={{ fontSize: 40 }} />
        </div>

        <ul className={this.state.clicked ? "nav-menu act" : "nav-menu"}>

        {navButtons.map((button) => (
            <li className="navbarItems">
              <NavButton key={button.path} path={button.path} label={button.label} />
            </li>
        ))}

        </ul>

      </div>

      <div className="account-container">
        <ul className="account-active">
          <li>
            <NavButton key="" path="" label="Hi! Felix" />
          </li>
        </ul>
      </div>

    </nav>
  );
}
};


export default NavBarDashboard;
