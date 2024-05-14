import { ReactComponent as Checked } from "../../../assets/checked.svg";

const StatusSidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="status-container">
        <div className="status-title">Accounts Status</div>
        <div className="status-content">
          View and manage your account connection from here.
        </div>
      </div>
      <div className="required-container">
        <div className="required-title">Mandatory</div>
        <div className="required-item">
          <Checked />
          <div className="required-info">
            <div className="required-info-title">Connect Instagram</div>
            <div className="required-info-content">
              Link your professional Instagram account
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusSidebar;
