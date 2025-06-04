import React from "react";
import searchIcon from "../../assets/images/magnifying-glass1.png";
import startIcon from "../../assets/images/star-icon.png";
import heartIcon from "../../assets/images/heart-icon.png";
import announceIcon from "../../assets/images/announcement-icon.png";
import mvPlayIcon from "../../assets/images/movie-player-icon.png";

const Menu = () => {
  return (
    <div className="menu" onClick={(e) => e.stopPropagation()}>
      <div className="menu-create-account">
        <div className="create-account-details">
          <h3>Create your account!</h3>
          <p>Get personalized event recommendations tailored for you!</p>
        </div>
        <div className="create-btns-container">
          <button className="create-btn signup">Sign up</button>
          <button className="create-btn login">Log in</button>
        </div>
      </div>
      <div>
        <div className="menu-options">
          <img src={searchIcon} alt="search-icon" className="menu-icons" />
          <p>Search Events</p>
        </div>
        <div className="menu-options">
          <img src={heartIcon} alt="search-icon" className="menu-icons" />
          <p>Follow Art Organizations</p>
        </div>
        <div className="menu-options">
          <img src={startIcon} alt="search-icon" className="menu-icons" />
          <p>Highlight Video</p>
        </div>
        <div className="menu-options">
          <img src={announceIcon} alt="search-icon" className="menu-icons" />
          <p>Latest News</p>
        </div>
        <div className="menu-options" style={{ borderBottom: "none" }}>
          <img src={mvPlayIcon} alt="search-icon" className="menu-icons" />
          <p>Watch</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
