import getEvents from "../../services/events.service";
import { useState, useEffect } from "react";

export const EventInfo = () => {
  const [eventData, setEventData] = useState([]);
  useEffect(() => {
    getEvents().then((data) => {
      setEventData(data);
    });
  }, []);
  return;
};
