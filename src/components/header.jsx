import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { FaCartPlus,FaBars,  FaTimes } from "react-icons/fa";
import pica from '../Images/smallproduct.png'
import logo from '../Images/afrimamalogo.png'

function Header( {countCartitems, cartdisplay, onDisplay, onShow,  onUnDisplay }) {

   const navigate= useNavigate();

     return ( 
          <>
         <header>
                 <h4 className='logo'>
                 <Link to='/' className="menu-item" onClick={()=>onCarticon()} > <img src={logo} alt='afrimama' style={ {width:'100%', } }/>  </Link>
                 </h4>

                 <div className="otherside"  >
                 <ul style={ {left:cartdisplay.left }}>
                      <li className="closebar">
                        <FaTimes onClick={()=>onUnDisplay()} className='icons' />
                      </li>               
                       <li> <Link to='/' className="menu-item" onClick={()=>onUnDisplay()}> Home </Link>  </li> 
                       <li> <Link to='/product' className="menu-item" onClick={()=>onUnDisplay()} > Product   </Link> </li>
                       <li> <Link to='/Team' className="menu-item"  onClick={()=>onUnDisplay() } > Team </Link>  </li>
                       <li> <Link to='/about' className="menu-item" onClick={()=>onUnDisplay()}> About us </Link>  </li> 
                       <li> <a href='https://api.afrimamafarms.com/agent/Views/register.php' className="menu-item" target="_blank"> Agent </a>  </li> 
                            
               </ul>  
           
                <div className='bar-box'>
                     <FaBars className="bars" style={ { color:'orangered', fontSize:'1.5em' }} onClick={()=>onDisplay()} /> 
                </div>  
             
                <div className='cartlist'>
                   <FaCartPlus onClick={()=>onShow() } style={ { fontSize:'1.5em' }}/> 
                    { countCartitems ? ( <div className="count" onClick={()=>onShow() } >  { countCartitems} </div>) : ( ''  ) }
                </div>
                               
            </div>
         </header>

              
                   

                      
                 
                     
</>
      );
    }
 
 export default Header;