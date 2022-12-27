import React, { useState, useEffect} from 'react';
import axios from "axios";
import { useParams, useNavigate, } from "react-router-dom";
import mark from '../Images/successful.png';


function Klumpsuccess() {
  const {id}=useParams();
  const navigate= useNavigate();
  const [input, setInputs]=useState([]);
  const [error, setError]=useState('');

   useEffect(()=>{
       getOrderDetails();
   }, []); 
 


    console.log("id",id);

  async function getOrderDetails(){
   
      // const API=`http://localhost/websites/Afrimama/Api/orderdetails.php/?id=${id}`;
       const API=`http://api.afrimamafarms.com/Api/orderdetails.php?id=${id} `;
        const res= await axios.get(API, { headers:{
          "content-type":"application/json"
      }
    });

         console.log('data',res.data);
         console.log('response',res);
         setInputs(res.data);
           
         if(input.length == 0){
            setError("error");
            console.log("errorpage",error);
         }
         console.log("orderstate", input);
  }

   const congratsimg={
           width:"250px",
           height:"250px"
        }
    const congratsDiv={
        border:"1px solid transparent",
        margin:"50px auto",
        width:"250px",
        position:"relative",
    }    

   // const TRACKLINK = `http://127.0.0.1:5173/track/${id}`;
      const TRACKLINK=`https://afrimamafarms.com/track/${id}`

    return ( 
      <section className="sectiona" style={{ display:'block' }}>

         <div className="congrats-div" style={ congratsDiv } >
             <img src={mark} alt="" className='congratsmark' style={ congratsimg }  />
         </div>
         <h className="Natural" style={ { color:"green "}}>  Congratulations, {input.customers_name} your installmental payment was successful through klump, Thanks! </h>
         <p> Track your payment through this link   <a href={TRACKLINK}> <FaArrowCircleRight /> HERE </a> </p>
  </section>
      );
}

export default Klumpsuccess;