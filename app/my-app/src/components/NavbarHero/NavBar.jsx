import React, { useCallback, useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import ticket from "../../assets/images/ticket-icon.svg";
import leftArrow from "../../assets/images/left-arrow.png";
import GalleryIcon from "../../assets/images/gallery-icon.png";
import ShareIcon from "../../assets/images/share-icon.png";
import HeartIcon from "../../assets/images/heart-icon-mobile.png";
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";

const NavBar = ({ type }) => {
  const [bgColor, setBgColor] = useState("rgba(0,0,0,0)");
  const [bgBlur, setBgBlur] = useState("blur(0px)");

  const handleNavChange = useCallback(() => {
    const scrollY = window.scrollY;
    if (scrollY >= 100) {
      setBgColor("rgba(0,0,0,0.8)");
      setBgBlur("blur(10px)");
    } else {
      setBgColor("rgba(0,0,0,0)");
      setBgBlur("blur(0px)");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleNavChange);
    return () => {
      window.removeEventListener("scroll", handleNavChange);
    };
  }, [handleNavChange]);

  return (
    <header>
      <nav
        style={{
          backgroundColor: bgColor,
          backdropFilter: bgBlur,
        }}
      >
        <div className="nav-inner">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="side-menu">
            <div className="event-ticket">
              <img src={ticket} alt="ticket-icon" className="ticket-icon" />
              <p style={{ color: "white" }}>Events</p>
            </div>
            <NavMenu />
          </div>
          <div className="mobileNavIcon">
            <div className="arrow-icon">
              <Link to={type === "artist" ? -1 : "#"}><img src={leftArrow} alt="left-arrow"></img></Link>
            </div>
            <div className="mobileNav">
              <a href="#">
                <img src={GalleryIcon} alt="left-arrow"></img>
              </a>
              <a href="#">
                <img src={ShareIcon} alt="share-icon"></img>
              </a>
              <a href="#">
                <img src={HeartIcon} alt="heart-icon"></img>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
