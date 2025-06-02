import { useState, useEffect } from 'react'
import { getArtistInfo } from '../../services/artists.service';
import { useParams } from 'react-router-dom';
import NavBackground from '../NavbarHero/NavBackground';
import { HeroText } from '../NavbarHero/HeroText';
import NavBar from '../NavbarHero/NavBar';
import AboutEvent from '../AboutEvents';
import { MoreLikeCard } from '../MoreLikeThis/MoreLikeCard';

const PageContents = ({ event }) => {
  return (
    <div
      style={{
        height: "1500px",
        zIndex: 1,
        backgroundColor: "transparent",
        color: "white",
        maxWidth: "1200px",
        margin: "auto",
        marginTop: "170px",
        padding: "1rem",
      }}
    >
      <HeroText event={event} type="artist" />
      <AboutEvent />
      <MoreLikeCard event={event.upcoming} type="upcoming" />
      <MoreLikeCard event={event.known} type="known" />
    </div>
  );
};

const ArtistInfo = () => {
  const { id } = useParams();
  const [artistData, setArtistData] = useState([]);

  //fetch yung data
  useEffect(() => {
    getArtistInfo(parseInt(id))
      .then((data) => {
        setArtistData(data);
      });
  }, [id]);

  return (
    <div key={artistData.id}>
      <NavBackground event={artistData} type="artist" />
      <NavBar />
      <PageContents event={artistData} />
    </div>
  )
}

export default ArtistInfo