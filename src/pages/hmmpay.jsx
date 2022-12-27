import React, { useState, useEffect} from 'react';
import axios from "axios";
import { useParams, useNavigate, } from "react-router-dom";
import Flutterwave  from '../includes/usehooks';
import ExampleComponent from '../includes/useklump';


function Payment() {
  const {id}=useParams();
  const navigate= useNavigate();
  const [input, setInputs]=useState([{}]);
  const [error, setError]=useState('');

   useEffect(()=>{
       getOrderDetails();
   }, []); 


    console.log("id",id);
 
  async function getOrderDetails(){
    try{
        // const API="http://localhost/websites/react-crud/Controllers/getuserscontroller.php";
        const API=`http://127.0.0.1:8000/api/orderslist/${id} `;
        const res= await axios.get(API);

         console.log('data',res.data);
         console.log(res);
         setInputs(res.data[0]);
           
         if(input.length == 0){
            setError("error");
            console.log("errorpage",error);
         }
         console.log("orderstate", input);
         console.log("ord", input);     
    }catch(error){
        console.log(error);
    }
  }

 /*
  function getOrderDetails(){
    axios.get(`http://127.0.0.1:8000/api/orderslist/${id}` ).then(function(response){
        //console.log(response.data[`${input.id}`]);
        console.log(response.data);
        setInputs(response.data[0]);
        console.log("he", input);
        console.log("ff",input[0].order_id);
    })
}
*/

    return ( 
      <section className="sectiona">
       { error == "error"  && <div>can"t display this page</div> }

       {  input.payment_status == "unpaid" ? (

        <div className="boxa">
        <div className="boxa-content">
            <p>Your order id is: {input.order_id}</p>
            <p> Dear {input.customers_name}, you just made an order of NGN{ input.amount} for {input.cart_items + "items"}, your orderid is {id}  and your email is {input.email} </p>
            <h className="Natural" style={ { color:"green"}}>  At Afrimama we provide options to:  </h>
            <p> pay at instant with</p>
             <p> <button className='buy-now' style={ { backgroundColor:"orange"}}> pay with flutterwave </button> </p> 
              {/*   <p> <Flutterwave totalprice={ input.amount }  email={input.email} name={input.customers_name} phoneno={input.phone_no} products={input.cart_items} orderid={id} /> </p>
                           */}                         

            <p> Pay by installment with </p>
           {/*  <p>  <ExampleComponent/> </p> */}
                  <p> <button className='buy-now' style={ { backgroundColor:"blue"}}> Pay installmentally </button> </p> 
        </div>
      </div>
            ) : 
        
         input.payment_status == "paid"  &&  input.order_status == "undelivered" ? (
          <div className="boxa">
          <div className="boxa-content">
              <p>Your order id is: {input.order_id}</p>
              <h className="Natural" style={ { color:"green"}}> Congratulations {input.customers_name}, you just made an paymennt of NGN{ input.amount} for {input.cart_items + "items"}, was successful </h>
              <p> your product will be shipped to  {input.state}, {input.customers_address}   </p>
              <p> your transaction reference is {input.transaction_ref} , paid through {input.payment_type} </p>
              <p> <button className='buy-now' style={ { backgroundColor:"green"}}> Thank you!</button> </p>
          </div>
        </div>
            ) : 

        input.payment_status == "paid" &&  input.order_status == "delivered" ? (
              <div className="boxa">
                  <div className="boxa-content">
                     <p>Your order id is: {input.order_id}</p>
                      <p> Congratulations {input.customers_name}, your order for {input.cart_items + "items"}, as been delivered paymennt of NGN{ input.amount}  was successful </p>
                      <h className="Natural" style={ { color:"green"}}> your product will be shipped to  {input.state}, {input.customers_address}   </h>
                      <p> your transaction reference is {input.transaction_ref} , paid through {input.payment_type} </p>
                      <p> Thanks for patronising us! </p>
                      <p> <button className='buy-now' style={ { backgroundColor:"green"}}> Shop More </button> </p>
                    </div>
              </div>
           ) : 

        ( 
          <>
         {navigate("/")}
         </>
        )
        
        }

     

       
  </section>
      );
}

export default Payment;