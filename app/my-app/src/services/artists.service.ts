import artistsJson from '../data/artists.json';

export const getArtists = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(artistsJson);
    }, 1500)
  });
};