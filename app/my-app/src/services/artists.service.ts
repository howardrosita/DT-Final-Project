import artistsJson from "../data/artists.json";

export interface UsefulInfo {
  title: string;
  icon: string;
}

export interface Social {
  name: string;
  icon: string;
}

export interface Price {
  type: string;
  price: string;
}

export interface UpcomingEvent {
  id: number;
  imgUrl: string;
  title: string;
  location: string;
  description: string;
  prices: Price[];
}

export interface KnownWork {
  id: number;
  imgUrl: string;
  description: string;
  location: string;
  title: string;
}

export type TArtist = {
  id: number;
  title: string;
  profile: string;
  imageUrl: string;
  about1: string;
  about2: string;
  about3: string;
  usefulInfo: UsefulInfo[];
  socials: Social[];
  tags: string[];
  vibe: string[];
  upcoming: UpcomingEvent[];
  known: KnownWork[];
};

export const getArtistInfo = (id: number): Promise<TArtist | undefined> => {
  return new Promise((resolve) => {
    const findArtist = artistsJson.find((artist) => artist.id === id);
    setTimeout(() => {
      resolve(findArtist);
    }, 1500);
  });
};
