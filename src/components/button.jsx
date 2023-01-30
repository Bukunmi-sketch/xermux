import React from "react";
import {  Link } from 'react-router-dom';

function ActionButton() {
  return (
    <div class="bottom" data-aos="slide-up">
      
      <Link to='/signup'>
        <input type="submit" value="Create New Account" class="signup" />
      </Link>
      <Link to='/login'>
        <input type="submit" value="Login" class="login" />
      </Link>
    </div>
  );
}
export default ActionButton;
