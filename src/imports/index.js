
 /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });


  
function load(){
    setInterval(rotate,3000); 
             }

function rotate(){
    document.getElementById("loader").style.display="none";
    document.querySelector(".content").style.display="block";

//setInterval(rotate,5000);
}