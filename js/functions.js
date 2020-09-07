$(document).ready(function(){

  //Configurações do carousel dos filmes
  $('.movies').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  //Configurações do carousel do footer
  $('.slick').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1
  });

  //Limpa o texto dos botões 'next' e 'previous'
  $('.slick-prev').html("")
  $('.slick-next').html("")

  $('.carousel').carousel({
    interval: false,
    ride: false
  })

});

