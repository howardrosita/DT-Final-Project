import eventsJson from "../data/events.json";
export const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(eventsJson);
    }, 1500);
  });
};
