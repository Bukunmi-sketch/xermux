import React from 'react';
import strpic from '../Images/smallproduct.png'
import translate from '../Images/plaintainflour.png'

function Sectiona() {
    return ( 
        <section className="sectiona">

            <div className="boxa">
                 <div className="boxa-content">
                     <h1 className="Natural">Buy Now,Pay Later  & <span> free delivery </span> </h1>
                     <p>Are you tired of waiting for your salary before eating and making excellent Meals? <br />
                     Tired of constant market stress and delivery prices? If yes <br />
                     Afrimama is here for you .You can <span className='spanbold'> Buy Now,PAY LATER </span> & still enjoy free delivery </p>
                     <a href='#product'><button className='buy-now' > Buy now</button> </a> 
                 </div>
            </div>

            <div className="boxb" >

                <div >
                   <img src={strpic} alt="" className="imga" />
                </div>
                <div>
                   <img src={translate} alt="" className='imgb' />
                </div>
              
            </div>
             
        </section>
     );
}

export default Sectiona;