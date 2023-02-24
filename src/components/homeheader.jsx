import React, { useState } from "react";
import { FaBell, FaEnvelope, FaHome, FaPeopleCarry, FaSearch } from "react-icons/fa";
//import '../css/headermenu.css'

function Homeheader() {
  
  const fontColor={
    color:'#FF6600'
    
 }



  return (
    <nav>
      <div class="container">
        <div class="bar" onclick="opennav()">
          
          <i class="fa fa-navicon"></i>
        </div>

        <h2 class="logo"> Xermux </h2>

        <div class="search-bar">
          <a href="#">
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
          <a href="home.php" class="menu-nav" id="message-notifications" >
            <span > <FaHome/> </span>
            <h3>Home</h3>
          </a>
          <a href="explore.php" class="menu-nav" >
            <span>
              <FaSearch/>
            </span>
            <h3>Search</h3>
          </a>
          <a href="connect.php" class="menu-nav" >
            <span>
              <FaPeopleCarry/>
            </span>
            <h3>Connect</h3>
          </a>

          <a href="notify.php?read=true" class="menu-nav" >
            <span> <FaBell/> </span>
            <h3>Notifications</h3>
          </a>

          <a href="inbox.php?read=true" class="menu-nav" >
            <span>
              <FaEnvelope/>
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
