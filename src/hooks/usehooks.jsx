import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import flutterwavea from "../Images/flutterwave.png";
import flutterwaveb from "../Images/flutterwaveb.png";
import flutterc from '../Images/flutterc.png';

export default function Flutterwave({
  totalprice,
  phoneno,
  email,
  firstname,
  lastname,
  products,
  orderid,
  Loader,
  unLoader,
}) {
  const navigate = useNavigate();

  const config = {
      //   public_key: "FLWPUBK_TEST-d74da81c2141fc95a6e0e9f73fa43112-X",
      public_key: 'FLWPUBK-fd4a922c6299da236706bc1472c37534-X', //live keys
    tx_ref: orderid,
    amount: totalprice,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    redirect_url: "",

    customer: {
      email: email,
      phone_number: phoneno,
      name: firstname + "" + lastname,
    },
    meta: { counsumer_id: "7898", consumer_mac: "kjs9s8ss7dd" },
    customizations: {
      title: "Afrimama farm products",
      description: "Payment for" + products,
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
      <h1></h1>

      <button
        className="flutterwave-btn"
        onClick={() => {
        //  alert('flutterwave was');
          console.log('damn i dont want to pay');
          
              // get the type of payment that was clicked even in it was cancelled
             // const APIPAYMETHOD="http://localhost/websites/mamapi/Api/paymethod.php";
              const APIPAYMETHOD = "https://afrimamafarms.com/endpoint/Api/paymethod.php";
              const payinputs = {
                payment_type: "clicked-flutterwave",
                order_id: orderid,
              };
              axios
                .post(APIPAYMETHOD, payinputs, {
                  headers: {
                    "content-type": "application/json",
                  },
                })
                .then(function (responsedata) {
                //  console.log(responsedata);
                  if (responsedata.status === 200) {
                 //   console.log("payment details updated successfully",responsedata.data);
                 console.log('success');
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });



          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              console.log(response.tx_ref);

              //PAYMENT WAS SUCCESSFUL BUT WE"VE NOT CONFIRMED IT YET FROM FLUTTERWAVE TO OUR SERVER
              // SO WE UPDATE CUSTOMERS RECORD AS PAID BASED ON THEIR OREDER ID
              //const API="http://api.afrimamafarms.com/Api/updatepayment.php";
              //const API="http://localhost/websites/mamapi/Api/updatepayment.php";
              const API = "https://afrimamafarms.com/endpoint/Api/updatepayment.php";
              const transinputs = {
                payment_status: "paid",
                order_status: "undelivered",
                payment_type: "flutterwave",
                order_id: response.tx_ref,
                notifynewpay: "unreadFlutterwave",
              };
              axios
                .post(API, transinputs, {
                  headers: {
                    "content-type": "application/json",
                  },
                })
                .then(function (responsedata) {
                //  console.log(responsedata);
                  if (responsedata.status === 200) {
                 //   console.log("payment details updated successfully",responsedata.data);
                 console.log('success');
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });

              closePaymentModal();
              Loader();
              //AFTER UPDATING THE RECORD IN DATABASE VERIFY PAYMENT  AND SET PAYMENT TO CONFIRM IF SUCCESSFUL
              //FIRST IF PAYMENT WAS SUCCESSFUL, THEN WE VERIFY THE PAYMENT TRANSACTIONID
              let formData = new FormData();
              formData.append("transactionid", response.transaction_id);

              axios({
                method: "POST",
                // url:"http://api.afrimamafarms.com/Api/verifypayment.php",
                url: "https://afrimamafarms.com/endpoint/Api/verifypayment.php",
                // url:"http://localhost/websites/mamapi/Api/verifypayment.php",
                data: formData,
                config: { headers: { "Content-Type": "multipart/form-data" } },
              })
                .then(function (res) {
              //    console.log("afrimamaServerData-> verified successfully", res );
                  /* afrimama api*/ if (res.status === 200) {
                  //  console.log( "flutterwaveServerData-> verified successfully", res.data );
                    /* flutterwave*/ if (res.data.status == "success") {
                      //UPDATE RECORD IN THE DATABASE
                      //successful payment has been made now i should update the record in the database

                      //IF VERIFICATION WAS SUCCESSFUL I UPDATED THE ORDER RECORDS BASED ON THE TEXT-REF
                      //SET PAYMENT AS CONFIRMED
                      //const API_CONFIRM="http://api.afrimamafarms.com/Api/confirmpayment.php";
                      //const API_CONFIRM="http://localhost/websites/mamapi/Api/confirmpayment.php";
                      const API_CONFIRM =
                        "https://afrimamafarms.com/endpoint/Api/confirmpayment.php";
                      const verifyinputs = {
                        payment_confirmation: "confirmed",
                        transaction_ref: response.transaction_id,
                        order_id: res.data.data.tx_ref,
                      };
                      axios
                        .post(API_CONFIRM, verifyinputs, {
                          headers: {
                            "content-type": "application/json",
                          },
                        })
                        .then(function (dataverify) {
                          console.log(dataverify);
                          if (dataverify.status === 200) {
                      /*      console.log(
                              "dataverify->confimred successfully",
                              dataverify.data
                            ); 
                            console.log(
                              "response->confirmeed successfully",
                              dataverify
                            );*/
                            console.log('success');
                          }
                        })
                        .catch(function (error) {
                          console.log(error);
                        });

                      //END OF UPDATING RECORD AFTER SUCCESSFUL VERIFICATION
                    }
                  }
                  unLoader();
                  navigate(`/success/${res.data.data.tx_ref} `);
                })
                .catch(function (res) {
                  console.log(res);
                });
              //END OF SUCCESSFUL VERIFICATION

              // closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Pay   now with Flutterwave
      </button>
    </div>
  );
}
