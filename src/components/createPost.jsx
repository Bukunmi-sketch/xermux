import React, { useState, useEffect } from 'react';



function CreatePost() {
    return ( 
        <div>
                {/* --------------------CREATE POST-----------------  */}
               <form action="#" class="create-post-container" enctype="multipart/form-data">
               <label id="showCreatePost" class= "btn btn-primary" for="create-post" style="display: none;">create</label>
                   <div class="error"></div>
                   <div class="create-post">                      
                   
                      <input type="hidden" name="posterid" value="<?php echo $sessionid; ?>" >
                      <textarea name="post-text" class="postvalue" id="create-post"  maxlength="500" placeholder="share your thought"></textarea>
                      <button type="submit"  class="btn-post">post </button>
                   </div>
                
                   <div class="upload-container">
                        <div class="add-image">Add image</div>
                        <div class="remove-image">Remove image</div>                    
                        <div id="upload" >
                            <img src="" onClick="trigger()" id="profileDisplay" alt="upload"> 
    	                    <input type="file" name="dpic" onchange="displayImage(this)"   id="capture"  style="display:none;">
    	                    <i class="fa fa-camera" id="camera"></i>
                        </div>
                    </div>
                    <div class="image-warning" style="display: none;">image must not be larger than 900kb </div>
              
               </form>
               {/* --------------------END OF CREATE POST -----------------  */}

        </div>
     );
}

export default CreatePost;