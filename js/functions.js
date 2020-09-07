$(document).ready(function(){

  //Configurações do carousel
  $('.slick').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1
  });

  //Limpa o texto dos botões 'next' e 'previous'
  $('.slick-prev').html("")
  $('.slick-next').html("")

});