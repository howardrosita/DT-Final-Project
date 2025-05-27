import eventsJson from "../data/banner.json";
export const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(eventsJson);
    }, 1500);
  });
};
