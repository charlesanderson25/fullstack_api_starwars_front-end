import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  const buttonStyle = {
    backgroundColor: "#f9004d",
    color: "white",
    padding: "0.75rem 1rem",
    borderRadius: "0.25rem",
    cursor: "pointer",
    border: "none",
  };

  const hoverStyle = {
    backgroundColor: "#ffcdb8",
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
      onMouseLeave={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
