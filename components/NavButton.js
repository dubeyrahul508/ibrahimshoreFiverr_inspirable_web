import ActiveLink from "./ActiveLink";
import { useRouter } from "next/router";
import "./NavButton.scss";

const NavButton = (props) => {
  const { pathname } = useRouter();
  const { color } = props;
  return (
    <ActiveLink href={props.path} activeClassName="active" >
       <span style={{color: color }} className="navButton">{props.label}</span>
    </ActiveLink>
  );
};

export default NavButton;
