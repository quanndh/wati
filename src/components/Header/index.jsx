import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Inbox } from "../../assets/inbox.svg";
import NavItem from "./NavItem";
import IconButton from "../IconButton";
import Button from "../Button";

const Header = () => {
  const menus = [
    {
      icon: <Inbox />,
      text: "Team Inbox",
    },
    {
      icon: <Inbox />,
      text: "Broadcast",
    },
    {
      icon: <Inbox />,
      text: "Contacts",
    },
    {
      icon: <Inbox />,
      text: "Automation",
    },
    {
      icon: <Inbox />,
      text: "More",
    },
  ];

  return (
    <div className="header__contaienr">
      <div className="header__section">
        <Logo className="header__logo" />
        <div className="seperator" />
        {menus.map((menu, index) => (
          <NavItem key={index} {...menu} />
        ))}
      </div>
      <div className="header__section">
        <Button variant="outlined">Book a demo</Button>
        <div className="seperator" />
        <IconButton icon={<Inbox />} />
        <div className="seperator" />
        <IconButton icon={<Inbox />} />
      </div>
    </div>
  );
};

export default Header;
