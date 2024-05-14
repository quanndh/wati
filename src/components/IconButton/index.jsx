const IconButton = ({ icon, onClick }) => {
  return (
    <div onClick={onClick} className="icon-button-container">
      {icon}
    </div>
  );
};

export default IconButton;
