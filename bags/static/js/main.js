;

var swiper = new Swiper('.header-container', {
  speed: 1500,
  loop: true,
  effect: 'fade',
    navigation: {
      nextEl: '.header-next',
      prevEl: '.header-prev',
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  var swiperf = new Swiper('.feedback-container', {
    speed: 1500,
    fadeEffect: {
      crossFade: true
    }, 
    effect: 'fade',
     loop: true,
    navigation: {
      nextEl: '.feedback-next',
      prevEl: '.feedback-prev',
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  $(document).ready(function () {


    $(window).scroll(function(){
      if ($(this).scrollTop()>1000) {
        $('.header-top').addClass('active');
      }
      else{
        $('.header-top').removeClass('active');
      }
  });


  $('.news-item-like').click(function(){

    $(this).toggleClass("active");
  });

  if ($(window).width() < 1187) {
    $(".close-1").fadeOut();
    $(".burger").fadeIn();
    $('.header-nav').removeClass('active');
}

$(window).resize(function() {
    //update stuff
  
    if ($(window).width() > 1187) {
    
    $("nav, .header-action").fadeIn();
    $(".close-1").fadeOut();
    $(".burger").fadeOut();
    $('.header-nav').removeClass('active');
    }  
      
    if ($(window).width() < 1187) {
    $("nav, .header-action").fadeOut();
    $(".close-1").fadeOut();
    $(".burger").fadeIn();
    $('.header-nav').removeClass('active');
    }  
  });
  
  $(".burger").click(function(){
    $("nav, .header-action").fadeIn();
    $(".close-1").fadeIn();
    $(".burger").fadeOut();
    $('.header-nav').addClass('active');
  });

  $(".close-1").click(function(){
    $("nav, .header-action").fadeOut();
    $(".close-1").fadeOut();
    $(".burger").fadeIn();
    $('.header-nav').removeClass('active');
  });

  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});

});
// Начинать писать отсюда!!!!