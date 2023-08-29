import React from "react";

const textBanner = {
  h1: "Pesquise seu personagem - Star Wars",
};

const Banner: React.FC = () => {
  const bannerStyle = {
    backgroundColor: "#282828",
    padding: "1.5rem 2rem",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "10px",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    lineHeight: "1.75rem",
    fontFamily: "Josefin Sans, sans-serif",
    color: "#f9004d",
  };

  return (
    <div style={bannerStyle}>
      <h1 style={titleStyle}>{textBanner.h1}</h1>
    </div>
  );
};

export default Banner;
