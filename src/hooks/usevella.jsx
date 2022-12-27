import React from 'react'
import VellaCheckout from 'vella-pay';

const Vellapay=({
  totalprice,
  email,
  firstname,
  lastname,
  orderid,
  Loader,
  unLoader
})=>{

  function Paynow( ) {

    const key = "vk_test_BvDmm5d9CAeCfTrmoZSorw6soKnw30Jn3etGPovo";
    const config = {
      email: email, // string - customer email
      name: firstname + "" + lastname, // string - customer name
      amount: totalprice, //float - amount to pay
      currency: "NGNT", // supported fiat NGNT,USDT,USDC
      merchant_id:'Afrimama', // string - merchant id
      reference:orderid ,// string - generated reference
    };
    const vellaSDK = new VellaCheckout(key, config);

    vellaSDK.init();

    vellaSDK.onSuccess(response => {
      console.log("data", response) // success response with data
    });

    vellaSDK.onError(error => {
      console.log("error", error) // error response
    });
    vellaSDK.onClose(() => {
      console.log("widget closed") // trigger close  
    });;
}
return (
  <button onClick={() => Paynow() } className="vellabtn">Pay With Vella</button>
);

}
export default Vellapay;