const SocialButton = ({ logo, name, isNew = false, isActive = false }) => {
  return (
    <div
      className={`social-button-container ${
        isActive && "social-button-container-active"
      }`}
    >
      {logo}
      <div className="social-button-text">{name}</div>
      {isNew && <div className="social-button-new">New</div>}
    </div>
  );
};

export default SocialButton;
