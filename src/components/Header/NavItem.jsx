const NavItem = ({ icon, text }) => {
  return (
    <div className="header__nav-item">
      {icon}
      <div className="header__nav-item-text">{text}</div>
    </div>
  );
};

export default NavItem;
