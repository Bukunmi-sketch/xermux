<!------------------------USERBOX LIST FOR MOBILE PHONES -----------------> 
 
<div class="userbox">
  <!---------------------each users -----------------> 
  <?php foreach($data as $userdat): ?>
    <div class="each-user">

         <?php  if(empty($userdat["profileimage"])): ?>
            <img src=" <?php echo $dirfile; ?>download.png" alt="" class="image">  
         <?php else: ?>
            <img src=" <?php echo "{$dirfile}" ; ?><?php echo $userdat["profileimage"]; ?>" alt="" class="image">    
         <?php endif ?>

              <div class="shopname"><?php echo "{$userdat["firstname"]} {$userdat["lastname"]}"; ?> </div>
              <div id="followers-count" class="followers-count<?php echo $userdat["id"]; ?>" > 
              <?php //echo $userdat["followers"]; ?>
              <?php 
                            $followno=$followInstance->getPagefollowers($userdat["id"]); 
                            ($followno > 1) ? $fff="followers" : $fff="follower"; 
                            echo "{$followno} {$fff}";
                           ?> 
             </div>
              <a href="pages.php?p=<?php echo urlencode(base64_encode($userdat['id']) ); ?> "> <div class="profileview">view profile</div></a>
           
         <div class="follow-unfollow">
         <?php  if($sessionid==$userdat["id"]): ?>
              <button class="followbtn">create post</button>
         <?php elseif($followInstance->checkIsFollowed($sessionid, $userdat["id"]) ): ?>

             <form id="form" onsubmit="return false;">
                <input type="hidden"  name="sender" value="<?php echo $sessionid; ?>" >
                <input type="hidden" class="id"  name="receiver" value="<?php echo $userdat["id"]; ?> " >                 
                <button type="submit" data-senderid="<?php echo $sessionid; ?>" data-receiverid="<?php echo $userdat["id"]; ?>"  id="followbtna<?php echo $userdat["id"]; ?>" class="followbtna" > follow</button>          
                                     
                <input type="hidden" name="sender" value="<?php echo $sessionid; ?>" >
                <input type="hidden" class="id" name="receiver" value="<?php echo $userdat["id"]; ?>"> 	  
                <button type="submit" data-senderid="<?php echo $sessionid; ?>" data-receiverid="<?php echo $userdat["id"]; ?>" id="followingbtna<?php echo $userdat["id"]; ?>" class="unfollowbtna" style="display:none;"> following </button>          
             </form>
         <?php else: ?>   
             <form id="form" onsubmit="return false;">
                 <input type="hidden"  name="sender" value="<?php echo $sessionid; ?>" >
                 <input type="hidden" class="id"  name="receiver" value=" <?php echo $userdat["id"]; ?> " >                 
                 <button type="submit" data-senderid="<?php echo $sessionid; ?>" data-receiverid="<?php echo $userdat["id"]; ?>" id="followingbtna<?php echo $userdat["id"]; ?>" class="unfollowbtna" > following </button>          
                                                             
                 <input type="hidden" name="sender" value="<?php echo $sessionid; ?>" >
                 <input type="hidden" class="id" name="receiver" value="<?php echo $userdat["id"]; ?>"> 	  
                 <button type="submit" data-senderid="<?php echo $sessionid; ?>" data-receiverid="<?php echo $userdat["id"]; ?>" id="followbtna<?php echo $userdat["id"]; ?>" class="followbtna" style="display:none;"> follow </button>          
             </form>
         <?php endif ?>  
     </div>       <!--------------------follow and unfollow button container----------------->                       
    </div>
    <?php endforeach ?> 
     <!---------------------each of each users -----------------> 
</div>

<!--------------------END OF USERBOX LIST FOR MOBILE PHONES  -----------------> 
