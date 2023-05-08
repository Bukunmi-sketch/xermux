import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Signup from './signup';
import Profileheader from "../components/profileheader";
import Leftbar from "../components/leftbar";
import ProfileMiddle from "../components/profilemiddle";
import Rightbar from "../components/rightbar";

//import '../css/headermenu.css'
import '../css/leftbar.css';
import '../css/home.css'



function Profile() {

    
    return ( 
      <div className="Profile">
        <Profileheader />
        <main>
          <div className="container">
            <Leftbar />
            <ProfileMiddle />
            <Rightbar />
          </div>
        </main>

      </div>
     );
}

export default Profile;