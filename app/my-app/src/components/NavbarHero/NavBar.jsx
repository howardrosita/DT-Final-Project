import React, { useCallback, useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import ticket from "../../assets/images/ticket-icon.svg";
import leftArrow from "../../assets/images/left-arrow.png";
import GalleryIcon from "../../assets/images/gallery-icon.png";
import ShareIcon from "../../assets/images/share-icon.png";
import HeartIcon from "../../assets/images/heart-icon-mobile.png";
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";
import NavSearch from "./NavSearch";

const NavBar = ({ type }) => {
  const [bgColor, setBgColor] = useState("rgba(0,0,0,0)");
  const [bgBlur, setBgBlur] = useState("blur(0px)");
  const [isSticky, setIsSticky] = useState(false)

  const handleNavChange = useCallback(() => {
    const scrollY = window.scrollY;
    if (scrollY >= 195) {
      setBgColor("rgba(0,0,0,0.8)");
      setBgBlur("blur(64px)");
      setIsSticky(true);
    } else {
      setBgColor("rgba(0,0,0,0)");
      setBgBlur("blur(0px)");
      setIsSticky(false);
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
          boxShadow: isSticky ? "2px 2px 15px 2px rgb(2, 2, 2)" : "",
          ["--nav-height"]: type === "artist" ? "fit-content" : "88px"
        }}
      >
        <div className="nav-inner">
          <div className="logo-container">
            <img src={logo} alt="logo" />
          </div>
          <NavSearch type={type} />
          <div className="side-menu">
            <div className="event-ticket">
              {!isSticky &&
                <>
                  <img src={ticket} alt="ticket-icon" className="ticket-icon" />
                  <p>Events</p>
                </>
              }
              {isSticky && <p>For professionals</p>}
            </div>
            <NavMenu />
          </div>
        </div>
        <div className="mobileNavIcon" style={{
          ['--mobile-nav-display']: type === "artist" ? "flex" : "none",
        }}>
          <div className="mobileNavIcon-inner">
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
              {type !== "artist" &&
                <a href="#">
                  <img src={HeartIcon} alt="heart-icon"></img>
                </a>
              }
              {type === "artist" && <button>Follow</button>}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
