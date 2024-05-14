import StatusSidebar from "./components/StatusSidebar";
import { ReactComponent as TopSection } from "../../assets/top-section.svg";
import { ReactComponent as BottomSection } from "../../assets/bottom-section.svg";
import StartForm from "./components/StartForm";

const ConnectAccountPage = () => {
  return (
    <div className="page-container">
      <StatusSidebar />
      <div className="page-content-container">
        <TopSection className="top-section" />
        <BottomSection className="bottom-section" />
        <StartForm />
      </div>
    </div>
  );
};

export default ConnectAccountPage;
