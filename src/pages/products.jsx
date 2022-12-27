import React from 'react';
import Homeitems from '../components/item';
import { useNavigate } from 'react-router-dom';
import { FaArrowCircleDown, FaArrowCircleRight, FaCartPlus } from "react-icons/fa";
import productChef from '../Images/productschef.png'


function Products( { products, onAdd , onCheck, onSearch, searchterm, onShow ,deny } ) { 
  const navigate= useNavigate();

    


    return ( 
        <>
        <section className="product-section-img">
                   <img src={productChef} alt=""  />
                   <div className="absolute-text">
                      <span>FREE DELIVERY</span>
                      <button>All Products</button> 
                   </div>
        </section>
        <div className="about">
                          
            <div className="buyarrow">                   
               <FaArrowCircleDown className='arrowdown'/>
            </div>
            <h6>Products</h6>
         </div>

        <input type="search" name="" id=""  value={searchterm} placeholder="search..." onChange={ (e)=>onSearch(e.target.value)}/>
      <div className="userbox">
    
          {products.filter( (product)=> {
             if(searchterm == ''){
               return product ;                  
             }
           else if( (product == '')){
             { product === 0 && <div>Your cart is empty </div> }
           }
        
            
           else if(product.product_name.toLowerCase().includes(searchterm.toLowerCase()) || product.description.toLowerCase().includes(searchterm.toLowerCase())){
                 return  product ;                    
           }
          else{
                <button>{searchterm}</button>;
         }
           } ).map( (product,key) =>(<Homeitems key={ product.id } onShow={onShow} onAdd={onAdd} onCheck={onCheck} product={ product}/>) ) 
          }     
           <div className="morebtn">
         
             <button onClick={() => {navigate("/products")}} className="more">    More Products  <FaArrowCircleRight/>  </button>                                     
                           
           </div>            
       </div>

      
   </>
     );
}

export default Products;