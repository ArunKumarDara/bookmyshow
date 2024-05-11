import PropTypes from "prop-types";

const Button = ({ title, onClick, variant, disabled, fullWidth, type }) => {
  let className = "bg-primary p-1 text-white";

  if (fullWidth) {
    className += "w-full";
  }

  if (variant === "outlined") {
    className = className.replace(
      "bg-primary",
      "border border-primary text-primary bg-white"
    );
  }

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{ border: "0px", color: "white" }}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;
