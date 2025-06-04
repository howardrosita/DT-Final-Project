import { useState, useEffect } from "react";
import { getArtistInfo } from "../../services/artists.service";
import { useParams } from "react-router-dom";
import NavBackground from "../NavbarHero/NavBackground";
import { HeroText } from "../NavbarHero/HeroText";
import NavBar from "../NavbarHero/NavBar";
import { MoreLikeCard } from "../MoreLikeThis/MoreLikeCard";
import AboutPage from "../AboutEvents/AboutPage";
import Loading from "../Loading";
import Footer from "../Footer/Footer";

const PageContents = ({ event }) => {
  return (
    <div
      style={{
        height: "fit-content",
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
      <AboutPage event={event} type="aboutArtist" />
      <MoreLikeCard event={event.upcoming} type="upcoming" />
      <MoreLikeCard event={event.known} type="known" />
    </div>
  );
};

const ArtistInfo = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [artistData, setArtistData] = useState([]);

  //fetch yung data
  useEffect(() => {
    getArtistInfo(parseInt(id)).then((data) => {
      setArtistData(data);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) return <Loading />

  return (
    <div key={artistData.id}>
      <NavBackground event={artistData} type="artist" />
      <NavBar type="artist" />
      <PageContents event={artistData} />
      <Footer />
    </div>
  );
};

export default ArtistInfo;
