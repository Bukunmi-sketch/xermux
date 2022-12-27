import React from 'react'


function Message({message, hideMessage, msgdisplay}) {
    return ( 
        <div className="details-displayed" style={{ display: msgdisplay.display }}>

        <div className="details-content">
             <div class="modal-header">
                 <span className="close" onClick={hideMessage} style={{ fontSize:"2em" }}>&times; </span>
                 <h2>Message</h2>
             </div>
            <div className="modal-content-p">
               <p>{message}  </p>
            </div>
        </div>
    
     </div>


     );
}

export default Message;