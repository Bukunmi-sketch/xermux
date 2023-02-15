import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import useLocalStorage from "./hooks/uselocalstorage";

import "./css/footer.css";
import "./css/App.css";
import "./css/headernav.css"
import Signup from "./pages/signup";
import Login from "./pages/login";
import LandingNav from "./components/landingnav";
import Sectionb from "./components/sectionb";
import ActionButton from "./components/button";
import Footer from "./components/footer";
import Verify from "./pages/verify";
import Home from "./pages/home";

import { FaCartPlus, FaBars, FaTimes } from "react-icons/fa";
/*
import pica from '../Images/smallproduct.png'
import logo from '../Images/afrimamalogo.png'
*/

function LandingPage() {
  //s const ref = useRef();
  const [loading, setLoading] = useState({ display: "none" });
  const [bodyloading, setbodyLoading] = useState({ display: "block" });
  const [Error, setError] = useState();
 
  const [cartdisplay, setcartdisplay] = useState({
    left: "-70%",
    transition: "0.3s",
  });
  const [cartshow, setcartshow] = useState({ width: "0" });
  const [authModal, setauthModal] = useState({ show: "false", width: "0" });
  const [showRegisterPage, setshowRegisterPage] = useState(true);
  const [signUpEmail, setsignUpEmail] = useState(true);
  const [signUpMobile, setsignUpMobile] = useState(true);
  const [searchterm, setsearchterm] = useState("");
  const [searchresult, setsearchresult] = useState([]);
  const [jsonresult, setjsonresult] = useState([]);
  const [delayloading, setdelayLoading] = useState({ display: "none" });
  const [message, setMessage] = useState("");
  const [msgdisplay, setMsgdisplay] = useState({ display: "none" });
  const [userToken, setUserToken] = useState(2345);

  const onShowAuthModal = () => {
    setauthModal({ show: true, width: "100%", transition: "0.3s" });
    //  console.log(cartshow);
    undisplay();
  };

  const onHideAuthModal = () => {
    setauthModal({ show: false, width: "0" });
    //   console.log(cartshow);
  };

  const unshow = () => {
    setcartshow({ show: false, width: "0" });
    //   console.log(cartshow);
  };

  const onSignUpEmail = () => {
    setsignUpEmail(true);
  };

  const onSignUpMobile = () => {
    setsignUpEmail(false);
  };

  const onShowRegisterPage = () => {
    setshowRegisterPage(true);
  };

  const onShowLoginPage = () => {
    setshowRegisterPage(false);
  };

  function showMessage() {
    setMsgdisplay({ display: "block" });
  }

  function hideMessage() {
    setMsgdisplay({ display: "none" });
  }

  const Loader = () => {
    setTimeout(() => setLoading({ display: "block" }), 3000);
  };

  const bodyUnloader = () => {
    setTimeout(() => setbodyLoading({ display: "none" }), 3000);
  };

  const unLoader = () => {
    setLoading({ display: "none" });
  };

  const scrollto = () => {
    ref.current.scrollTo(0, 0);
  };

  useEffect(() => {
    Loader();
    bodyUnloader();
    // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="land">
    {/*  <div id="loader" style={{ display: bodyloading.display }}>
        <span class="span"></span>
        <span class="span"></span>
        <span class="span"></span>
        <span class="span"></span>
        <span class="span"></span>
        <span class="span"></span>
        <span class="span"></span>
      </div>
      */} 
      <BrowserRouter>
        <div class="content" >
          {/* <h2>Welcome to <span class="webname">Xermux</span></h2>  -->  <div class="content" style={{ display: loading.display }}> */}

          <Routes>
            <Route
              path="/signup"
              element={
                <Signup
                  authModal={authModal}
                  onShowAuthModal={onShowAuthModal}
                  Loader={Loader}
                  unLoader={unLoader}
                  onUnShow={unshow}
                  onHideAuthModal={onHideAuthModal}
                  onShowRegisterPage={onShowRegisterPage}
                  onShowLoginPage={onShowLoginPage}
                  showRegisterPage={showRegisterPage}
                  userToken={userToken}
                  onSignUpEmail={onSignUpEmail}
                  onSignUpMobile={onSignUpMobile}
                  signUpEmail={signUpEmail}
                />
              }
            />

            <Route
              path="/verify"
              element={
                <Verify
                  authModal={authModal}
                  onShowAuthModal={onShowAuthModal}
                  Loader={Loader}
                  unLoader={unLoader}
                  onUnShow={unshow}
                  onHideAuthModal={onHideAuthModal}
                  onShowRegisterPage={onShowRegisterPage}
                  onShowLoginPage={onShowLoginPage}
                  showRegisterPage={showRegisterPage}
                  userToken={userToken}
                  onSignUpEmail={onSignUpEmail}
                  onSignUpMobile={onSignUpMobile}
                  signUpEmail={signUpEmail}
                />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <>
                  <LandingNav />
                  <Sectionb />
                  <ActionButton />
                </>
              }
            />

             <Route
              path="/home"
              element={
                <>
                 <Home/>
                </>
              }
            />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default LandingPage;
