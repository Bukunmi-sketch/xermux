import React from "react";
import {  Link } from 'react-router-dom';

function ActionButton() {
  return (
    <div class="action-button-container">
      
      <Link to='/signup'>
        <input type="submit" value="Create New Account" class="button-first" />
      </Link>
      <Link to='/login'>
        <input type="submit" value="Login" class="button-second" />
      </Link>
    </div>
  );
}
export default ActionButton;
