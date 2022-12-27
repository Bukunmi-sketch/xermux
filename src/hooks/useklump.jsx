import React, { useState } from "react";
import { KlumpCheckout } from "klump-react";
import { Modal } from "bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ExampleComponent = ({
  totalprice,
  phoneno,
  email,
  firstname,
  lastname,
  products,
  orderid,
  Loader,
  unLoader,
  totalquantity,
  shipping,
}) => {
  // afriPrice= totalprice-5.
  const createunitprice = totalprice / 2;
  const createtotalquantity = 2;
  const [reference, setReference] = useState("");
  const [refb, setrefb] = useState("");
  const [refc, setrefc] = useState("");

  const [data, setData] = useState({
    amount: totalprice + shipping,
    shipping_fee: shipping,
    currency: "NGN",
    redirect_url: `https://afrimamafarms.com/success/${reference}`,
    merchant_reference: orderid,
    meta_data: {
      customer: firstname + "" + lastname,
      email: email,
    },
    items: [
      {
        image_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        item_url: "https://www.paypal.com/in/webapps/mpp/home",
        name: products + "from Afrimamafarms",
        unit_price: createunitprice,
        quantity: createtotalquantity,
      },
    ],
  });

  const payWithKlump = () => {
   // console.log("fuck you");

      // get the type of payment that was clicked even in it was cancelled
     // const APIPAYMETHOD="http://localhost/websites/mamapi/Api/paymethod.php";
      const APIPAYMETHOD = "https://afrimamafarms.com/endpoint/Api/paymethod.php";
       const payinputs = {
         payment_type: "clicked-Klump",
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


    const payload = {
      /*  publicKey:'klp_pk_test_6ce4c84a1e6247bb8eb6fdcb3931a0e606f581f8e56048f59c075162f4f11949', */
      publicKey:
        "klp_pk_8584641750414556b30e640878cccefe06f581f8e56048f59c075162f4f11949", //livekeys
      data,
      onSuccess,
      onError,
      onLoad,
      onOpen,
      onClose,
    };

    new Klump(payload);
  };

  const onSuccess = (data) => {
    console.log("data1", data);
    console.log("data2", data.data);
    console.log("data3", data.data.data);
    console.log("data4", data.data.data.data);
    console.log("type", data.data.type); //type SUCCESS
    console.log("datacheckstatus", data.data.data.status); //status successful
    console.log("referenceid", data.data.data.data.reference); // reference KLP-1662-348036-0961
    setReference(data.data.data.data.reference);

    if (data.data.type == "SUCCESS") {
      //PAYMENT WAS SUCCESSFUL BUT WE"VE NOT CONFIRMED IT YET FROM KLUMP TO OUR SERVER
      // SO WE UPDATE CUSTOMERS RECORD AS PAID BASED ON THEIR ORDER ID
      //const API="http://api.afrimamafarms.com/Api/updatepayment.php";
      //const API="http://localhost/websites/Afrimama/Api/updatepayment.php";
      const API = "https://afrimamafarms.com/endpoint/Api/updatepayment.php";
      const transinputs = {
        payment_status: "paid",
        order_status: "undelivered",
        payment_type: "klump",
        order_id: orderid,
        notifynewpay: "unreadKlump",
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
        //    console.log("updated succesfully as paid klump", responsedata.data);
        console.log('success');
          }
        })
        .catch(function (error) {
          console.log(error);
        });

      //AFTER UPDATING THE RECORD IN DATABASE VERIFY PAYMENT  AND SET PAYMENT TO CONFIRM IF SUCCESSFUL
      //FIRST IF PAYMENT WAS SUCCESSFUL, THEN WE VERIFY THE PAYMENT REFERENCE
      let formData = new FormData();
      formData.append("reference", data.data.data.data.reference);

      axios({
        method: "POST",
        //url:"http://api.afrimamafarms.com/Api/verifypayment.php",
        // url:"http://localhost/websites/Afrimama/Api/verifyklump.php",
        url: "https://afrimamafarms.com/endpoint/Api/verifypayment.php",
        data: formData,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      })
        .then(function (res) {
          console.log("afrimamaServerResponse->verification successful", res);
          /* afrimama api*/ if (res.status === 200) {
            console.log(
              "klumpServerresponse->verification successful",
              res.data
            );
            /* flutterwave*/ if (res.data.state == "success") {
              //UPDATE RECORD IN THE DATABASE
              //successful payment has been made now confirm the record in the database

              //IF VERIFICATION WAS SUCCESSFUL I UPDATED THE ORDER RECORDS BASED ON THE TEXT-REF
              //SET PAYMENT AS CONFIRMED
              //const API_CONFIRM="http://api.afrimamafarms.com/Api/confirmpayment.php";
              //const API_CONFIRM="http://localhost/websites/Afrimama/Api/confirmpayment.php";
              const API_CONFIRM ="https//afrimamafarms.com/endpoint/Api/confirmpayment.php";
              const verifyinputs = {
                payment_confirmation: "confirmed",
                transaction_ref: data.data.data.data.reference,
                order_id: orderid,
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
               /*     console.log(
                      "dataverify->confirmation successful",
                      dataverify.data
                    );
                    console.log("data->confirmation successful", dataverify); */
                    console.log('success');
                    unLoader();
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });

              //navigate(`/success/${res.data.data.tx_ref} `);

              //END OF UPDATING RECORD AFTER SUCCESSFUL VERIFICATION
            }
          }
        })
        .catch(function (res) {
          console.log(res);
        });
      //END OF SUCCESSFUL VERIFICATION
    } else {
    }
  };
  const onError = (data) => {
    console.log("html onError will be handled by the merchant");
    console.log(data);
  };

  const onLoad = (data) => {
    console.log("html onLoad will be handled by the merchant");
    console.log(data);
  };

  const onOpen = (data) => {
    console.log("html OnOpen will be handled by the merchant");
    console.log(data);
  };
  const onClose = (data) => {
    console.log("html onClose will be handled by the merchant");
    console.log(data);
  };

  return <KlumpCheckout onClick={payWithKlump} />;
};

export default ExampleComponent;
