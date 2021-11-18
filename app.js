window.addEventListener('load', function(){
  var swiper = new Swiper(".mySwiper", {
slidesPerView: 3,
spaceBetween: 30,
autoplay: {
  delay: 2500,
  disableOnInteraction: false
},
loop: true,        
});      
}) 

document.addEventListener('DOMContentLoaded', (e) => {
const scrollBtn = document.querySelector('.btnScroll');

window.addEventListener('scroll', e => {
let scrollTop = window.pageYOffset;

if (scrollTop > 600){

scrollBtn.classList.remove('hidden');
}else{
scrollBtn.classList.add('hidden');
}
});

scrollBtn.addEventListener('click', (e) => {
window.scrollTo({
  behavior: "smooth",
  top: 0,          
})
});
})


window.addEventListener('load', () =>{

document.getElementById('grid').classList.add('imagenes-cargadas');
})


const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.menu');  

menuBtn.addEventListener('click', e => {    
menu.classList.toggle('is-active');
menuBtn.classList.toggle('is-active');
});

menu.addEventListener('click', (e) => {

menu.classList.remove('is-active');
menuBtn.classList.remove('is-active');
})


const whatsapp = document.querySelector('.whatsapp');
const alto = document.querySelector('.mainContent').offsetHeight;
var nuevoAlto = alto * 0.80;


window.addEventListener('scroll', e => {
const scrollTop = window.pageYOffset;      
if (scrollTop < nuevoAlto){        
whatsapp.classList.remove('hidden');      
}else{        
whatsapp.classList.add('hidden');  
}
});

    
    