import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Signup from './signup';
import Homeheader from "../components/home/homeheader";

//import '../css/home.css'
import '../css/home/headermenu.css'

function Home({token}) {

    /*
  const [cartdisplay, setcartdisplay]=useState({ left:"-70%",transition: "0.3s" });
  const display=()=>{
    setcartdisplay({show:true, left:"0",transition: "0.3s" });
   // console.log(cartdisplay);
    unshow();
  }

  const undisplay=()=>{
    setcartdisplay({show:false, left:"-70%" ,transition: "0.3s" });
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
   // console.log(cartdisplay);
  }

  const show=()=>{
    setcartshow({show:true, width:"100%" ,transition: "0.3s"});
  //  console.log(cartshow);
    undisplay();
  }

  const unshow=()=>{
    setcartshow({show:false, width:"0" });
 //   console.log(cartshow);
  }
*/

 /*
    if(!token){
        return <Signup/>
    }
*/
    return ( 
        <div className="container">
          <Homeheader/>
        {/*   <Header 
          onDisplay={display} 
          cartdisplay={cartdisplay} 
          onShow={show} 
          onUnDisplay={undisplay} 
          onUnShow={unshow} 
          />
            Dasboard
        */}    
        </div>
     );
}

export default Home;