import { useState, useEffect } from "react";
import { getEvents } from "../../services/events.service";
import NavBackground from "../NavbarHero/NavBackground";
import NavBar from "../NavbarHero/NavBar";
import Artists from "../Artists/Artists";
import LocationPin from "../../assets/images/pin-icon.png";
import { HeroText } from "../NavbarHero/HeroText";
import AboutEvent from "../AboutEvents";
import { MoreLikeCard } from "../MoreLikeThis/MoreLikeCard";
import Footer from "../Footer/Footer";
//dito i cocompile mga component
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
      <HeroText event={event} />
      {/* <AboutSection /> */}
      <AboutEvent />
      {/* <Artists artists={event.artists} /> */}
      {/* <MoreSection /> */}
      <MoreLikeCard />
      {/* <Footer /> */}
    </div>
  );
};

export const EventInfo = () => {
  const [eventData, setEventData] = useState([]);

  //fetch yung data
  useEffect(() => {
    getEvents().then((data) => {
      setEventData(data[0]);
    });
  }, []);

  return (
    <>
      <div key={eventData.id}>
        <NavBackground event={eventData} /> {/* background ng page */}
        <NavBar event={eventData} /> {/* navbar na sticky */}
        <PageContents event={eventData} />
        <Footer />
      </div>
    </>
  );
};
