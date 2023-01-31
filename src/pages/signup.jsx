import React, { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../css/form.css';
import useLocalStorage from '../hooks/uselocalstorage';

function Signup({ onAuthModal, authModal, Loader, unLoader, onHideAuthModal, showRegisterPage, onShowRegisterPage, onShowLoginPage , onSignUpMobile, onSignUpEmail, signUpEmail , setUserToken }) {
    const navigate = useNavigate();

    const [inputs, setinputs] =useState({
        payment_status: "unpaid",
        order_status: "incomplete",
      });
    const [Errormsg, setErrormsg] = useState("");
    const [localgov, setLga] = useState([]);
  
  
    const options = ["", "Oyo", "Lagos", "Osun", "Ondo"];
  
    //handle the changes
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value.charAt(0).toUpperCase()+ event.target.value.slice(1);
  
     // console.log(addedcart.toString());
      setinputs((values) => ({
        ...values, [name]: value,
      }));
  
     // console.log(inputs);
      if (inputs.state == "Lagos") {
        setLga([]);
        setLga([
          "", "Agege", "Ajeromi-Ifelodun", "Alimosho", "Amuwo-Odofin", "Apapa", "Badagry", "Epe", "Eti-Osa", "Ibeju/Lekki", "Ifako-Ijaye", "Ikeja", "Ikorodu", "Kosofe", "Lagos Island", "Lagos Mainland", "Mushin", "Ojo", "Oshodi-Isolo", "Shomolu", "Surulere",
        ]);
      } else if (inputs.state == "Oyo") {
        setLga([]);
        setLga([
          "", "Afijio", "Akinyele", "Atiba", "Atigbo", "Egbeda", "Ibadan Central", "Ibadan North", "Ibadan North West", "Ibadan South East", "Ibadan South West", "Ibarapa Central", "Ibarapa East", "Ibarapa North", "Ido", "Irepo", "Iseyin", "Itesiwaju", "Iwajowa", "Kajola", "Lagelu Ogbomosho North", "Ogbomosho South", "Ogo Oluwa", "Olorunsogo", "Oluyole", "Ona-Ara", "Orelope", "Ori Ire", "Oyo East", "Oyo West", "Saki East", "Saki West", "Surulere"
         ]);
      } else if (inputs.state == "Osun") {
        setLga([]);
        setLga([
          "", "Aiyedade", "Aiyedire", "Atakumosa East", "Atakumosa West", "Boluwaduro", "Boripe", "Ede North", "Ede South", "Egbedore", "Ejigbo", "Ife Central", "Ife East", "Ife North", "Ife South", "Ifedayo", "Ifelodun", "Ila", "Ilesha East", "Ilesha West", "Irepodun", "Irewole", "Isokan", "Iwo", "Obokun", "Odo-Otin", "Ola-Oluwa", "Olorunda", "Oriade", "Orolu", "Osogbo"
        ]);
      }else if (inputs.state == "Ondo") {
        setLga([]);
        setLga([
          "", "Akoko North East", "Akoko North West", "Akoko South Akure East", "Akoko South West", "Akure North", "Akure South", "Ese-Odo", "Idanre", "Ifedore", "Ilaje", "Ile-Oluji", "Okeigbo", "Irele", "Odigbo", "Okitipupa", "Ondo East", "Ondo West", "Ose", "Owo"
        ]);
  
      }
      console.log(inputs);
      // e.g {name:"yourInputname", email: "yourinputEmail", mobile:"yourInputMobile"}
    };
  
    //when button is submitted
    const handleRegisterSubmit = (event) => {
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
             if(response.data.status !== 500){
              navigate(`/page/${response.data.userid} `);
              onClear();
              onUnShow();
              unLoader();
             }else{
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
    const handleLoginSubmit = (event) => {
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
             if(response.data.status !== 500){
              navigate(`/page/${response.data.userid} `);
              onClear();
              onUnShow();
              unLoader();
             }else{
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
                  
                     
                      { showRegisterPage ? (  //SIGNUP PAGE
                        <>
                        <div className="mobilePhone"> 
                          <span onClick={onSignUpEmail}> Sign up with Email </span>
                          OR
                          <span onClick={onSignUpMobile}> Sign up with Mobile No </span>
                        </div>
                         <p className="contact-info"> Welcome to Grittystore</p>
                      <form onSubmit={handleRegisterSubmit}>   
                      <div className="errorinfo"></div>
                 {/*      <div className="flexnameboxa">
                        <div className="namebox">
                          <label htmlFor="Name">FirstName: </label>
                          <input
                            type="text"
                            name="firstname"
                            value={inputs.firstname || ""}
                            onChange={handleChange}
                            required
                          />
                        </div>  */} 

                        <div className="namebox">
                          <label htmlFor="Name">Username </label>
                          <input
                            type="text"
                            name="username"
                            value={inputs.username || ""}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="flexnameboxa">
                  {/*   </div>  */} 
                  { signUpEmail ? (
                    
                       <div className="namebox">
                          <label htmlFor="email">Email Address</label>
                          <input
                            type="email"
                            name="email"
                            value={inputs.email || ""}
                            onChange={handleChange}
                            required
                          />
                    </div>
                  
                  ) : (

                    <div className="namebox">
                    <label htmlFor="email">Mobile No :</label>
                    <input
                      type="number"
                      name="mobile"
                      value={inputs.mobile || ""}
                      onChange={handleChange}
                      required
                    />
              </div>
            
                  ) }  
                    

                    
                        <div className="namebox">
                          <label htmlFor="address">Country</label>
                          <select
                            name="country"
                            onChange={handleChange}
                            required
                          >
                            {options.map((option) => (
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
                          value={inputs.password || ""}
                          onChange={handleChange}
                          required
                        />
                      </div>

                     
                      <div className="namebox">
                        <label htmlFor="address"> Confirm Password </label>
                        <input
                          type="text"
                          name="confirmpass"
                          value={inputs.confirmpass || ""}
                          onChange={handleChange}
                        />
                      </div>

                      

                      <div className="namebox">
                         <div style={{ color: "#FF6600" }}> {Errormsg} </div>  
                         <button type="submit" className="checkout-btn">Sign up  </button>                       
                      </div>

                      <div className="have-account">Already have an account ?  <span onClick={onShowLoginPage} >Log in </span> </div>
                     </form>
                      </> 
                      ) : (   //LOGIN PAGE
                      <>
                      <p className="contact-info">Login  to Grittystore</p>
                      <form onSubmit={handleLoginSubmit}>
                       <div className="namebox">
                        <label htmlFor="address">Email or  Mobile No </label>
                        <input
                          type="text"
                          name="uniqueid"
                          value={inputs.uniqueid || ""}
                          onChange={handleChange}
                          required
                        />
                      </div>

                     
                      <div className="namebox">
                        <label htmlFor="address">Password</label>
                        <input
                          type="text"
                          name="referral"
                          value={inputs.referral || ""}
                          onChange={handleChange}
                        />
                      </div>
  
                      <div className="namebox">
                       
                         <div style={{ color: "#FF6600" }}> {Errormsg} </div>  
                         <button type="submit" className="checkout-btn"> Log In</button>                       
                      </div>

                       <div className="have-account"> New User ?  <span onClick={onShowRegisterPage}> Sign up </span> </div>
                       </form>
                      </>
                      ) }
                    </div>
               
              </div> 
        </div>
      );
}

export default Signup;