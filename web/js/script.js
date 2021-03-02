if(window.SimpleSlide){

new SimpleSlide({
  slide: 'quote', // nome do atributo data-slide="principal"
  auto: true, // se o slide deve passar automaticamente
  time: 5000, // tempo de transição dos slides 5000=5seg
});

new SimpleSlide({
  slide: 'portfolio', 
  auto: true, 
  time: 5000, 
  nav: true,
});

}

if(window.SimpleAnime){
new SimpleAnime();

}
