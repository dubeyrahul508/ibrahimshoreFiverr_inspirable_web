import NavButton from "./NavButton";
import "./NavBar.scss";

const NavBar = (props) => {
  const { color } = props;
  return (
    <nav className="navBar">
      {props.navButtons.map((button) => (
        <NavButton key={button.path} path={button.path} label={button.label} color={color} />
      ))}
    </nav>
  );
};


export default NavBar;
