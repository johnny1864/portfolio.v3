jQuery(document).ready(($) => {
    $('.projects--slider').slick({
      mobileFirst: true,
      slidesToShow: 1,
      infinite: true,
      dots: true,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            // centerMode: true,
          },
        },
      ],
    });


    $('.burger-menu').click(function () {
      $(this).toggleClass('active');
    });

    $(window).on('scroll', function(){   
        //Adds class 'shrink' to nav on scroll
        if($(window).scrollTop()>70){
            $('header').addClass('scroll');
        }else{
            $('header').removeClass('scroll');
        }
    });
  });