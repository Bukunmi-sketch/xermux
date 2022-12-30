import React, { useState, useEffect } from 'react';
import axios from "axios";


function Login() {
    return ( 
        <div className="container">

            <div class="sub-container">
        
        <div class="logobox">
            <p class="logoo">Afrimama admin login</p>
        </div>
        
        <div class="login-details">
          <form action="#">
             <div class="error"><p></p></div><br/>
                
                <div class="email-details">
                     <input type="email" name="email" placeholder="Email Address" autofocus required />
                </div>
                
                <div class="password-details">
                    <span  id="show" onclick="check()">
                    <i class="fa fa-eye"></i>
                    </span>
                    <input type="password" id="pass" name="password" placeholder="Password"     required autocomplete="off" />
                </div>
                
                <button class="submit" name="login">Log In</button>
                
                <div class="forgetbox">   
                    <a href="email-ver.php" class="forget">Forgot password?</a>
                </div>
                
                <div class="before">
                     <p class="or">  or  </p>
                </div>
        
                <div class="create">
                   <a href ="signup.php" class="createbut"> Create New  Account </a>
              </div>
        
            </form>  
         </div>
        </div>
        </div>
     );
}

export default Login;