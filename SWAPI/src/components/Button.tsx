import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button
      className="bg-f9004d hover:bg-ffcdb8 text-white p-3 rounded-md cursor-pointer"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
