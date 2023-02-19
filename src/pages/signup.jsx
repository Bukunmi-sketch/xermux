import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/form.css";
import useLocalStorage from "../hooks/uselocalstorage";

function Signup({
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

  const [userinputs, setuserinputs] = useState({
    account_status: "pending", verficationbadge_status: 'zero',username:"",mobileno:"",country:"",password:"",confirmpass:"",
  });
  const [Errormsg, setErrormsg] = useState('');
  const [localgov, setLga] = useState([]);

  const options = ["", "Oyo", "Lagos", "Osun", "Ondo"];

  var countries = [ "","Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe", ];

  //handle the changes
  const handleChange = (event) => {
    const name = event.target.name;
    const value =event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
    setuserinputs((values) => ({...values, account_status: "pending", verficationbadge_status: 'zero', [name]: value,}))
    console.log(userinputs);
    // e.g {name:"yourInputname", email: "yourinputEmail", mobile:"yourInputMobile"}
  };

  //when button is submitted
  const handleMobileRegisterSubmit = (event) => {
    event.preventDefault();
   // Loader();
    const name = event.target.name;
    const value = event.target.value;
    setuserinputs((values) => ({
      ...values, account_status: "pending", verficationbadge_status: 'zero', [name]: value,
    }));
    //console.log(userinputs);
    const API = "http://localhost/websites/xermux/Api/registerMobileAccount.php";
    axios
      .post(API, userinputs, {
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
            navigate('/verify');
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

  //when button is submitted
  const handleEmailRegisterSubmit = (event) => {
    event.preventDefault();
    Loader();

    const name = event.target.name;
    const value = event.target.value;
    setuserinputs((values) => ({
      ...values,
      [name]: value,
    }));
    //console.log(userinputs);

    const API = "http://localhost/websites/xermux/Api/RegisterAccount.php";

    axios
      .post(API, userinputs, {
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
    setuserinputs((values) => ({
      ...values,
      [name]: value,
    }));
    //console.log(userinputs);

    const API = "http://localhost/website/xermux/Api/LoginAccount.php";

    axios
      .post(API, userinputs, {
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
    setuserinputs((values) => ({
      ...values,
      [name]: value,
    }));
    //console.log(userinputs);

    const API = "http://localhost/websites/xermux/Api/LoginAccount.php";

    axios
      .post(API, userinputs, {
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
          {showRegisterPage ? ( //SIGNUP PAGE
            <>
              <p className="contact-info"> Welcome to Grittystore</p>

              {signUpEmail ? (
                <form onSubmit={handleEmailRegisterSubmit}>
                  <div className="mobilePhone">
                    <span onClick={onSignUpMobile}> Sign up with Mobile No Instead  </span>
                  </div>
                  <div className="errorinfo"></div>

                  <div className="namebox">
                    <label htmlFor="Name">Username </label>
                    <input
                      type="text"
                      name="username"
                      value={userinputs.username || ""}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="flexnameboxa">
                    <div className="namebox">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={userinputs.email || ""}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="namebox">
                      <label htmlFor="address">Country</label>
                      <select name="country" onChange={handleChange} required>
                        {countries.map((option) => (
                          <option
                            key={option}
                            value={option}
                            onChange={handleChange}
                          >
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="namebox">
                    <label htmlFor="address"> Password </label>
                    <input
                      type="text"
                      name="password"
                      value={userinputs.password || ""}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="namebox">
                    <label htmlFor="address"> Confirm Password </label>
                    <input
                      type="text"
                      name="confirmpass"
                      value={userinputs.confirmpass || ""}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="namebox">
                    <div style={{ color: "#FF6600" }}> {Errormsg} </div>
                    <button type="submit" className="checkout-btn">
                      Sign up with email
                    </button>
                  </div>

                  <div className="have-account">
                    Already have an account ?{" "}
                    <span onClick={onShowLoginPage}>Log in </span>{" "}
                  </div>
                </form>
              ) : (


                // REGISTER WITH MOBILE NO    REGISTER WITH MOBILE NO     REGISTER WITH MOBILE NO    REGISTER WITH MOBILE NO
                <form onSubmit={handleMobileRegisterSubmit}>
                  <div className="mobilePhone">
                    <span onClick={onSignUpEmail}> Sign up with Email Instead</span>
                  </div>
                  <div className="errorinfo"></div>

                  <div className="namebox">
                    <label htmlFor="Name">Username </label>
                    <input type="text" name="username" value={userinputs.username || ""} onChange={handleChange} />
                  </div>

                  <div className="flexnameboxa">
                    <div className="namebox">
                      <label htmlFor="email">Mobile No :</label>
                      <input type="number" name="mobileno" value={userinputs.mobileno || ""} onChange={handleChange} />
                    </div>

                    <div className="namebox">
                      <label htmlFor="address">Country</label>
                      <select name="country" onChange={handleChange} >
                        {countries.map((option) => (
                          <option key={option} value={option} onChange={handleChange} > {option} </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="namebox">
                    <label htmlFor="address"> Password </label>
                    <input type="text" name="password" value={userinputs.password || ""} onChange={handleChange} />
                  </div>

                  <div className="namebox">
                    <label htmlFor="address"> Confirm Password </label>
                    <input type="text" name="confirmpass" value={userinputs.confirmpass || ""} onChange={handleChange} />
                  </div>

                  <div className="namebox">
                    <div style={{ color: "#FF6600" }}> {Errormsg} </div>
                    <button type="submit" className="checkout-btn"> Sign up with mobile </button>
                  </div>

                  <div className="have-account"> Already have an account ? <span onClick={onShowLoginPage}>Log in </span> </div>
                </form>
              )}
            </>
          ) : (
            //LOGIN PAGE
            <>
              <p className="contact-info">Login to Xermux</p>

              {signUpEmail ? (
                <>
                  <div className="mobilePhone">
                    <span onClick={onSignUpMobile}> Login with Mobile No </span>
                  </div>

                  <form onSubmit={handleEmailLoginSubmit}>
                    <div className="namebox">
                      <label htmlFor="address">Email</label>
                      <input
                        type="text"
                        name="uniqueid"
                        placeholder="Email"
                        value={userinputs.uniqueid || ""}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="namebox">
                      <label htmlFor="address">Password</label>
                      <input
                        type="text"
                        placeholder="Password"
                        name="referral"
                        value={userinputs.referral || ""}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="namebox">
                      <div style={{ color: "#FF6600" }}> {Errormsg} </div>
                      <button type="submit" className="checkout-btn">
                        Log In
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <div className="mobilePhone">
                    <span onClick={onSignUpEmail}> Login with Email </span>
                  </div>
                  <form onSubmit={handleMobileLoginSubmit}>
                    <div className="namebox">
                      <label htmlFor="address">Mobile No </label>
                      <input
                        type="text"
                        name="uniqueid"
                        placeholder="Mobile No"
                        value={userinputs.uniqueid || ""}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="namebox">
                      <label htmlFor="address">Password</label>
                      <input
                        type="text"
                        name="referral"
                        value={userinputs.referral || ""}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="namebox">
                      <div style={{ color: "#FF6600" }}> {Errormsg} </div>
                      <button type="submit" className="checkout-btn">
                        Log In
                      </button>
                    </div>
                  </form>
                </>
              )}

              <div className="have-account">
                New User ? <span onClick={onShowRegisterPage}>Sign up </span>{" "}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signup;
