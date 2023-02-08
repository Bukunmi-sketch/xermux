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

  const [inputs, setinputs] = useState({
    payment_status: "unpaid",
    order_status: "incomplete",
  });
  const [Errormsg, setErrormsg] = useState("");
  const [localgov, setLga] = useState([]);

  //handle the changes
  const handleChange = (event) => {
    const name = event.target.name;
    const value =
      event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);

    // console.log(addedcart.toString());
    setinputs((values) => ({
      ...values,
      [name]: value,
    }));

    // console.log(inputs);

    console.log(inputs);
    // e.g {name:"yourInputname", email: "yourinputEmail", mobile:"yourInputMobile"}
  };

  //when button is submitted
  const handleVerifySubmit = (event) => {
    event.preventDefault();
    Loader();

    const name = event.target.name;
    const value = event.target.value;
    console.log(addedcart.toString());
    setinputs((values) => ({
      ...values,
      [name]: value,
    }));
    //console.log(inputs);

    const API = "http://localhost/sales/Grittystore/Api/RegisterAccount.php";

    axios
      .post(API, inputs, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          //    setOrders(response.data);
          console.log(response.data);
          if (response.data.status !== 500) {
            navigate(`/page/${response.data.userid} `);
            onClear();
            onUnShow();
            unLoader();
          } else {
            setErrormsg(response.data.message);
            unLoader();
          }
        }
      })
      .catch(function (error) {
        console.log("errorrrr", error);
        unLoader();
      });
  };

  //when button is submitted
  const handleEmailRegisterSubmit = (event) => {
    event.preventDefault();
    Loader();

    const name = event.target.name;
    const value = event.target.value;
    console.log(addedcart.toString());
    setinputs((values) => ({
      ...values,
      [name]: value,
    }));
    //console.log(inputs);

    const API = "http://localhost/sales/Grittystore/Api/RegisterAccount.php";

    axios
      .post(API, inputs, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          //    setOrders(response.data);
          console.log(response.data);
          if (response.data.status !== 500) {
            navigate(`/page/${response.data.userid} `);
            onClear();
            onUnShow();
            unLoader();
          } else {
            setErrormsg(response.data.message);
            unLoader();
          }
        }
      })
      .catch(function (error) {
        console.log("errorrrr", error);
        unLoader();
      });
  };

  //when button is submitted
  const handleEmailLoginSubmit = (event) => {
    event.preventDefault();
    Loader();

    const name = event.target.name;
    const value = event.target.value;
    console.log(addedcart.toString());
    setinputs((values) => ({
      ...values,
      [name]: value,
    }));
    //console.log(inputs);

    const API = "http://localhost/sales/Grittystore/Api/LoginAccount.php";

    axios
      .post(API, inputs, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          //    setOrders(response.data);
          console.log(response.data);
          if (response.data.status !== 500) {
            navigate(`/page/${response.data.userid} `);
            onClear();
            onUnShow();
            unLoader();
          } else {
            setErrormsg(response.data.message);
            unLoader();
          }
        }
      })
      .catch(function (error) {
        console.log("errorrrr", error);
        unLoader();
      });
  };

  //when button is submitted
  const handleMobileLoginSubmit = (event) => {
    event.preventDefault();
    Loader();

    const name = event.target.name;
    const value = event.target.value;
    console.log(addedcart.toString());
    setinputs((values) => ({
      ...values,
      [name]: value,
    }));
    //console.log(inputs);

    const API = "http://localhost/sales/Grittystore/Api/LoginAccount.php";

    axios
      .post(API, inputs, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          //    setOrders(response.data);
          console.log(response.data);
          if (response.data.status !== 500) {
            navigate(`/page/${response.data.userid} `);
            onClear();
            onUnShow();
            unLoader();
          } else {
            setErrormsg(response.data.message);
            unLoader();
          }
        }
      })
      .catch(function (error) {
        console.log("errorrrr", error);
        unLoader();
      });
  };

  return (
    <div className="container">
      <div className="form">
        <div className="form-container">
         
          <form onSubmit={handleMobileLoginSubmit}>
            <div className="namebox">
              <label htmlFor="address"> PIN </label>
              <input
                type="number"
                name="uniqueid"
                placeholder="Mobile No"
                value={inputs.uniqueid || ""}
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
