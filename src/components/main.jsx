import React from 'react';
import Homeitems from './item';
import { BrowserRouter, Routes, Route, Link, NavLink, useNavigate } from 'react-router-dom';
import { FaArrowCircleDown, FaArrowCircleRight, FaCartPlus } from "react-icons/fa";
import Moreproducts from './moreproduct';
import { useRef } from 'react';

function Main( { products, onAdd , onShow, onSearch, searchterm, error }  ) {
  const navigate= useNavigate();
  const ref = useRef();
  //
    return ( 
        <>
             <div className="about">
                               
                 <div className="buyarrow">                   
                    <FaArrowCircleDown className='arrowdown'/>
                 </div>
                 <h6 id='product' ref={ref}>Products</h6>
                 <input type="search" name="" id=""  value={searchterm} placeholder="search by name or description" onChange={ (e)=>onSearch(e.target.value)}/>
              </div>
             
  { error =='' ? (
                 
           <div className="userbox">
              
               {products.filter( (product)=> {
                  if(searchterm == ''){
                    return product ;                  
                  }
                else if( (product == '')){
                  { searchterm === 0 && <div>Your cart is empty </div> }
                 }
             
                 
              else if(product.product_name.toLowerCase().includes(searchterm.toLowerCase()) || product.description.toLowerCase().includes(searchterm.toLowerCase())){
                      return  product ;                    
                }
               else{
                     <button>{searchterm} heol</button>; 
                  }
                } ).map( (product,key) =>(<Homeitems key={ product.id } onAdd={onAdd} onShow={onShow} product={ product} error={error} />) ) 
               }     
             
                <div className="morebtn">
                <button onClick={() => {navigate("/product")}} className="more">    More Products  <FaArrowCircleRight/>  </button>                                                   
                </div>   
                     
            </div>
           ):(
              <div className="error">{error}</div>
            )

           }
        </>
     );
}

        <button>no result found</button>

export default Main;

