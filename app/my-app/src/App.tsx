import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HeroMain } from "./components/NavbarHero/HeroMain";
import AboutEvent from "./components/AboutEvents";
import NavBackground from "./components/NavbarHero/NavBackground";
import NavBar from "./components/NavbarHero/NavBar";
import { EventInfo } from "./components/pages/EventInfo";

function App() {
  return (
    <>
      {
        <EventInfo />
        /* <AboutEvent /> */
      }
    </>
  );
}

export default App;
