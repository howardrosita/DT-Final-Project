import React from "react";
import "../../App.css";
import logo from "../../assets/images/logo.png";
import ticketIcon from "../../assets/images/ticket-icon.svg";

export const NavBar = ({ toggleSidebarVisibility }) => {
  return (
    <div className="navBarHeader">
      <div className="logo">
        <img src={logo} alt=""></img>
      </div>
      <div className="burgerBtn">
        <div className="eventBtn">
          <img src={ticketIcon} alt=""></img>
          <p>Events</p>
        </div>
        <div class="nav-button">
          <div class="burger-icon" onClick={toggleSidebarVisibility}>
            <svg
              width="19.5"
              height="12"
              viewBox="0 0 22 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.25 13.0029H20.75"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.25 7.00293H20.75"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.25 1.00293H20.75"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="user-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-user"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
