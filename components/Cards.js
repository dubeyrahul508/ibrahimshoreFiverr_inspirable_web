import "./Cards.scss";
import { PersonOutline, ListAlt, ErrorOutline, HelpOutline, SupervisorAccount, History } from '@material-ui/icons';
import ActiveLink from "../components/ActiveLink";


const Cards = () => {
  return (
    <div className="cardsContainer">
      <div className="cards">
      <ActiveLink href={"/mydetails"}>
        <div class="card">
          <div className="iconCard">
            <PersonOutline style={{ fontSize: 40 }} />
          </div>
          <div className="textCard">
            My Details
          </div>
        </div>
        </ActiveLink>
        <ActiveLink href="/orderhistory">
        <div class="card">
          <div className="iconCard">
            <History style={{ fontSize: 40 }} />
          </div>
          <div className="textCard">
            Order History
          </div>
        </div>
        </ActiveLink>
        <ActiveLink href={"/faq"}>
        <div class="card">
          <div className="iconCard">
            <ErrorOutline style={{ fontSize: 40 }} />
          </div>
          <div className="textCard">
            FAQs
          </div>
        </div>
        </ActiveLink>
        <ActiveLink href={"/helpdesk"}>
        <div class="card">
          <div className="iconCard">
            <HelpOutline style={{ fontSize: 40 }} />
          </div>
          <div className="textCard">
            Help Desk
          </div>
        </div>
        </ActiveLink>
        <ActiveLink href={"/blog"}>
        <div class="card">
          <div className="iconCard">
            <ListAlt style={{ fontSize: 40 }} />
          </div>
          <div className="textCard">
            Blog Page
          </div>
        </div>
        </ActiveLink>
        {/* <ActiveLink href={"/parentdashboard"}>
        <div class="card">
          <div className="iconCard">
            <SupervisorAccount style={{ fontSize: 40 }} />
          </div>
          <div className="textCard">
            Parent Dashboard
          </div>
        </div>
        </ActiveLink> */}
      </div>
    </div>

  );
};

export default Cards;
