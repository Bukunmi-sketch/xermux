import React, { useState } from 'react';



function Homeheader() {
    return ( 
        <nav>
        <div class="container">
             <div class="bar" onclick="opennav()"> <i class="fa fa-navicon"></i> </div>

             <h2 class="logo"> Bucuzzi </h2>

             <div class="search-bar">
                 <a href="explore.php">
                    <i class="fa fa-search"></i>
                    <input type="search" name="" id="" placeholder="search for creators and people"/>
                 </a>
             </div>

<!------------------------NAV MENU FOR DESKTOP  ----------------- ---------------->
             <?php include './components/bottomnav.php'; ?>
<!------------------------END OF MENU FOR DESKTOP ----------------- ---------------->





             
             <div class="create">
               <!--  <label class= "btn btn-primary" for="create-post">create</label> -->
               <a href="mypage.php">
                 <div class="header-profile-photo">
                 <img src="" alt="">
                 </div>
               </a>  
             </div>
        </div>
    </nav>
     );
}

export default Homeheader;