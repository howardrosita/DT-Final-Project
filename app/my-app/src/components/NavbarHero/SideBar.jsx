import React from "react";
import "../../App.css";

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
              <span>🔍</span> Search Events
            </li>
            <li>
              <span>🤍</span> Follow Art Organizations
            </li>
            <li>
              <span>⭐</span> Highlight Video
            </li>
            <li>
              <span>📰</span> Latest News
            </li>
            <li>
              <span>▶️</span> Watch
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
