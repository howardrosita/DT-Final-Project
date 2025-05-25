import eventsJson from '../data/events.json';

export const getEvents = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(eventsJson);
    }, 1500)
  });
};