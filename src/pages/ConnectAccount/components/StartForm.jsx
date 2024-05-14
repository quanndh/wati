import Ig from "../../../assets/instagram.svg";
import { ReactComponent as StartIcon } from "../../../assets/start-icon.svg";
import Button from "../../../components/Button";

const StartForm = () => {
  const contents = [
    {
      icon: <StartIcon />,
      title: "All your chats in one place.",
      content:
        "Manage all your customer chats across Whatsapp and Instagram from a unified Team Inbox interface.",
    },
    {
      icon: <StartIcon />,
      title: "Capture and manage leads.",
      content:
        "Streamline lead capturing from your Instagram account and seamlessly route them to WhatsApp for further nurturing.",
    },
    {
      icon: <StartIcon />,
      title: "Automate responses.",
      content:
        "Ensure quick response times on Instagram DM by using chatbot flows that answer FAQ's and capture customer contact details.",
    },
  ];

  return (
    <div className="start-form-container">
      <div className="start-form-header">
        <div className="start-form-header-ig">
          <img src={Ig} className="ig-logo" />
          <div className="start-form-header-title">Instagram</div>
        </div>
        <div className="start-form-header-content">
          Connect Instagram with WATI.
        </div>
      </div>
      <div className="start-form-content">
        {contents.map((content, index) => (
          <div key={index} className="content-container">
            {content.icon}
            <div className="content-info">
              <div className="content-title">{content.title}</div>
              <div className="content-content">{content.content}</div>
            </div>
          </div>
        ))}
      </div>
      <Button variant="solid">Get Started</Button>
    </div>
  );
};

export default StartForm;
