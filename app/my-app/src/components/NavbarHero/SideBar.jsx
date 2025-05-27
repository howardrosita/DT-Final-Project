import React from "react";
import "../../App.css";
import MagnifyingIcon from "../../assets/images/magnifying-glass1.png";
import HeartIcon from "../../assets/images/heart-icon.png";
import StarIcon from "../../assets/images/star-icon.png";
import NewsIcon from "../../assets/images/announcement-icon.png";
import WatchIcon from "../../assets/images/movie-player-icon.png";
export const SideBar = ({ isSidebarVisible }) => {
  return (
    <>
      {isSidebarVisible && (
        <div class="sidebar">
          <div class="account-section">
            <p class="title">Create your account!</p>
            <p class="subtitle">
              Get personalized event recommendations tailored just for you!
            </p>
            <div class="buttons">
              <button class="sign-up">Sign up</button>
              <button class="log-in">Log in</button>
            </div>
          </div>
          <ul class="menu">
            <li>
              <span>
                <img src={MagnifyingIcon} alt="" />
              </span>
              Search Events
            </li>
            <li>
              <span>
                <img src={HeartIcon} alt="" />
              </span>
              Follow Art Organizations
            </li>
            <li>
              <span>
                <img src={StarIcon} alt="" />
              </span>
              Highlight Video
            </li>
            <li>
              <span>
                <img src={NewsIcon} alt="" />
              </span>
              Latest News
            </li>
            <li>
              <span>
                <img src={WatchIcon} alt="" />
              </span>
              Watch
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
