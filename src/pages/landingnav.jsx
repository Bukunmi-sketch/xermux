import React from 'react';
import { Link } from 'react-router-dom';

function LandingNav() {
    return ( 
        <nav>
                <div class="container">

                    <h2 class="logo" > Xermux </h2>
                    <div class="create">
                    <Link to='/signup'> <button class="create-post">Create</button> </Link>
                    <Link to='/login' >   <button class="create-post">Login</button> </Link>
                    </div>
                </div>
            </nav>
     );
}

export default LandingNav;