
           

               
               
               <!--------------------NEWSFEED-----------------> 

                    <?php
                    $querypost="SELECT * FROM posts INNER JOIN anonyusers ON anonyusers.id=posts.user_id  LEFT JOIN Follow ON Follow.followingid=posts.user_id  WHERE Follow.followerid=:sessionid OR posts.user_id=:sessionid GROUP BY posts.post_id  ORDER BY posts.post_id DESC LIMIT 5";
                                
                    $poststmt=$conn->prepare($querypost);
                    $poststmt->bindParam(':sessionid', $sessionid);
                    $poststmt->execute();
                    $postdata=$poststmt->fetchAll(PDO::FETCH_ASSOC);

                   
                    ?>
                   
               <div class="feeds">
                     <!--------------------EACH FEED-----------------> 
                    
                
                <div class="post-container">
                  <?php foreach($postdata as $userpost): ?>
                   <div class="feed" id="feed<?php echo  "{$userpost['post_id']}" ; ?>" data-feedpostid="<?php echo  "{$userpost['post_id']}" ; ?>" >
                       <div class="head">
                       <a href="pages.php?p=<?php echo urlencode(base64_encode($userpost['id']) ); ?> ">
                           <div class="user">
                               <div class="profile-photo">
                               <img src="<?php echo $dirfile; ?><?php echo  "{$userpost['profileimage']}" ; ?>" class="profile-photo" alt="">
                               </div>
                           
                               <div class="info">
                                   <h3><?php echo  "{$userpost['firstname']} {$userpost['lastname']}"; ?></h3>
                                  <small> <?php  echo date("D,F j Y",  strtotime($userpost['post_date'])); ?> </small> 
                               </div>
                           </div>
                          </a> 
                          <?php if($userpost['id']==$sessionid): ?>
                           <span class="edit" id="del-edit-post">
                            <i class="fa fa-elliphis"></i>
                           </span>
                           <div class="del-edit-container">
                             <form id="post-modify">
                               <button data-postidentity="<?php echo  "{$userpost['post_id']}" ; ?>" data-useridentity="<?php echo  "{$sessionid}" ; ?>" class="delete-post"><i class="material-icons">delete</i></button>
                               <button data-postidentity="<?php echo  "{$userpost['post_id']}" ; ?>" data-useridentity="<?php echo  "{$sessionid}" ; ?>" class="edit-post" style="display:none;" >edit</button>
                             </form>
                           </div>
                          <?php endif ?>
                       </div>

                       <?php  if(empty($userpost["post_pic"])): ?>
                           <div class="caption">
                           <p> <?php echo  "{$userpost['post_body']}" ; ?>  </p>
                          </div>
                       <?php else: ?>
                           <div class="caption">
                             <p> <?php echo  "{$userpost['post_body']}" ; ?>  </p>
                          </div>
                          <div class="photo">
                              <img src="<?php echo $postdirfile; ?><?php echo  $userpost['post_pic']; ?>" alt="">
                          </div>
                       <?php endif ?>

                       <div class="action-buttons">

                        <!--------------------LIKE BUTTON-----------------> 
                           <div class="interaction-button">
                                           
                        <?php if($likeInstance->checkIsLiked($sessionid, $userpost['post_id'])): ?>       
                            <form>
			                   <button data-postid="<?php echo  "{$userpost['post_id']}" ; ?>" data-senderid="<?php echo  "{$sessionid}" ; ?>" data-receiverid="<?php echo  "{$userpost['user_id']}"; ?>" id="likebtn<?php echo  "{$userpost['post_id']}" ; ?>" class="likebtn" name="like" ><i class="fa fa-heart-o" id=""></i></button>
	                   
			                   <button data-postid="<?php echo  "{$userpost['post_id']}" ; ?>" data-senderid="<?php echo  "{$sessionid}" ; ?>" data-receiverid="<?php echo  "{$userpost['user_id']}"; ?>" id="unlikebtn<?php echo "{$userpost['post_id']}" ; ?>" class="unlikebtn" name="unlike" style="display:none;"><i class="fa fa-heart"></i></button>
                            </form>

                       <?php else: ?>

                            <form>
	                           <button  data-postid="<?php echo  "{$userpost['post_id']}" ; ?>" data-senderid="<?php echo  "{$sessionid}" ; ?>" data-receiverid="<?php echo  "{$userpost['user_id']}" ; ?>" id="unlikebtn<?php echo  "{$userpost['post_id']}" ; ?>" class="unlikebtn"  name="unlike" ><i class="fa fa-heart"></i></button>
	                           <button  data-postid="<?php echo  "{$userpost['post_id']}" ; ?>" data-senderid="<?php echo  "{$sessionid}" ; ?>" data-receiverid="<?php echo  "{$userpost['user_id']}" ; ?>" id="likebtn<?php echo  "{$userpost['post_id']}" ; ?>" class="likebtn" name="like"  style="display:none;"><i class="fa fa-heart-o" ></i></button>          
           
                            </form>
                               
                               

                       <?php endif ?>

                           </div>
                                 <!--------------------COMMENT LINK-----------------> 
                           <span><a href="comment.php?post=<?php echo  urlencode(base64_encode($userpost['post_id'])) ; ?>"><i class="fa fa-comment-o"></i></a></span>


                            <!--------------------SAVE BUTTON-----------------> 
                            <?php if($saveInstance->checkIsSaved($sessionid, $userpost['post_id'])): ?>       
                            <form>
			                   <button data-postid="<?php echo  "{$userpost['post_id']}" ; ?>" data-senderid="<?php echo  "{$sessionid}" ; ?>" data-receiverid="<?php echo  "{$userpost['user_id']}"; ?>" id="savebtn<?php echo  "{$userpost['post_id']}" ; ?>" class="savebtn" name="like" ><i class="fa fa-bookmark-o" id=""></i></button>
	                   
			                   <button data-postid="<?php echo  "{$userpost['post_id']}" ; ?>" data-senderid="<?php echo  "{$sessionid}" ; ?>" data-receiverid="<?php echo  "{$userpost['user_id']}"; ?>" id="unsavebtn<?php echo "{$userpost['post_id']}" ; ?>" class="unsavebtn" name="unlike" style="display:none;"><i class="fa fa-bookmark"></i></button>
                            </form>

                       <?php else: ?>

                            <form>
	                           <button  data-postid="<?php echo  "{$userpost['post_id']}" ; ?>" data-senderid="<?php echo  "{$sessionid}" ; ?>" data-receiverid="<?php echo  "{$userpost['user_id']}" ; ?>" id="unsavebtn<?php echo  "{$userpost['post_id']}" ; ?>" class="unsavebtn"  name="unlike" ><i class="fa fa-bookmark"></i></button>
	                           <button  data-postid="<?php echo  "{$userpost['post_id']}" ; ?>" data-senderid="<?php echo  "{$sessionid}" ; ?>" data-receiverid="<?php echo  "{$userpost['user_id']}" ; ?>" id="savebtn<?php echo  "{$userpost['post_id']}" ; ?>" class="savebtn" name="like"  style="display:none;"><i class="fa fa-bookmark-o" ></i></button>          
           
                            </form>
                               
                               

                       <?php endif ?>
                     
                       
                       </div>
                    <div class="interaction-result">
                    <a href="plikes.php?list=<?php echo  urlencode(base64_encode($userpost['post_id'])) ; ?>">
                       <div class="liked-by<?php echo  "{$userpost['post_id']}" ; ?>">
                        <?php 
                         ($userpost['post_likes'] > 1) ? $like="likes" : $like="like" ; 
                          echo "{$userpost['post_likes']} {$like}" ;
                          ?>
                       </div>
                    </a>

                    <a href="comment.php?post=<?php echo  urlencode(base64_encode($userpost['post_id'])) ; ?>">
                       <div class="comment text-muted">
                           <?php 
                           $commentno=$commentInstance->commentsCount($userpost["post_id"]); 
                           ($commentno > 1) ? $ccc="comments" : $ccc="comment"; 
                           echo "{$commentno} {$ccc}";
                           ?> 
                        </div>
                       </a>
                       <div class="saved-by<?php echo  "{$userpost['post_id']}" ; ?>"> 
                       <?php 
                            $saveno=$saveInstance->getSavesNo($userpost["post_id"]); 
                            ($saveno > 1) ? $sss="saved" : $sss="saved" ; 
                            echo "{$sss} ({$saveno}x)" ;
                          
                          ?> 
                       </div>
                    </div>


                   </div>
                   <?php endforeach ?>
                  </div>
                 

                <?php  if($poststmt->rowCount() == 0 ): ?>
                       <div class='empty'> Hi <div class='emptyname'>  <?php echo  "{$firstname}" ; ?>! </div> your newsfeed is empty follow users to see their posts  <a href='connect.php'> <div class='checkmore'><p> Explore </p> </div> </a> </div>
                        
                  <?php  elseif($poststmt->rowCount() < 1): ?>
                        <div class='empty'> Hi <span class='emptyname'> <?php echo  "{$lastname}" ; ?>!  </span> your newsfeed content is low,check and more follow users to see their posts  <a href='connect.php'>  <div class='checkmore'><p> Explore </p> </div> </a> </div>
                         
                  <?php else: ?> 
                        <form class="show" action="#">   
                         <input type="hidden" name="id" class="hiddenid" value="<?php echo $sessionid; ?>"> 
                         <input type="hidden" name="no" value="5">     
                        <div class='showw'> see more posts</div>
                       </form>
                  <?php endif  ?>    
                     
                   
                     
                   
               </div>


               <!--------------------END OF NEWSFEED-----------------> 
