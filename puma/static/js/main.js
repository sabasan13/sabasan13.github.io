;
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  $(document).ready(function(){
  
    if ($(window).width() < 950) {
        $(".header-bottom__nav, .header-bottom__right").fadeOut();
        $(".close").fadeOut();
        $(".burger").fadeIn();
    }

    $(window).resize(function() {
        //update stuff
      
        if ($(window).width() > 950) {
        
        $(".header-bottom__nav, .header-bottom__right").fadeIn();
        $(".close").fadeOut();
        $(".burger").fadeOut();
        }  
          
        if ($(window).width() < 950) {
        $(".header-bottom__nav, .header-bottom__right").fadeOut();
        $(".close").fadeOut();
        $(".burger").fadeIn();
        }  
      });
      
      $(".burger").click(function(){
        $(".header-bottom__nav, .header-bottom__right").fadeIn();
        $(".close").fadeIn();
        $(".burger").fadeOut();
      });
    
      $(".close").click(function(){
        $(".header-bottom__nav, .header-bottom__right").fadeOut();
        $(".close").fadeOut();
        $(".burger").fadeIn();
      });
    });
// Начинать писать отсюда!!!!