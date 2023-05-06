import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { FaCartPlus, FaBars, FaTimes } from "react-icons/fa";
import pica from '../Images/smallproduct.png'
import logo from '../Images/afrimamalogo.png'

function Profileheader({ countCartitems, cartdisplay, onDisplay, onShow, onUnDisplay }) {

  const navigate = useNavigate();

  return (
    <>
      <header>
        <h4>
          <Link to='/' className="menu-item" onClick={() => onCarticon()} > Olarinde Bukunmi profile  </Link>
        </h4>

      </header>

    </>
  );
}

export default Profileheader;