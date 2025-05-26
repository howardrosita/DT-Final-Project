import React from "react";
import LocationPin from "../../assets/images/pin-icon.png";
export const HeroText = ({ event }) => {
  return (
    <div>
      <h1>{event.title}</h1>
      <p
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <img src={LocationPin} alt=""></img>
        {event.location.city}, - {event.location.venue}
      </p>
      <p>
        {event.dateRange.start} - {event.dateRange.end}
      </p>
    </div>
  );
};
