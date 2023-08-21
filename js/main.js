window.onload = ()=>{
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}

let btn_play, btn_stop; //variables

window.onload =()=> {
  
  sound = new Howl({
  src: ['https://res.cloudinary.com/oscargil2020/video/upload/v1631332459/Proyecto1/my-life-main-_fjx39s.mp3']
});

  btn_play = document.getElementById("btn_play");
  btn_stop = document.getElementById("btn_stop");
  btn_play.addEventListener("click", reproducir);//accion de presion del boton play  
  btn_stop.addEventListener("click", detener);
} //cargara cuando se abre la ventana

function reproducir(event){
  btn_play.classList.add("ocultar");
  btn_stop.classList.remove("ocultar");
  sound.play();
}

function detener(event){
  btn_play.classList.remove("ocultar");
  btn_stop.classList.add("ocultar");
  sound.stop();
}
