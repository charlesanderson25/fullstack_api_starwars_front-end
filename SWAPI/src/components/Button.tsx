// import React, { ButtonHTMLAttributes } from "react";

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   children: React.ReactNode;
// }

// const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
//   return (
//     <button
//       className="bg-f9004d hover:bg-ffcdb8 text-white p-3 rounded-md cursor-pointer"
//       {...rest}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;

import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  const buttonStyle = {
    backgroundColor: "#f9004d",
    hoverBackgroundColor: "#ffcdb8",
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
      onMouseLeave={(e) => Object.assign(e.currentTarget.style, {})}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
