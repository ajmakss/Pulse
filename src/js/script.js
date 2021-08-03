$(document).ready(function(){
    $('.caroulsel__inner').slick({
        speed: 300,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev-icon.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next-icon.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
      });
});
              