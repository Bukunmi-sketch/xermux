import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Flutterwave from "../hooks/usehooks";
import ExampleComponent from "../hooks/useklump";
import Vellapay from "../hooks/usevella";
import Message from "../components/message";
import Delmsg from "../components/delmsg";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcDiscover,
  FaInfoCircle,
  FaArrowCircleRight,
  FaHome,
  FaAddressBook,
} from "react-icons/fa";
import mark from "../Images/successful.png";
import logo from "../Images/afrimamalogo.png";
import Addmsg from "../components/addcartmsg";
import "../css/pay.css";

function Payment({ Loader, unLoader, totalquantity,delayLoader }) {
  const navigate = useNavigate();

  const { id } = useParams();
  const [input, setInputs] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [msgdisplay, setMsgdisplay] = useState({ display: "none" });
  const [deldisplay, setDeldisplay] = useState({ display: "none" });
  const [details, setdetails] = useState({ display: "none" });
  const shipping = 5;

  useEffect(() => {
    getOrderDetails();
    window.scrollTo({ top: 0, behavior: "smooth" });
    delayLoader();
  }, []);

  console.log("id", id);
  async function getOrderDetails() {
      const API = `http://localhost/websites/mamapi/Api/orderdetails.php?id=${id}`;
   //  const API=`http://api.afrimamafarms.com/Api/orderdetails.php?id=${id} `;
   //  const API=`https://afrimamafarms.com/endpoint/Api/orderdetails.php?id=${id} `;
    const res = await axios.get(API, {
      headers: {
        "content-type": "application/json",
      },
    });
    setInputs(res.data);
    console.log("data", res.data);
   // console.log("response", res);
 //   console.log("orderstate", input);
  }

  //when button is submitted
  const handlesubmit = (event) => {
    event.preventDefault();
    Loader();
    if (input.state == "Lagos") {
      const API="http://api.afrimamafarms.com/Api/updatepayment.php";
     // const API = "http://localhost/websites/mamapi/Api/updatepayment.php";
    //  const API="https://afrimamafarms.com/endpoint/Api/updatepayment.php";
      const transinputs = {
        payment_status: "unpaid",
        order_status: "undelivered",
        payment_type: "Pay on delivery",
        order_id: id,
        notifynewpay: "unreadOndelivery",
      };
      axios
        .post(API, transinputs, {
          headers: {
            "content-type": "application/json",
          },
        })
        .then(function (responsedata) {
          console.log(responsedata);
          if (responsedata.status === 200) {
         
            showMessage();
            setMessage("payment placed");
            Loader();
            navigate(`/success/${id} `);
            unLoader();
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      showMessage();
      setMessage("  Oops, sorry Payment on delivery is only within Lagos");
      unLoader();
    }
  };

  function showdetails() {
    setdetails({ display: "block" });
  }

  function hidedetails() {
    setdetails({ display: "none" });
  }

  function showMessage() {
    setMsgdisplay({ display: "block" });
  }

  function hideMessage() {
    setMsgdisplay({ display: "none" });
  }

  function showDelMessage() {
    setDeldisplay({ display: "block" });
    setMessage("are you sure you want to delete this order");
  }

  function hideDelMessage() {
    setDeldisplay({ display: "none" });
  }

  const congratsimg = {
    width: "200px",
    height: "200px",
  };

  const congratsDiv = {
    border: "1px solid transparent",
    margin: "20px auto",
    width: "200px",
    position: "relative",
  };

  const detailsText = {
    display: "flex",
  };

  const detailsResult = {
    color: "red",
  };
  //const TRACKLINK = `http://127.0.0.1:5173/track/${id}`;
    const TRACKLINK=`https://afrimamafarms.com/track/${id}`

  return (
    <section className="payment-container">
      <Message
        message={message}
        showMessage={showMessage}
        hideMessage={hideMessage}
        msgdisplay={msgdisplay}
      />
      <Delmsg
        message={message}
        firstname={input.customers_firstname}
        lastname={input.customers_lastname}
        orderid={id}
        showDelMessage={showDelMessage}
        hideDelMessage={hideDelMessage}
        deldisplay={deldisplay}
      />

      {input.payment_status == "unpaid" && input.payment_type == "" && (
        <div className="payment-content">
          <p className="placed-order">
            <FaInfoCircle /> Hi <span className="highlighted" style={{ fontSize: "1em", textTransform: "capitalize" }} >  {input.customers_firstname} {input.customers_lastname}</span>  You just placed an order of <span className="highlighted" style={{ fontSize: "1em" }}> NGN {input.amount} </span> for
            <span className="highlighted"  style={{ fontSize: "1em", textDecoration: "underline" }}   >  {input.cart_items}, </span>  kindly complete your order by making a payment </p>

            <span> your orderid is <span className="highlighted" style={{ fontSize: "1em", textDecoration: "underline" }} > {id} </span> </span>
          <h5 className="order-hint"> At Afrimama we provide options to: </h5>
   
         <ExampleComponent totalprice={input.amount - 5.0} email={input.email} firstname={input.customers_firstname} lastname={input.customers_lastname} phoneno={input.phone_no} orderid={id} products={input.cart_items} Loader={Loader} unLoader={unLoader} totalquantity={totalquantity} shipping={shipping} />  
 
      {/*       <Vellapay
            totalprice={input.amount}
            email={input.email}
            firstname={input.customers_firstname}
            lastname={input.customers_lastname}
            phoneno={input.phone_no}
            products={input.cart_items}
            orderid={id}
            Loader={Loader}
            unLoader={unLoader}
          />
         */}
          {/*     <p> <button className='flutterwave-btn' style={ { backgroundColor:"blue"}}> Pay installmentally </button> </p>  */}

          {/*      <p> <button className='flutterwave-btn' style={ { backgroundColor:"orange"}}> pay with flutterwave </button> </p>     */}
         
        <p>
             <Flutterwave style={{ width: "100%" }} totalprice={input.amount} email={input.email} firstname={input.customers_firstname} lastname={input.customers_lastname} phoneno={input.phone_no} products={input.cart_items} orderid={id} Loader={Loader} unLoader={unLoader} /> 
          </p>
       
          <p>
            <button className="cashdelivery-btn"  onClick={handlesubmit}  style={{ backgroundColor: "green" }} >
              <img src={logo} style={{ width: "70px", height: "25px" }} /> Pay on Delivery
            </button>
          </p>
 
          <span style={{ color: "#FF6600" }}> <FaInfoCircle /> Minimum Order for Purchasing on Credit is #25,000 </span>

          <i style={{ fontSize: "0.8em" }}> "Seat back, you get your order in 24 hours" </i>

          <p className="track">
            you can track and view your order status through this link
            <a href={TRACKLINK}> <FaArrowCircleRight /> HERE   </a>
          </p>
          <div className="order-buttons">
            <button className="view-orders-btn" onClick={showdetails}>
              view your details
            </button>
            <button className="delete-order-btn" onClick={showDelMessage}>
              Cancel this Order
            </button>
          </div>

          <div
            className="details-displayed"
            style={{ display: details.display }}
          >
            <div className="details-content">
              <div class="modal-header">
                <span
                  className="close"
                  onClick={hidedetails}
                  style={{ fontSize: "2em" }}
                >
                  &times;
                </span>
                <h2> {input.customers_name} order details</h2>
              </div>
              <div className="modal-content-p">
                <p>   <b> Order id :</b> {input.order_id} </p>
                <p> <b> Shipping Address: </b> {input.state}, {input.customers_address}  </p>
                <p>
                  <b>Items Ordered for </b>:{input.cart_items}
                </p>
                <p>
                  <b>Email </b>:{input.email}
                </p>
                <p>
                  <b>Contact </b>:{input.phone_no}
                </p>
                <p style={detailsText}>
                  <b>Transaction reference : </b>
                  {input.transaction_ref == "" ? (
                    <div style={detailsResult}> Available after payment </div>
                  ) : (
                    input.transaction_ref
                  )}
                </p>
                <p style={detailsText}>
                  <b> Payment Method: </b>
                  {input.payment_type == "" ? (
                    <div style={detailsResult}> Available after payment </div>
                  ) : (
                    input.payment_type
                  )}
                </p>
                <p>
                  <b> Amount: </b>NGN {input.amount}
                </p>
                <p>
                  <b> Order Status: </b>
                  {input.order_status}
                </p>
                <p>
                  <b> Date: </b>
                  {input.created_at}
                </p>
                <p>
                  <b> Payment status: </b>
                  {input.payment_status}
                </p>
                <p style={detailsText}>
                  <b> Payment Verification: </b>
                  {input.payment_confirmation == "" ? (
                    <div style={detailsResult}> No Payment Made </div>
                  ) : (
                    input.payment_confirmation
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {input.payment_status == "paid" && input.order_status == "undelivered" && (
        <div className="payment-content">
          <div className="congrats-div" style={congratsDiv}>
            <img
              src={mark}
              alt=""
              className="congratsmark"
              style={congratsimg}
            />
          </div>

          <p className="placed-order">
            <FaInfoCircle /> Hi
            <span className="highlighted" style={{ fontSize: "1em" }}>
              {input.customers_firstname} {input.customers_lastname}
            </span>
            Your order has been placed
          </p>
          <h className="order-hint">
            Your payment of
            <span className="highlighted" style={{ fontSize: "1em" }}>
              NGN {input.amount}
            </span>
            for
            <span
              className="highlighted"
              style={{ fontSize: "1em", textDecoration: "underline" }}
            >
              {input.cart_items},
            </span>
            was successful!
          </h>
          <i className="seat">"Seat back, you get your order in 24 hours"</i>
          <p className="track">
            you can track and view your order status through this link
            <a href={TRACKLINK}> here </a>
          </p>
          <div className="order-buttons">
            <button className="view-orders-btn" onClick={showdetails}>
              view your details
            </button>
            {/*    <button className="download-receipt-btn">Download Receipt</button> */}
          </div>
          <div
            className="details-displayed"
            style={{ display: details.display }}
          >
            <div className="details-content">
              <div class="modal-header">
                <span class="close" onClick={hidedetails}>
                  &times;
                </span>
                <h2> {input.customers_name} order details</h2>
              </div>
              <p>
                <b> Order id </b> is: {input.order_id}
              </p>
              <p>
                <b> Shipping Address: </b> {input.state},
                {input.customers_address}
              </p>
              <p>
                <b>Items Bought </b>:{input.cart_items}
              </p>
              <p>
                <b>Email </b>:{input.email}
              </p>
              <p>
                <b>Contact </b>:{input.phone_no}
              </p>
              <p>
                <b>Transaction reference </b>:{input.transaction_ref}
              </p>
              <p>
                <b> Payment Method: </b>
                {input.payment_type}
              </p>
              <p>
                <b> Amount: </b>NGN {input.amount}
              </p>
              <p>
                <b> Order Status: </b>
                {input.order_status}
              </p>
              <p>
                <b> Date: </b>
                {input.created_at}
              </p>
              <p>
                <b> Payment Status: </b>
                {input.payment_status}
              </p>
              <p style={detailsText}>
                <b> Payment Verification: </b>
                {input.payment_confirmation == "" ? (
                  <div style={detailsResult}> No Payment Made </div>
                ) : (
                  input.payment_confirmation
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      {input.payment_type == "Pay on delivery" && input.order_status == "undelivered" && (
          <div className="payment-content">
            <div className="congrats-div" style={congratsDiv}>
              <img
                src={mark}
                alt=""
                className="congratsmark"
                style={congratsimg}
              />
            </div>

            <p className="placed-order">
              <FaInfoCircle /> Hi <span className="highlighted" style={{ fontSize: "1em", textTransform: "capitalize" }}> {input.customers_firstname} {input.customers_lastname}  </span> Your order has been placed  </p>
            <h className="order-hint"> Your request to pay <span className="highlighted" style={{ fontSize: "1em" }}> NGN {input.amount} </span> on delivery for <span  className="highlighted"  style={{ fontSize: "1em", textDecoration: "underline" }} >  {input.cart_items} </span> was successful!</h>

            <h className="order-hint" style={{ color: "black", textTransform: "italic" }}>" You will be contacted soon by our delivery agent , and your items will be delivered to you at your specified address : <br/> <br/> <FaArrowCircleRight style={{ color: "#ff6600" }}/> {input.customers_address}, {input.customers_lga} Local Government {input.state} State "</h>

            <i className="seat">"Seat back, you get your order in 24 hours"</i>
            <p className="track">
              you can track and view your order status through this link
              <a href={TRACKLINK}> here </a>
            </p>
            <div className="order-buttons">
              <button className="view-orders-btn" onClick={showdetails}>
                view your details
              </button>
              {/*    <button className="download-receipt-btn">Download Receipt</button> */}
            </div>
            <div
              className="details-displayed"
              style={{ display: details.display }}
            >
              <div className="details-content">
                <div class="modal-header">
                  <span class="close" onClick={hidedetails}>
                    &times;
                  </span>
                  <h2> {input.customers_name} order details</h2>
                </div>
                <p>
                  <b> Order id </b> : {input.order_id}
                </p>
                <p>
                  <b> Shipping Address: </b> {input.customers_address}, {input.customers_lga} Local Government {input.state} State
                </p>
                <p>
                  <b>Items Bought </b>:{input.cart_items}
                </p>
                <p>
                  <b>Email </b>:{input.email}
                </p>
                <p>
                  <b>Contact </b>:{input.phone_no}
                </p>
                <p>
                  <b>Transaction reference </b>:{input.transaction_ref}
                </p>
                <p>
                  <b> Payment Method: </b>
                  {input.payment_type}
                </p>
                <p>
                  <b> Amount: </b>NGN {input.amount}
                </p>
                <p>
                  <b> Order Status: </b>
                  {input.order_status}
                </p>
                <p>
                  <b> Date: </b>
                  {input.created_at}
                </p>
                <p>
                  <b> Payment Status: </b>
                  {input.payment_status}
                </p>
                <p style={detailsText}>
                  <b> Payment Verification: </b>
                  {input.payment_confirmation == "" ? (
                    <div style={detailsResult}> No Payment Made </div>
                  ) : (
                    input.payment_confirmation
                  )}
                </p>
              </div>
            </div>
          </div>
        )}

      {input.payment_status == "paid" && input.order_status == "delivered" && (
        <div className="payment-content">
          <div className="congrats-div" style={congratsDiv}>
            <img
              src={mark}
              alt=""
              className="congratsmark"
              style={congratsimg}
            />
          </div>

          <p className="placed-order">
            <FaInfoCircle /> Hi
            <span className="highlighted" style={{ fontSize: "1em" }}>
              {input.customers_firstname} {input.customers_lastname}
            </span>
            Your order has been placed
          </p>
          <h className="order-hint">
            Your payment of
            <span className="highlighted" style={{ fontSize: "1em" }}>
              NGN {input.amount}
            </span>
            for
            <span
              className="highlighted"
              style={{ fontSize: "1em", textDecoration: "underline" }}
            >
              {input.cart_items},
            </span>
            was successful!
          </h>
          <i>"your order has been delivered to you"</i>
          <p className="track">
            you can track and view your order status through this linkb
            <a href={TRACKLINK}> {TRACKLINK} </a>
          </p>
          <div className="order-buttons">
            <button className="view-orders-btn" onClick={showdetails}>
              view your details
            </button>
            <button className="download-receipt-btn">Download Receipt</button>
          </div>
          <div
            className="details-displayed"
            style={{ display: details.display }}
          >
            <div className="details-content">
              <div class="modal-header">
                <span class="close" onClick={hidedetails}>
                  &times;
                </span>
                <h2> {input.customers_name} order details</h2>
              </div>
              <p>
                <b> Order id </b> is: {input.order_id}
              </p>
              <p>
                <b> Shipping Address: </b> {input.state},
                {input.customers_address}
              </p>
              <p>
                <b>Items Bought </b>:{input.cart_items}
              </p>
              <p>
                <b>Email </b>:{input.email}
              </p>
              <p>
                <b>Contact </b>:{input.phone_no}
              </p>
              <p>
                <b>Transaction reference </b>:{input.transaction_ref}
              </p>
              <p>
                <b> Payment Method: </b>
                {input.payment_type}
              </p>
              <p>
                <b> Amount: </b>NGN {input.amount}
              </p>
              <p>
                <b> Order Status: </b>
                {input.order_status}
              </p>
              <p>
                <b> Date: </b>
                {input.created_at}
              </p>
              <p>
                <b> Payment Status: </b>
                {input.payment_status}
              </p>
              <p style={detailsText}>
                <b> Payment Verification: </b>
                {input.payment_confirmation == "" ? (
                  <div style={detailsResult}> Not verifyinputsfied </div>
                ) : (
                  input.payment_confirmation
                )}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Payment;
