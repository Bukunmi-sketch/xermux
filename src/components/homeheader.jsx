import React, { useState } from "react";
import '../css/headermenu.css'

function Homeheader() {
  return (
    <nav>
      <div class="container">
        <div class="bar" onclick="opennav()">
          {" "}
          <i class="fa fa-navicon"></i>{" "}
        </div>

        <h2 class="logo"> Xermux </h2>

        <div class="search-bar">
          <a href="explore.php">
            <i class="fa fa-search"></i>
            <input
              type="search"
              name=""
              id=""
              placeholder="search for creators and people"
            />
          </a>
        </div>

        {/* HEADER MENU FOR DESKTOP */}
        <div class="bottom-menu-nav">
          <a href="home.php" class="menu-nav" id="message-notifications">
            <span style={{ color: "black" }}> <i class="material-icons">home</i> </span>
            <h3>Home</h3>
          </a>
          <a href="explore.php" class="menu-nav">
            <span>
              <i class="material-icons">search</i>
            </span>
            <h3>Search</h3>
          </a>
          <a href="connect.php" class="menu-nav">
            <span>
              <i class="material-icons">people</i>
            </span>
            <h3>Connect</h3>
          </a>

          <a href="notify.php?read=true" class="menu-nav">
            <span> <i class="material-icons">notifications_active</i> </span>
            <h3>Notifications</h3>
          </a>

          <a href="inbox.php?read=true" class="menu-nav">
            <span>
              <i class="material-icons"> email </i>{" "}
            </span>
            <h3>Messages</h3>
          </a>
        </div>

        {/*  END OF HEADER MENU FOR DESKTOP */}

        <div class="create">
          <label class="btn btn-primary" for="create-post">
            create
          </label>
          <a href="mypage.php">
            <div class="header-profile-photo">
              <img src="" alt="" />
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Homeheader;
