import React, { useState, useEffect } from 'react';


const [nofication, setnofication] = useState(1);
const [theme, settheme] = useState(1);
const [messages, setmessages] = useState(1);

function darkmode() {

}

function Leftbar() {
    return (
        <div class="left">
            {/* ------------------------for keeping profile and remove button for sidenav----------------- --------------- */}
            <div class="image-removebox">

                <a href="mypage.php" class="profile">
                    <div class="profile-photo">
                        {/* <img src="" alt=""  class="profile-photo">    */}
                    </div>
                    <div class="handle">
                        <h4> Olarinde bukunmi </h4>
                        <p class="text-muted">@bucuzzi </p>
                    </div>
                </a>

                <a href="Javascript:void(0)" onclick="closenv()" class="remove-bar"> <i class="fa fa-remove remove"></i> </a>
            </div>
            {/* ---------------------end for keeping profile and remove button for sidenav----------------- ---------------  */}

            {/* ------------------------SIDEBAR-------------------active-------------- */}

            {/* ? <link rel="stylesheet" type="text/css" href="../Resources/css/switch.css">    */}
            <div class="sidebar">


                <a href="home.php" class="menu-item active">
                    <span><i class="material-icons">home</i></span>
                    <h3>Home</h3>
                </a>
                <a href="explore.php" class="menu-item">
                    <span><i class="material-icons">search</i></span>
                    <h3>Explore</h3>
                </a>


                {nofication == 1 ? (
                    <>
                        {/* --IF THERE IS NO NOTIFICATION- */}
                        <a href="notify.php?read=true" class="menu-item" id="notification">
                            <span><i class="material-icons">notifications_active </i></span>
                            <h3>Notifications</h3>
                        </a>
                    </>
                ) : (
                    // --IF THERE IS NOTIFICATION-
                    <>
                        <a href="notify.php?read=true" class="menu-item" id="notification">
                            <span><i class="material-icons">notifications_active </i><small class="notification-count">{nofication} </small></span>
                            <h3>Notifications</h3>
                        </a>
                    </>
                )}

                {nofication == 1 ? (
                    //   --IF THERE IS NO MESSAGE-  
                    <>
                        <a href="inbox.php?read=true" class="menu-item" id="message-notifications">
                            <span><i class="material-icons"> email </i> </span>
                            <h3>Messages</h3>
                        </a>
                    </>
                ) : (
                    <>
                        <a href="inbox.php?read=true" class="menu-item" id="message-notifications">
                            <span><i class="material-icons"> email </i> <small class="notification-count"> {message}</small></span>
                            <h3>Messages</h3>
                        </a>
                    </>
                )}


                <a href="followings.php" class="menu-item">
                    <span><i class="material-icons">people</i> <small class="notification-count-primary"> {nofication} </small></span>
                    <h3>Following </h3>
                </a>
                <a href="followers.php" class="menu-item">
                    <span><i class="material-icons">group_add</i> <small class="notification-count-primary">  {nofication}  </small> </span>
                    <h3>Followers  </h3>
                </a>
                <a href="likes.php" class="menu-item">
                    <span><i class="material-icons">favorite</i> <small class="notification-count-primary"> {nofication}  </small> </span>
                    <h3>Likes </h3>
                </a>

                <a href="saves.php" class="menu-item">
                    <span><i class="material-icons">bookmark</i> <small class="notification-count-primary"> {nofication} </small> </span>
                    <h3>Bookmarks </h3>
                </a>


                <a href="edit.php" class="menu-item">
                    <span><i class="material-icons">settings</i></span>
                    <h3>Edit Account</h3>
                </a>

                <a href="verify-ch.php" class="menu-item">
                    <span><i class="material-icons">lock</i></span>
                    <h3>Change password</h3>
                </a>

                <a href="feedback.php" class="menu-item">
                    <span><i class="material-icons">feedback</i></span>
                    <h3>Give Feedback</h3>
                </a>

                <a href="verify-del.php" class="menu-item">
                    <span><i class="material-icons">delete</i></span>
                    <h3>Delete Account</h3>
                </a>

                <a href="javascript:void(0)" onclick="notify()" class="menu-item">
                    {theme == 0 ? (
                        <form action="#" id="theme" >

                            <label class="darkmode" style="display: none;">
                                <input type="hidden" name="sender" value="<?php echo $sessionid; ?>" />
                                <span onclick="darkmode()"><i class="fa fa-toggle-off"></i></span>
                                <h3 onclick="darkmode()">Activate Darkmode</h3>
                            </label>

                            <label class="lightmode" onclick="lightmode()" >
                                <input type="hidden" name="sender" value="<?php echo $sessionid; ?>" />
                                <span onclick="lightmode()"><i class="fa fa-toggle-on"></i></span>
                                <h3 onclick="lightmode()">Activate Lightmode</h3>
                            </label>

                        </form>


                    ) : (
                        <form action="#" id="theme">

                            <label class="darkmode" onclick="darkmode()" >
                                <input type="hidden" name="sender" value="<?php echo $sessionid; ?>" />
                                <span onclick="darkmode()"><i class="fa fa-toggle-off"></i></span>
                                <h3 onclick="darkmode()">Activate Darkmode</h3>
                            </label>

                            <label class="lightmode" style="display:none;" onclick="lightmode()" >
                                <input type="hidden" name="sender" value="<?php echo $sessionid; ?>" />
                                <span onclick="lightmode()"><i class="fa fa-toggle-on"></i></span>
                                <h3 onclick="lightmode()">Activate Lightmode</h3>
                            </label>

                        </form>
                    )
                    }
                </a>


                <a href="home.php?logout=true" class="menu-item">
                    <span><i class="fa fa-power-off"></i></span>
                    <h3>Log out</h3>
                </a>


            </div>

            {/* ----------------------END OF SIDEBAR--------------------------------- */}

        </div>
    );
}

export default Leftbar;