import React, { useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route,  Link } from 'react-router-dom';
import axios from "axios";
import useLocalStorage from './hooks/uselocalstorage';
import './imports/index.css';
import Signup from './pages/signup';
import Login from './pages/login';
import ActionButton from './components/button';

import { FaCartPlus,FaBars,  FaTimes } from "react-icons/fa";
/*
import pica from '../Images/smallproduct.png'
import logo from '../Images/afrimamalogo.png'
*/

function LandingPage() {

   //s const ref = useRef();
    const [loading, setLoading] = useState({ display: "none" });
    const [bodyloading, setbodyLoading] = useState({ display: "block" });
    const [Error, setError] = useState();

    const Loader = () => {
        setTimeout(() => setLoading({ display: "block" }), 3000);
    }

    const bodyUnloader = () => {
        setTimeout(() => setbodyLoading({ display: "none" }), 3000);
    }

    const unLoader = () => {
        setLoading({ display: "none" });
    }

    const scrollto = () => {
        ref.current.scrollTo(0, 0);
    }

    useEffect(() => {
        Loader();
        bodyUnloader();
        // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <BrowserRouter>
         <Routes>
                            <Route path='/signup' element={<Signup />} />
                            <Route path='/login' element={<Login />} />
                        </Routes>
             

                      
        <div className="land">
            <div id="loader" style={{ display: bodyloading.display }}>
                <span class="span"></span>
                <span class="span"></span>
                <span class="span"></span>
                <span class="span"></span>
                <span class="span"></span>
                <span class="span"></span>
                <span class="span"></span>
            </div>
           
            <nav>
                <div class="container">

                    <h2 class="logo" > Xermux </h2>
                    <div class="create">
                    <Link to='/signup'> <button class="create-post">Create</button> </Link>
                    <Link to='/login' >   <button class="create-post">Login</button> </Link>
                    </div>
                </div>
            </nav>
            <div class="content" style={{ display: loading.display }}>
                <h2>Welcome to <span class="webname">Xermux</span></h2>

                <div class="section" data-aos="fade-up">
                    <div class="get-started">Share your thoughts (political,sports,entertainments),ask questions ? play games,share your relationship,families, education etc problems,seek advice  all anonymously </div>
                </div>

                <div class="logo-logo" data-aos="zoom-in">
                    <p>Xermux</p>
                </div>
           
               
            </div>
        

            <footer data-aos="flip-up">
                Developed by Bukunmi Olarinde @2022
                <a href="../profile/b" > <button class="contact">contact</button></a>
            </footer>
        </div>
        </BrowserRouter>
    );
}

export default LandingPage;