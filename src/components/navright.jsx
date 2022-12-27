import React, { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useLocalStorage from '../hooks/uselocalstorage';
import Track from '../pages/track';
import Payment from '../pages/payment';
import Success from '../pages/success';
import { FaCartPlus,FaBars, FaTrash, FaHome, FaTeamspeak, FaInfo,FaShoppingBag, FaTimes, FaInfoCircle  } from "react-icons/fa";
import pica from '../Images/smallproduct.png'
import logo from '../Images/afrimamalogo.png'
import Klumpsuccess from '../pages/klumpsuccess';

function Navright( { checkout, cartitems, onAdd ,onRemove , onDelete, onClear, cartshow, onUnShow , Loader, unLoader, delayLoader }) {
  const navigate = useNavigate();
  // const [addedcart , setaddedcart]=useState(cartitems.map( (x) => x.product_name + "("  + x.qty + ")" ));
  const addedcart = cartitems.map((x) => x.product_name + "(" + x.qty + ")");
  const itemsprice = cartitems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingprice = itemsprice > 100 ? 0 : 0;
  const totalprice = itemsprice + shippingprice;

  const [inputs, setinputs] =useLocalStorage('hello',{
    product: addedcart.toString(),
    amount: totalprice,
    payment_status: "unpaid",
    order_status: "incomplete",
  });
  const [orders, setOrders] = useState("");
  const [confirmpay, setconfirmpay] = useState(false);
  const totalquantity = cartitems.reduce((a, c) => a + c.qty, 3);
  const [Errormsg, setErrormsg] = useState("");
  const [localgov, setLga] = useState([]);

  const options = ["", "Oyo", "Lagos", "Osun", "Ondo"];

  //handle the changes
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

   // console.log(addedcart.toString());
    setinputs((values) => ({
      ...values, product: addedcart.toString(), amount: totalprice, payment_status: "unpaid", order_status: "incomplete", [name]: value,
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
  const handlesubmit = (event) => {
    event.preventDefault();
    Loader();

    const name = event.target.name;
    const value = event.target.value;
    console.log(addedcart.toString());
    setinputs((values) => ({
      ...values,
      product: addedcart.toString(),
      amount: totalprice,
      payment_status: "unpaid",
      order_status: "incomplete",
      [name]: value,
    }));
    //console.log(inputs);

    //    const API="http://api.afrimamafarms.com/Api/createOrder.php";
     const API = "http://localhost/websites/mamapi/Api/createOrder.php";
    //  const API="https://afrimamafarms.com/endpoint/Api/createOrder.php";
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
            navigate(`/pay/${response.data.orderid} `);
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

 // const linkurl="http://localhost/websites/mamapi/Images/Product-img/";
  //  const linkurl="http://api.afrimamafarms.com/Images/product-img/";
 const linkurl = "https://afrimamafarms.com/endpoint/Images/product-img/";

  return (
    <>
      <Routes>
        <Route
          path="/pay/:id"
          element={<Payment Loader={Loader} unLoader={unLoader} delayLoader={delayLoader} />}
        />
        <Route
          path="/track/:id"
          element={<Track Loader={Loader} unLoader={unLoader} />}
        />
        <Route
          path="/success/:id"
          element={<Success Loader={Loader} unLoader={unLoader} />}
        />
        <Route path="/complete/" element={<Klumpsuccess />} />
      </Routes>

      {cartshow.show ? (
        <div className="navright" style={{ width: cartshow.width }}>
          <div className="times">
            <span>
              {cartitems.length === 0 && <div>Your cart is empty </div>}
              {cartitems.length !== 0 && <div> Your selected Items </div>}
            </span>
            <span>
              {" "}
              <FaTrash
                className="trash"
                onClick={() => onClear()}
                style={{ color: "orange", fontSize: "1.2em", display: "block" }}
              />{" "}
            </span>
            <span>
              {" "}
              <FaTimes
                onClick={() => onUnShow()}
                className="icons"
                style={{  marginTop: "5px",  marginLeft: "90%",  fontSize: "1.2em", }} />{" "}
            </span>
          </div>

          <div className="items">
            {/*  first box */}
            <div className="checkout-first-box">
              <ul>
                <li>
                  {" "}
                  <img src={logo} alt="afrimama" className="footer-logo" />
                </li>
                <li>
                  {" "}
                  <p>
                    Get your fresh items with no hidden cost while you spread
                    your cost comfortably over 4 months{" "}
                  </p>
                </li>
              </ul>
            </div>
            <div className="subtotal-container">
              {cartitems.length === 0 && (
                <div className="empty-cart-widescreen">Your cart is empty </div>
              )}

              {cartitems.length !== 0 && (
                <>
                  <div className="total-container">
                    {cartitems.map((item) => (
                      <div key={item.id} className="item-row">
                        <div
                          className="imagebox"
                          style={{
                            width: "150px",
                            height: "150px",
                            border: "2px solid white",
                            borderRadius: "2px",
                          }}
                        >
                          <img
                            src={`${linkurl}${item.product_picture}`}
                            alt={item.product_name}
                            style={{ width: "100%" }}
                          />
                        </div>

                        <div className="row-col">
                          <div className="flex-col">
                            <div className="itemname">
                              {" "}
                              {item.product_name}{" "}
                            </div>
                            <div className="itemname"># {item.price} </div>
                          </div>

                          <div className="flex-col">
                            <div className="quantity">
                              {item.qty} x {item.price}
                            </div>
                          </div>

                          <div className="action-button">
                            <button onClick={() => onAdd(item)} className="add">
                              {" "}
                              +
                            </button>
                            <button
                              onClick={() => onRemove(item)}
                              className="remove"
                            >
                              {" "}
                              -
                            </button>
                            <FaTrash
                              onClick={() => onDelete(item)}
                              style={{ color: "orangered", fontSize: "1.2em" }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="cart-details">
                      <div className="cartdetails-row">
                        <div className="itemsprice">Subtotal </div>
                        <div className="itemcontent">NGN {itemsprice}</div>
                      </div>

                      <div className="cartdetails-row">
                        <div className="itemsprice">Delivery</div>
                        <div className="itemcontent" style={{ color: "green" }}>
                          {" "}
                          Free delivery{" "}
                        </div>
                      </div>

                      <div
                        className="cartdetails-row"
                        style={{
                          borderTop: "1px solid #cecece",
                          width: "100%",
                        }}
                      >
                        <div className="itemsprice">TOTAL</div>
                        <div className="itemcontent"> NGN {totalprice}</div>
                      </div>
                      {/* 
                                       <button className="checkout-btn" onClick={()=>onCheck() }>Proceed to  checkout</button>  
                                     */}
                    </div>
                  </div>
                  <div className="form">
                    <form onSubmit={handlesubmit}>
                      {checkout ? (
                        <div className="form-container">
                          <p style={{ color: "#FF6600", fontSize: "0.8em" }}>
                            {" "}
                            <FaInfoCircle /> Minimum Order for Buy now,Pay Later
                            is #25,000{" "}
                          </p>
                          <p className="contact-info">Contact Information</p>

                          <div className="errorinfo"></div>
                          <div className="flexnameboxa">
                            <div className="namebox">
                              <label htmlFor="Name">FirstName: </label>
                              <input
                                type="text"
                                name="firstname"
                                value={inputs.firstname || ""}
                                onChange={handleChange}
                                required
                              />
                            </div>

                            <div className="namebox">
                              <label htmlFor="Name">LastName: </label>
                              <input
                                type="text"
                                name="lastname"
                                value={inputs.lastname || ""}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>

                          <div className="flexnameboxb">
                            <div className="namebox">
                              <label htmlFor="address">State </label>
                              <select
                                name="state"
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
                          </div>
                          <div className="flexnameboxb">
                            <div className="namebox">
                              <label htmlFor="phono_no">Phone No</label>
                              <input
                                type="number"
                                name="phone"
                                value={inputs.phone || ""}
                                onChange={handleChange}
                                required
                              />
                            </div>

                            <div className="namebox">
                              <label htmlFor="address">Local Government </label>
                              <select
                                name="lga"
                                onChange={handleChange}
                                required
                              >
                                {localgov.map((lga) => (
                                  <option
                                    key={lga}
                                    value={lga}
                                    onChange={handleChange}
                                  >
                                    {lga}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="namebox">
                            <label htmlFor="address">Shipping address </label>
                            <input
                              type="text"
                              name="address"
                              value={inputs.address || ""}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div className="namebox">
                            <label htmlFor="address">Referral code (Optional only  for Agents)</label>
                            <input
                              type="text"
                              name="referral"
                              value={inputs.referral || ""}
                              onChange={handleChange}
                            />
                          </div>

                       {/*   <div className="namebox">
                            <label htmlFor="additional_info">
                              Additional Information
                            </label>
                            <textarea
                              name="moreInfo"
                              onChange={handleChange}
                              cols="30"
                              rows="10"
                              required
                            ></textarea>
                          </div>
                                */}

                          

                          <div className="namebox">
                            {confirmpay ? (
                              <>
                                <p>
                                  dear {inputs.name} , your payment has been
                                  confirmed ,pls try to validate it now
                                </p>
                                <button
                                  type="submit"
                                  className="btn btn-warning text-color-white"
                                >
                                  Validate
                                </button>
                              </>
                            ) : (
                              <>
                             <div style={{ color: "#FF6600" }}> {Errormsg} </div>  
                                <button type="submit" className="checkout-btn">
                                  Place an order
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </form>
                  </div>{" "}
                  {/* form div */}
                  {/* empty */}{" "}
                </>
              )}
            </div>{" "}
            {/*  subtotal-container + carted flex column */}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
 
 export default Navright;