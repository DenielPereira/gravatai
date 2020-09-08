$(document).ready(function(){

  //Configurações do carousel dos filmes
  $('.movies').slick({
    centerMode: true,
    centerPadding: 0,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    adaptiveHeight: true,
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

  //Configurações do carousel das lojas de alimentação
  $('.food-stores').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true
  });

  //Configurações do carousel de novidades
  $('.news-container').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true
  });

  //Configurações do carousel do instagram
  $('.photos-container').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: true
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

