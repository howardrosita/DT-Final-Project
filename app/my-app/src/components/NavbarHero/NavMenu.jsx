import React, { useEffect } from "react";
import burger from "../../assets/images/burgerbtnicon.svg";
import userIcon from "../../assets/images/user-icon.png";
import Menu from "./Menu.jsx";
import { useState } from "react";
const NavMenu = ({ isSidebarVisible }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuOpen((prev) => !prev); // toggle visibility on click
  };

  const closeMenu = () => {
    setMenuOpen(false);
  }

  useEffect(() => {
    window.addEventListener("click", closeMenu);

    return () => {
      window.removeEventListener("click", closeMenu);
    }
  }, [])

  return (
    <div className="navbar-menu">
      <div className="menu-icon menu-btn" onClick={toggleMenu}>
        <img src={burger} alt="burger-btn" />
      </div>
      <div className="menu-icon user">
        <img src={userIcon} alt="user-icon" />
      </div>
      {menuOpen && <Menu isSidebarVisible={isSidebarVisible} />}
    </div>
  );
};

export default NavMenu;
