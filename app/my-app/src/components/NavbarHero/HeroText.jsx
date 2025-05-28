import React from "react";
import LocationPin from "../../assets/images/pin-icon.png";
export const HeroText = ({ event }) => {
  return (
    <div>
      <h1 style={{ fontSize: "40px" }}>{event.title}</h1>
      <p
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <img src={LocationPin} alt=""></img>
        {event.location}
      </p>
      <p>{event.date}</p>
    </div>
  );
};
