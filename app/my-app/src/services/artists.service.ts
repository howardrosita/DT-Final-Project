import artistsJson from '../data/artists.json';

export const getArtistInfo = (id: number) => {
  return new Promise((resolve) => {
    const findArtist = artistsJson.find((artist) => artist.id === id);
    setTimeout(() => {
      resolve(findArtist);
    }, 1500)
  });
};