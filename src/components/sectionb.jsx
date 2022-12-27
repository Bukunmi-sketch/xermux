import React from 'react'
import corn from "../Images/cornmaize.png"
import cocoa from "../Images/cocoayam.png"
import rice from "../Images/rice.png"
import banana from "../Images/banana.png"
import suitlady from "../Images/suitlady.png"
import chat from "../Images/Chatscreenshot.png"
import egusi from "../Images/egusi.png"
import semoegusi from "../Images/semoegusi.png"
import chefs from "../Images/chefscooking.png"
import ladyfarming from "../Images/ladyfarming.png"

function Sectionb() {
    return ( 
        <>
         

        <section className="section-why">
             <h3>Why should you <span style={ { color: "#FF6600"}}> try? </span></h3>

             <div className="farm-image-box">
                 <img src={corn} alt="" className='farm-imagea' />
                 <img src={cocoa} alt="cocoyam" className='farm-imageb' />
                 <img src={rice} alt="rice" className='farm-imagec' />
                 <img src={banana} alt="banana" className='farm-imaged' />
             </div>
        </section>

        <section className='our-client'>
            <div className="client-boxa">
               <img src={suitlady} alt="cocoyam" className='suit-images' />
            </div>
           
           <div className="client-boxb" >
           
                 <h3> What Our Client Says</h3>
                 <div className="delivered-con">
                      <div className="delivered">
                        <p> 600+</p>
                        <div className='italic-order'>Order delivered</div> 
                      </div>
                    
                     <div className="img-con">
                       <img src={chat} alt="cocoyam" className='chatimage' />  
                       <span>John doe</span>
                     </div>       
                  </div>
            </div>
        </section>

        <section className="mission">
             <h3> Our mission</h3>
             <p>"To provide Africans with food items with flexible payment plans and stressfree delivery"</p>

             <div className="mission-box">
                 
                  <div className="mission-img">
                      <div className="mission-img-a">
                         <img src={egusi} alt="" />
                         <img src={semoegusi} alt="" />
                      </div>
                      <div className="mission-img-b">
                         <img src={chefs} alt="" /> 
                      </div>
                  </div>

                  <div className="mission-vision">
                       <h3>Our Vision</h3>
                       <div className="vision-text">
                           <i>“Stressfree Delivery and Flexible Payment Plans”</i>
                       </div>
                       
                  </div>

             </div>
        </section>

        <section className="greeny-order">
             <h3>Be <span style={ { color: "#20B302"}}>  Greeny  </span> order from farm!</h3>

             <div className="greeny-order-img">
                 <img src={ladyfarming} alt="" />
                 <img src={semoegusi} alt="" />
             </div>
        </section>
        </>
     );
}

export default Sectionb;