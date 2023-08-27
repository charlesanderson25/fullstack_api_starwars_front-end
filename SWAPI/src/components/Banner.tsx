// import React from "react";

// const Banner: React.FC = () => {
//   return (
//     <div className="bg-darkTheme p-6 sm:p-8 md:p-12 lg:p-16 text-white">
//       <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
//         Pesquise seu personagem - Star Wars
//       </h1>
//     </div>
//   );
// };

// export default Banner;

import React from "react";

const Banner: React.FC = () => {
  const bannerStyle = {
    backgroundColor: "#282828",
    padding: "1.5rem 2rem",
    color: "white",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    lineHeight: "1.75rem",
    fontFamily: "Josefin Sans, sans-serif",
    color: "#f9004d",
  };

  return (
    <div style={bannerStyle}>
      <h1 style={titleStyle}>Pesquise seu personagem - Star Wars</h1>
    </div>
  );
};

export default Banner;
