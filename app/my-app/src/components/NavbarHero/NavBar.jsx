import React, { useCallback, useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import ticket from "../../assets/images/ticket-icon.svg";
import NavMenu from "./NavMenu";

const NavBar = () => {
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
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
