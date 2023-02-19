import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/form.css";
import useLocalStorage from "../hooks/uselocalstorage";

function Verify({
  onAuthModal,
  authModal,
  Loader,
  unLoader,
  onHideAuthModal,
  showRegisterPage,
  onShowRegisterPage,
  onShowLoginPage,
  onSignUpMobile,
  onSignUpEmail,
  signUpEmail,
  setUserToken,
}) {
  const navigate = useNavigate();

  const [inputs, setinputs] = useState({});
  const [Errormsg, setErrormsg] = useState("");

  //handle the changes
  const handleChange = (event) => {
    const name = event.target.name;
    const value =event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
    setinputs((values) => ({ ...values, [name]: value, }));

    console.log(inputs);
    // e.g {name:"yourInputname", email: "yourinputEmail", mobile:"yourInputMobile"}
  };

  //when button is submitted
  const handlePinVerification = (event) => {
    event.preventDefault();
    Loader();

    const name = event.target.name;
    const value = event.target.value;
    setinputs((values) => ({ ...values, [name]: value, }));
    //console.log(inputs);

    const API = "http://localhost/websites/xermux/Api/verifyPin.php";

    axios
      .post(API, inputs, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          console.log(response.data);
          if(response.data.status == 200){ 
            console.log(response.data.message);
            navigate('/home');
          } else {
            setErrormsg(response.data.message);
            console.log("erro mess",response.data.message);
            unLoader();
          }
        }
      })
      .catch(function (error) {
        setErrormsg(response.data);
        console.log("errorrrr", error);
        //unLoader();
      });
  };

  return (
    <div className="container">
      <div className="form">
        <div className="form-container">
         
          <form onSubmit={handlePinVerification}>
            <div className="namebox">
              <label htmlFor="address"> PIN </label>
              <input
                type="number"
                name="pin"
                placeholder="Pin"
                value={inputs.pin || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="namebox">
              <div style={{ color: "#FF6600" }}> {Errormsg} </div>
              <button type="submit" className="checkout-btn">
                Verify
              </button>
            </div>
            <div className="have-account">
              Request For another pin
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Verify;
