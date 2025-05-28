import React from "react";
import "../../banner.css";
import MagnifyingIcon from "../../assets/images/magnifying-glass1.png";
import HeartIcon from "../../assets/images/heart-icon.png";
import StarIcon from "../../assets/images/star-icon.png";
import NewsIcon from "../../assets/images/announcement-icon.png";
import WatchIcon from "../../assets/images/movie-player-icon.png";
export const SideBar = ({ isSidebarVisible }) => {
  return (
    <>
      {isSidebarVisible && (
        <div className="sidebar">
          <div className="account-section">
            <p className="title">Create your account!</p>
            <p className="subtitle">
              Get personalized event recommendations tailored just for you!
            </p>
            <div className="buttons">
              <button className="sign-up">Sign up</button>
              <button className="log-in">Log in</button>
            </div>
          </div>
          <ul className="menu">
            <li>
              <span>
                <img src={MagnifyingIcon} alt="" />
              </span>
              <span className="menu-label">Search Events</span>
            </li>
            <li>
              <span>
                <img src={HeartIcon} alt="" />
              </span>
              <span className="menu-label">Follow Art Organizations</span>
            </li>
            <li>
              <span>
                <img src={StarIcon} alt="" />
              </span>
              <span className="menu-label">Highlight Video</span>
            </li>
            <li>
              <span>
                <img src={NewsIcon} alt="" />
              </span>
              <span className="menu-label">Latest News</span>
            </li>
            <li>
              <span>
                <img src={WatchIcon} alt="" />
              </span>
              <span className="menu-label">Watch</span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
