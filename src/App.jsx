import React, { useState, useEffect, useRef} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css'
import './css/product.css'
import './css/media.css'
import './css/checkout.css'
import './css/headernav.css'
import './css/loader.css'
import Header from './components/header';
import Main from './components/main';
import Sectiona from './components/sectiona';
import Navright from './components/navright';
import About from './components/about';
import Sectionb from './components/sectionb';
import Footer from './components/footer';
import Payment from './pages/payment';
import Success from './pages/success';
import Track from './pages/track';
import Klumpsuccess from './pages/klumpsuccess';
import axios from "axios";
import useLocalStorage from './hooks/uselocalstorage';
import data from './data';
import Teams from './pages/teams';
import Aboutus from './pages/aboutus';
import Products from './pages/products';
import Addmsg from './components/addcartmsg';



function App() { 
 // const { products }= data;
  const [products, setProduce]= useState([]);
 // const [cartitems, setCartitems ]=useLocalStorage("cartkey",[]);
  const [cartitems, setCartitems ]=useState([]);
  const [cartdisplay, setcartdisplay]=useState({ left:"-70%",transition: "0.3s" });
  const [cartshow ,setcartshow]=useState({ width:"0" });
  const [checkout, setCheckout]= useState(true);
  const [searchterm, setsearchterm] =useState("");
  const [searchresult, setsearchresult] =useState([]);
  const [jsonresult, setjsonresult] =useState([]);
  const [loading, setLoading] = useState({display:"none"});
  const [delayloading, setdelayLoading] = useState({display:"none"});
  const [Error, setError ]=useState("");
  const [message, setMessage]=useState('');
  const [msgdisplay, setMsgdisplay] = useState({display:"none"});

  const ref = useRef();

  useEffect(()=>{
     getProduce();
  }, []); 
  
  useEffect(()=>{
  searchproducts();
  }, []); 

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    }, []); 
  
  

  
  async function getProduce(){
    setError("wait a minute ,fetching products");
    try {
    //   const API_LINK="http://localhost/websites/mamapi/Api/getproducts.php";
       const API_LINK="http://api.afrimamafarms.com/Api/getproducts.php";  
    //   const API_LINK="https://afrimamafarms.com/endpoint/Api/getproducts.php";  
     const response= await axios.get(API_LINK,
      { headers:{
        "Content-Type":"application/json"
        }
       });
      // console.log("lol response",response.data);
       setProduce(response.data);
       setError("");
       showMessage();
       setTimeout(()=> setMsgdisplay({ display:"none" }),1000);
       setMessage("product loaded succesfully");
      }catch(error){
        if(error.response){
                console.log(error.response.data)
                console.log('error fetching products!');
                setError("Oops,an error occured while fetching products, refresh this page");
                showMessage();
                setTimeout(()=> setMsgdisplay({ display:"none" }),3000);
                setMessage("unable to fetch product, reload this page");
        }
      }
  }

  async function searchproducts(){
    
   // const API_LINK="http://localhost/websites/mamapi/Api/getproducts.php";
      const API_LINK="http://api.afrimamafarms.com/Api/getproducts.php";  
  //   const API_LINK="https://afrimamafarms.com/endpoint/Api/getproducts.php";  
      const response= await axios.get(API_LINK,
        { headers:{
          "Content-Type":"application/json"
      }
    });
   //   console.log("hello",response.data);
   //   setjsonresult("working here",response.data);
    
  }

   
  const check=()=>{
    setCheckout(true);
    console.log(checkout);
  }
  const display=()=>{
    setcartdisplay({show:true, left:"0",transition: "0.3s" });
   // console.log(cartdisplay);
    unshow();
  }

  const undisplay=()=>{
    setcartdisplay({show:false, left:"-70%" ,transition: "0.3s" });
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
   // console.log(cartdisplay);
  }

  const show=()=>{
    setcartshow({show:true, width:"100%" ,transition: "0.3s"});
  //  console.log(cartshow);
    undisplay();
  }

  const unshow=()=>{
    setcartshow({show:false, width:"0" });
 //   console.log(cartshow);
  }

  function showMessage(){
    setMsgdisplay({ display:"block" });
  }

 function hideMessage(){
  setMsgdisplay({ display:"none" });
 }

  const onAdd =(product)=>{ 
      const exist= cartitems.find( (x) => x.id === product.id);

     if(exist){
       setCartitems(
          cartitems.map( (x) => x.id === product.id ? { ...exist , qty: exist.qty + 1} : x )
       )
      // console.log(exist, "it existed");
       //console.log([...cartitems], 'exist');
       showMessage();
       setTimeout(()=> setMsgdisplay({ display:"none" }),700);
       setMessage("Re-added to cart");
     //  console.log(cartitems[1].qty);
     } else {
       setCartitems ( [...cartitems,{...product, qty: 1 } ] );
       showMessage();
       setTimeout(()=> setMsgdisplay({ display:"none" }),700);
       setMessage("added to cart");
     }

  }

  const onRemove = ( product )=> {
     const exist = cartitems.find( (x)=> x.id === product.id );
     if(exist.qty === 1 ){
       setCartitems ( cartitems.filter( (x) => x.id !== product.id ));
       showMessage();
       setTimeout(()=> setMsgdisplay({ display:"none" }),700);
       setMessage("item removed from cart");
     }else {
      setCartitems(
        cartitems.map( (x) => x.id === product.id ? { ...exist , qty: exist.qty - 1} : x )
      )
      showMessage();
       setTimeout(()=> setMsgdisplay({ display:"none" }),700);
       setMessage("item removed from cart");
     }
  }

  const onDelete =( product )=>{
      const exist= cartitems.find( (x) => x.id === product.id );
      if(exist){
        setCartitems( cartitems.filter( (x) => x.id !== product.id ) );
      }else{
        setCartitems ( [...cartitems] );
      }
  }

  const onClear=()=>{
      setCartitems( []);
      console.log("deleted");
   //   console.log(cartitems);
      unshow();
      showMessage();
      setTimeout(()=> setMsgdisplay({ display:"none" }),2000);
      setMessage("cart cleared");
  }

 const searchchange=(keyword)=>{
       
       setsearchterm(keyword);
       console.log(searchterm);
    }

  const Loader=()=>{
    setLoading({display:"block"});
  //  setTimeout(()=> setLoading({display:"none"}),5000);
  }

  const delayLoader=()=>{
     setdelayLoading({display:"block"})

     setTimeout(()=> setdelayLoading({display:"none"}),8000);
   }

  const unLoader=()=>{
    setLoading({display:"none"});
  }

  const scrollto=()=>{
    ref.current.scrollTo(0, 0);
}

 

  return ( 
    <div className="app">
              <div className="loader-container" style={{ display: loading.display }}>
      	             <div className="spinner"></div>
              </div>
              <div className="loader-container" style={{ display: delayloading.display }}>
      	             <div className="spinner"> </div>
                     <div style={{color: "red"}}>waiting for checkout page to load completely</div>
              </div>
      <BrowserRouter>      
          <Header 
          countCartitems={cartitems.length} 
          onDisplay={display} 
          cartdisplay={cartdisplay} 
          onShow={show} 
          onUnDisplay={undisplay} 
          onUnShow={unshow} 
            />
           <Addmsg message={message} showMessage={showMessage} hideMessage={hideMessage} msgdisplay={msgdisplay} />

               { cartshow.show ? (  
              <Navright
          checkout={checkout}
          onAdd={onAdd} 
          onRemove={onRemove} 
          cartitems={cartitems}
          onShow={show} 
          cartshow={cartshow}  
          onDelete={onDelete} 
          onClear={onClear} 
          Loader={Loader}
          unLoader={unLoader}
          onUnShow={unshow} 
          delayLoader={delayLoader}
            />
            )  :  ( '')  }   
                        <Routes>
                            <Route path='/pay/:id' element={  <Payment Loader={Loader} unLoader={unLoader}   delayLoader={delayLoader}/> } />
                            <Route path='/track/:id' element={  <Track Loader={Loader} unLoader={unLoader}  /> } />
                            <Route path='/success/:id' element={  <Success Loader={Loader} unLoader={unLoader}  /> } />
                            <Route path='/complete/' element={< Klumpsuccess/> } />
                            <Route path='/' element={
                                <>
                                <Sectiona />  
                                <Main onAdd={onAdd}  onShow={show} onSearch={searchchange} searchterm={searchterm} products= {products} error={Error}/>
                                <Sectionb />
                                </>
                            }/>
                            <Route path='/team' element ={<Teams/>} />
                            <Route path='product' element={<Products onAdd={onAdd}  onShow={show}  onCheck={check} onSearch={searchchange} searchterm={searchterm} products= {products}/>} />
                            <Route path='/about' element={<Aboutus/>} />
                            <Route path="*" element={Error} />
                        </Routes>
              
        <Footer onUnDisplay={undisplay} scrollto={scrollto} />
        </BrowserRouter>   
      
     
    </div>
   );
}

export default App;


