import React from 'react'



function Headermenu() {
    return ( 
      <div class="bottom-menu-nav">
        <a href="home.php" class="menu-nav" id="message-notifications"> 
        <span><i class="material-icons">home</i></span>
            <h3>Home</h3>
        </a>
        <a href="explore.php" class="menu-nav"> 
        <span><i class="material-icons">search</i></span>
            <h3>Search</h3>
        </a>
        <a href="connect.php" class="menu-nav"> 
        <span><i class="material-icons">people</i></span>
            <h3>Connect</h3>
        </a>
       
        <a href="notify.php?read=true" class="menu-nav"> 
            <span><i class="material-icons">notifications_active</i></span>
            <h3>Notifications</h3>
        </a>
        
        
          <a href="inbox.php?read=true" class="menu-nav" > 
             <span><i class="material-icons"> email </i> </span>
             <h3>Messages</h3>
         </a>
      
  </div>
     );
}

export default Headermenu;