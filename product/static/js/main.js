
var bLazy = new Blazy({
  offset: 100,
  loadInvisible: true,

});
$(document).ready(function(){


    var galleryTop = new Swiper('.gallery-top .swiper-container', {
        navigation: {
          nextEl: '.portfolio-next',
          prevEl: '.portfolio-prev',
        },
        loop: true,

      });


      $('.portfolio-left__img').click(function(){
       var slideIndex = $(this).attr('data-slide');
       galleryTop.slideTo(slideIndex, 300);
      });

(function() {
 
    window.inputNumber = function(el) {
  
      var min = el.attr('min') || false;
      var max = el.attr('max') || false;
  
      var els = {};
  
      els.dec = el.prev();
      els.inc = el.next();
  
      el.each(function() {
        init($(this));
      });
  
      function init(el) {
  
        els.dec.on('click', decrement);
        els.inc.on('click', increment);
  
        function decrement() {
          var value = el[0].value;
          value--;
          if(!min || value >= min) {
            el[0].value = value;
          }
        }
  
        function increment() {
          var value = el[0].value;
          value++;
          if(!max || value <= max) {
            el[0].value = value++;
          }
        }
      }
    }
  })();
  
  inputNumber($('.input-number'));


  $("#quiz-content1 .quiz-content-navigation-next").click(function(){
    $('#quiz-content1').hide();
    $('#quiz-content2').show();
  });

  $("#quiz-content2 .quiz-content-navigation-next").click(function(){
    $('#quiz-content2').hide();
    $('#quiz-content3').show();
  });
  $("#quiz-content2 .quiz-content-navigation-prev").click(function(){
    $('#quiz-content2').hide();
    $('#quiz-content1').show();
  });

  $("#quiz-content3 .quiz-content-navigation-next").click(function(){
    $('#quiz-content3').hide();
    $('#quiz-content4').show();
  });
  $("#quiz-content3 .quiz-content-navigation-prev").click(function(){
    $('#quiz-content3').hide();
    $('#quiz-content2').show();
  });
  $("#quiz-content4 .quiz-content-navigation-next").click(function(){
    $('#quiz-content4').hide();
    $('#quiz-content5').show();
  });
  $("#quiz-content4 .quiz-content-navigation-prev").click(function(){
    $('#quiz-content4').hide();
    $('#quiz-content3').show();
  });



  $('.tabs-stage .catalog-content').hide();
  $('.tabs-stage .catalog-content:first').show();

  // Change tab class and display content
  $('.tabs-nav a').on('click', function(event){
    event.preventDefault();
    $('.tabs-nav a').removeClass('active');
    $(this).addClass('active');
    $('.tabs-stage .catalog-content').hide();
    $($(this).attr('href')).show();
  });



  $('.header-mobile-left').click(function(){
    

    if($('.header-mobile').hasClass('active')) {
      $('.header-mobile').removeClass('active');
      $('.header-mobile nav').slideUp(300);
    }
    else {
      $('.header-mobile').addClass('active');
      $('.header-mobile nav').slideDown(300);
    }
  });


  $('.catalog-tabs').click(function(){

    if($('.catalog-tabs').hasClass('active')) {
      $('.catalog-tabs').removeClass('active');
    }
    else {
      $('.catalog-tabs').addClass('active');
    }

  });

  $('.header-mobile__btn').click(function(){
    $('.popup-call').fadeIn();
  });
  $('.popup .close').click(function(){
    $('.popup').fadeOut();
  });
  $('.catalog-content-item__btn').click(function(){
    $('.popup-catalog').fadeIn();
  });
  
 
  $('.phone').inputmask({"mask": "+375(99)999-99-99"});

 
	
});






