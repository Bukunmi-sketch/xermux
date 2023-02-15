import React from 'react'
import Signup from './signup';
import '../css/home.css'

function Home({token}) {


 /*
    if(!token){
        return <Signup/>
    }
*/
    return ( 
        <div className="container">
            Hey welcome home 
            Dasboard
            
        </div>
     );
}

export default Home;