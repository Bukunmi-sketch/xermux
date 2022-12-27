import React from 'react'
import axios from "axios";
import { useNavigate, } from "react-router-dom";

function Delmsg({message, hideDelMessage,firstname,lastname, orderid, showDelMessage, deldisplay}) {

    const navigate= useNavigate();
    function deleteOrder(id){
        console.log(id);
       //  const DEL_API= `http://api.afrimamafarms.com/Api/deleteorder.php?id=${id}`;
     //   const DEL_API=`http://localhost/websites/mamapi/Api/deleteorder.php?id=${id}`;
          const DEL_API= `https://afrimamafarms.com/endpoint/Api/deleteorder.php?id=${id}`;
            axios.delete(DEL_API).then(function(response){
                if(response.status === 200){  // alert('user deleted');              
             //     console.log(response.data);
             console.log('deleted');
                 navigate("/");        
               }
            })
        }
    
    const action={
        margin:"0 auto", 
        textAlign:"center", 
        width:"100%",
        border:"1px solid transparent",
        display:"flex",
        justifyContent:"space-around"
    }    


    return ( 
        <div className="details-displayed" style={{ display: deldisplay.display }}>

        <div className="details-content" >
             <div class="modal-header" style={{ backgroundColor:"#ff6600" }}>
                 <h2>Message</h2>
             </div>
            <div className="modal-content-p">
               <p>Hi {firstname} {lastname}, {message} </p>
               <div className="middle-action" style={action}>
                  <button className="view-orders-btn" style={{ borderRadius:"3px", backgroundColor:"green",border:"1px solid green"}} onClick={hideDelMessage}>Don't delete</button>
                  <button className="view-orders-btn" style={{borderRadius:"3px", backgroundColor:"#7c0606", border:"1px solid #7c0606"}} onClick={()=>deleteOrder( orderid )}>Confirm delete</button>
               </div>
            </div>
        </div>
    
     </div>


     );
}

export default Delmsg;