import getEvents from "../../services/events.service";
import { useState, useEffect } from "react";
import bannerImg from "../../assets/images/banner-bg.png";
import { HeroText } from "./HeroText";
import { Tags } from "./Tags.jsx";
export const EventInfo = () => {
  const [eventData, setEventData] = useState([]);
  useEffect(() => {
    getEvents().then((data) => {
      setEventData(data);
    });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <HeroText event={eventData} />
      {eventData.tags && <Tags tags={eventData.tags} />}
    </div>
  );
};
