import React, { useState, useEffect } from 'react';
import '../css/profilemiddle.css';



function ProfileMiddle() {

    const [istrue, setIstrue] = useState(false);
    const [emptywev, setemptyweb] = useState(false);

    return (
        <div className="middle">


            {/* <!------------------------STORIES ----------------->  */}
            <div class="profile-section">


                {/* <!------------------------COVER PHOTO ----------------->  */}
                <div class="cover-photos">
                     <img src="" alt="" /> 
                </div>
                {/* <!------------------------END OF COVER PHOTOS BOX----------------->  */}

                {/* <!------------------------PPROFILE IMAGE  & NAME BOX----------------->  */}
                <div class="profile-image-container">

                    <div class="profile-image-box">
                        <div class="last-profile-box">
                            <div class="profile-image">
                                 <img src="" alt="" /> 
                            </div>
                            <div class="last-seen">Last seen:

                            </div>
                            <div class="last-seen">Time:

                            </div>
                        </div>
                        <div class="name-box">
                            <div class="fullname"> </div>
                            <div class="username">@  </div>
                            <div class="interestt"></div>
                        </div>
                    </div>


                    {istrue == true ? (
                        <>
                            <a href=""> <input type="button" class="edit-bio" value="edit bio" /></a>


                            {/* <?php elseif($followInstance->checkIsFollowed($sessionid, $getid)) : ?> */}
                        </>
                    ) : (
                        <>
                            {/* // --IF THERE IS NOTIFICATION- */}


                            <div class="users-action">
                                <form action="#">

                                    <input type="hidden" name="sender" value="" />
                                    <input type="hidden" name="receiver" value="" />
                                    <button type="submit" class="follow" id="follow" name="follow" >Follow  </button>


                                    <input type="hidden" name="sender" value="" />
                                    <input type="hidden" name="receiver" value="" />
                                    <button type="submit" class="unfollow" id="unfollow" name="unfollow" style={{ display:"none"}} > Following</button>

                                </form>
                                <a href=""><button type="button" class="msg-link">Message </button></a>
                            </div>
                        </>
                    )}
                    {/* <?php  else : ?> */}

                    <div class="users-action">
                        <form action="#">
                            <input type="hidden" name="sender" value="" />
                            <input type="hidden" name="receiver" value="" />
                            <button type="submit" class="unfollow" id="unfollow" name="unfollow" >Following </button>


                            <input type="hidden" name="sender" value="" />
                            <input type="hidden" name="receiver" value="" />
                            <button type="submit" class="follow" id="follow" name="follow" style={{ display:"none"}}>Follow </button>

                        </form>

                        <a href=" "><button type="button" class="msg-link">Message </button></a>

                    </div>





                </div>
                {/* <!------------------------END OF EDIT BUTTON & NAME & PROFILE PHOTOS ----------------->  */}

                <div class="about-bio"></div>


                <div class="numbers">
                    <div class="item">
                        <span class="lowers">
                            <a href="" ></a>
                        </span>
                    </div>
                    <div class="item">
                        <span class="lowers">
                            <a href=" " >

                            </a>
                        </span>
                    </div>
                </div>

                <div class="info">
                    {emptywev == 1 ? (
                        <>
                            {/* --IF THERE IS NO NOTIFICATION- */}
                            <div class="locate"><i class="fa fa-envelope"></i> </div>
                            <div class="locate"><i class="fa fa-calendar"></i> Joined on:   </div>
                        </>
                    ) : (
                        // --IF THERE IS NOTIFICATION-
                        <>
                            <div class="locate"><i class="fa fa-envelope"></i> </div>
                            <div class="locate"><i class="fa fa-globe"></i><a href="<?php echo $web; ?>"> </a></div>
                            <div class="locate"><i class="fa fa-calendar"></i> Joined on: </div>
                        </>
                    )}
                </div>

                <hr />
                <div class="scroll">

                    <button class="home" name="posts">Posts</button>
                    {/* <!--   <button class="home" name="photos">photos</button>---> */}
                    <a href=""> <button class="home" name="likes">Likes</button> </a>

                    <hr />
                </div>

            </div>

        </div>
    );
}

export default ProfileMiddle;