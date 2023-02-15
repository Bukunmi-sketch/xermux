import React from 'react';
import { Link } from 'react-router-dom';
import "../css/App.css";

function LandingNav() {
    return ( 
        <nav>
                <header>

                    <h2 class="logo" > Xermux </h2>
                    <div class="create">
                    <Link to='/signup'> <button class="create-post">Create</button> </Link>
                    <Link to='/login' >   <button class="create-post">Login</button> </Link>
                    </div>
                </header>
            </nav>
     );
}

export default LandingNav;