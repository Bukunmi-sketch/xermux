import React from 'react'
import { FaCheck, FaMarker, FaTicketAlt } from 'react-icons/fa';


function Addmsg({message, hideMessage, msgdisplay}) {
    
    const font={
         fontFamily:"DM sans"
    }
    return ( 
        <div className="details-displayed" style={{ display: msgdisplay.display,  background:"transparent" }}>

        <div className="details-content" style={{ backgroundColor:"#ff6600", width:"160px" }}>
             <div className="modal-header">
                 <h2>Message</h2>
             </div>
            <div className="modal-content-p">
               <p style={font}>{message} <FaCheck/> </p>
            </div>
        </div>
    
     </div>


     );
}

export default Addmsg;