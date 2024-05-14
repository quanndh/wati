const Button = ({ children, onClick, isDisabled, variant = "solid" }) => {
  return (
    <div
      className={`button-container ${variant === "solid" && "button-solid"}`}
    >
      {children}
    </div>
  );
};

export default Button;
