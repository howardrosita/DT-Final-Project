import React from "react";
// import lea from "../../assets/images/lea.jpg";
// import bruno from "../../assets/images/bruno.jpg";
// import martin from "../../assets/images/martin.jpg";
// import sara from "../../assets/images/sara.jpg";

const NavBackground = ({ event }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,1)),url(${event.imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
      className="nav-background"
    ></div>
  );
};

export default NavBackground;
