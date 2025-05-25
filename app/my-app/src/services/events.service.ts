import eventsJson from '../data/artists.json';

export const getEvents = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(eventsJson);
    }, 1500)
  });
};