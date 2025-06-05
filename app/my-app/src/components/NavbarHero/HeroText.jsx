import React from "react";
import LocationPin from "../../assets/images/pin-icon.png";
import { Tags } from "./Tags";
export const HeroText = ({ event, type }) => {
  return (
    <div>
      <h1 style={{ fontSize: "40px", margin: "0" }}>{event.title}</h1>
      {type !== "artist" &&
        <>
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
        </>
      }
      {event.tags && <Tags tags={event.tags} type={type} />}
    </div>
  );
};
