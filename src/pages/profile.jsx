import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Signup from './signup';
import Profileheader from "../components/profileheader";
import Leftbar from "../components/leftbar";
import Middle from "../components/middle";
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
            <Middle />
            <Rightbar />
          </div>
        </main>

      </div>
     );
}

export default Profile;