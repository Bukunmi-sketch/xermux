import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
    return ( 
        <section className="sectiona">

        <div className="boxa">
             <div className="boxa-content">
                 <h className="Natural" style={ { color:"red"}}> oops! </h>
                 <p> This page does not exist </p>
                 <p> <button className='buy-now' style={ { backgroundColor:"green"}}>  Go home</button> </p>  
             </div>
        </div>

         
    </section>
     );
}

export default Error;