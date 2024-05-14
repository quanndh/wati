import { ReactComponent as Whatsapp } from "../../assets/whatsapp.svg";
import { ReactComponent as Ig } from "../../assets/instagram.svg";
import SocialButton from "./SocialButton";

const PageHeader = () => {
  const socialButtons = [
    { logo: <Whatsapp />, name: "Whatsapp" },
    { logo: <Ig />, name: "Instagram", isNew: true, isActive: true },
  ];

  return (
    <div className="page-header__container">
      {socialButtons.map((btn, index) => (
        <SocialButton key={index} {...btn} />
      ))}
    </div>
  );
};

export default PageHeader;
