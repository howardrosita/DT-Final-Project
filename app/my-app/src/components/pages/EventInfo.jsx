import { useState, useEffect } from "react";
import { getEvents } from "../../services/events.service";
import NavBackground from "../NavbarHero/NavBackground";
import NavBar from "../NavbarHero/NavBar";
import { HeroText } from "../NavbarHero/HeroText";
import { MoreLikeCard } from "../MoreLikeThis/MoreLikeCard";
import Footer from "../Footer/Footer";
import AboutPage from "../AboutEvents/AboutPage";
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
      <AboutPage event={event} type="aboutEvent" />
      {/* <Artists artists={event.artists} /> */}
      {/* <MoreSection /> */}
      <MoreLikeCard event={event.more} type="more" />
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
