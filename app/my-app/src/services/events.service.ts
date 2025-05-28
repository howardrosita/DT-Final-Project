import eventsJson from "../data/events.json";

// I defined the type for the event information based on the structure of the JSON data.
// This will help in ensuring type safety when working with event data throughout the application.
export type TEventInfo = {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
  price: string;
  tags: string[];
  similar: string[];
  artists: { name: string; id: number; profile: string }[];
  usefulInfo: {
    title: string;
    icon: string;
  }[];
  socials: {
    name: string;
    icon: string;
  }[];
  vibe: string[];
  more: {
    id: string;
    imgUrl: string;
    title: string;
    location: string;
    description: string;
    prices: {
      type: string;
      price: string;
    }[];
  }[];
};

export const getEvents = (): Promise<TEventInfo[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(eventsJson);
    }, 1500);
  });
};
