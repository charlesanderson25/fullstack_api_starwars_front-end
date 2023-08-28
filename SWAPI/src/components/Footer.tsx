import React from "react";

const textFooter = {
  h1: "Charles Anderson",
};

const Footer: React.FC = () => {
  const footerStyle = {
    backgroundColor: "#282828",
    padding: "1.5rem 2rem",
    color: "white",
    // textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "10px",
  };

  const titleStyle = {
    fontSize: "0.7rem",
    lineHeight: "1.25rem",
    fontFamily: "Josefin Sans, sans-serif",
    color: "#f9004d",
    // textAlign: "center",
  };

  return (
    <div style={footerStyle}>
      <h1 style={titleStyle}>{textFooter.h1}</h1>
    </div>
  );
};

export default Footer;
