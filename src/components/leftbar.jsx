import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkedAlt, FaMapMarked, FaTwitter, FaInstagram, FaLinkedin, FaFacebookF, FaWhatsapp, FaWhatsappSquare, FaHome } from "react-icons/fa";


function Leftbar() {

    const [nofication, setNofication] =useState("1");
    const [theme, setTheme] =useState("1");
    const [messages, setMessages] =useState("1");

    onclick

    return (
        <div className="left">
            {/* ------------------------for keeping profile and remove button for ssidenav----------------- --------------- */}
            <div className="image-removebox">

                <a href="mypage.php" className="profile">
                    <div className="profile-photo">
                        {/* <img src="" alt=""  className="profile-photo">    */}
                    </div>
                    <div className="handle">
                        <h4> Olarinde bukunmi </h4>
                        <p className="text-muted">@bucuzzi </p>
                    </div>
                </a>

                <a href="Javascript:void(0)"  className="remove-bar"> <FaEnvelope/> </a>
            </div>
          
            {/* ---------------------end for keeping profile and remove button for sidenav----------------- ---------------  */}

            {/* ------------------------SIDEBAR-------------------active-------------- */}

            {/* ? <link rel="stylesheet" type="text/css" href="../Resources/css/switch.css">    */}
            <div className="sidebar">


                <a href="home.php" className="menu-item active">
                    <span> <FaHome/> </span>
                    <h3>Home</h3>
                </a>
                <a href="explore.php" className="menu-item">
                    <span><FaEnvelope/></span>
                    <h3>Explore</h3>
                </a>


                {nofication == 1 ? (
                    <>
                        {/* --IF THERE IS NO NOTIFICATION- */}
                        <a href="notify.php?read=true" className="menu-item" id="notification">
                            <span><FaEnvelope/></span>
                            <h3>Notifications</h3>
                        </a>
                    </>
                ) : (
                    // --IF THERE IS NOTIFICATION-
                    <>
                        <a href="notify.php?read=true" className="menu-item" id="notification">
                            <span><FaEnvelope/><small className="notification-count">{nofication} </small></span>
                            <h3>Notifications</h3>
                        </a>
                    </>
                )}

                {nofication == 1 ? (
                    //   --IF THERE IS NO MESSAGE-  
                    <>
                        <a href="inbox.php?read=true" className="menu-item" id="message-notifications">
                            <span><FaEnvelope/> </span>
                            <h3>Messages</h3>
                        </a>
                    </>
                ) : (
                    <>
                        <a href="inbox.php?read=true" className="menu-item" id="message-notifications">
                            <span><FaEnvelope/> <small className="notification-count"> {message}</small></span>
                            <h3>Messages</h3>
                        </a>
                    </>
                )}


<a href="followings.php" className="menu-item">
                    <span><FaEnvelope/><small className="notification-count-primary"> {nofication} </small></span>
                    <h3>Following </h3>
                </a>
                <a href="followers.php" className="menu-item">
                    <span><FaEnvelope/> <small className="notification-count-primary">  {nofication}  </small> </span>
                    <h3>Followers  </h3>
                </a>
                <a href="likes.php" className="menu-item">
                    <span><FaEnvelope/> <small className="notification-count-primary"> {nofication}  </small> </span>
                    <h3>Likes </h3>
                </a>

                <a href="saves.php" className="menu-item">
                    <span><FaEnvelope/> <small className="notification-count-primary"> {nofication} </small> </span>
                    <h3>Bookmarks </h3>
                </a>


                <a href="edit.php" className="menu-item">
                    <span><FaEnvelope/></span>
                    <h3>Edit Account</h3>
                </a>

                <a href="verify-ch.php" className="menu-item">
                    <span><FaEnvelope/></span>
                    <h3>Change password</h3>
                </a>

                <a href="feedback.php" className="menu-item">
                    <span><FaEnvelope/></span>
                    <h3>Give Feedback</h3>
                </a>

                <a href="verify-del.php" className="menu-item">
                    <span><FaEnvelope/></span>
                    <h3>Delete Account</h3>
                </a>

              


                <a href="home.php?logout=true" className="menu-item">
                    <span><FaEnvelope/></span>
                    <h3>Log out</h3>
                </a>


            </div>

            {/* ----------------------END OF SIDEBAR--------------------------------- */}

        </div>
    );
}

export default Leftbar;