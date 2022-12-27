import React from 'react';
import pica from '../Images/smallproduct.png'

function Homeitems( { product , onAdd ,onShow} ) {

    const imagestyle={
        width:'100%',
        borderRadius:"4px",
        height:"150px",
        border:"2px solid white"
        
     }
  
     const imagebox={
        border:"1px solid red"
     } 

  //const linkurl="http://localhost/websites/mamapi/Images/Product-img/";
  const linkurl="http://api.afrimamafarms.com/Images/product-img/";
 //const linkurl="https://afrimamafarms.com/endpoint/Images/product-img/";

    return ( 
        <>
         
        <div className="each-user">
          <div className="productname"> { product.product_name} </div>
           
           <div className="content-box">
              {/*  <img src={ product.product_picture} alt={ product.product_name } /> */}
              <div className="imagebox" >
                 <img src={`${linkurl}${product.product_picture}` } alt={ product.product_picture } style={ imagestyle } />
              </div>
              
               <div className="desc-box">
                    <p className="product-desc">{ product.description }</p>
                  {/*    <p className="product-desc">category : { product.category }</p> */}
                    <p className="price">#{ product.price } .00 </p>
               </div>

           </div>
        <div className="follow-unfollow">                            
            <button  type="button" onClick={ ()=>onAdd(product) }  className="addcartbtn" > Add to cart </button>          
            <button type="button" className="justbtn" onClick={()=>onShow()  } > checkout </button>     
        </div>
    </div>
    
   
    </> 
     );
}

export default Homeitems;