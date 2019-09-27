var swiper = new Swiper('.sklad-container', {
    
    effect: 'coverflow',
    loop: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 130,
        depth: 350,
        modifier: 1,
        slideShadows : false,
      },
      navigation: {
        nextEl: '.sklad-next',
        prevEl: '.sklad-prev',
      },
  });


  var swiperFeedBack = new Swiper('.feed-back-container', {
    slidesPerView: '3',
    loop: true,
    
    navigation: {
      nextEl: '.feed-back-next',
      prevEl: '.feed-back-prev',
    },
    breakpoints: {
        1199: {
            centeredSlides: true,
          slidesPerView: 2.5,
          spaceBetween: 50,
        },
        767: {
            centeredSlides: true,
          slidesPerView: 1.8,
          spaceBetween: 50,
        },
        500: {
            centeredSlides: true,
          slidesPerView: 1,
          spaceBetween: 50,
        },
    }
  });


  $("#pic").click(function() {
      $('#pic').prop('disabled', false);
    $('#pic').change(function() {
        var filename = $('#pic').val();
        $('#pic-btn span').html(filename);
    });
});

$(".form-close").click(function() {
    $('.popup-feedback, .popup-price, .popup-call-back, .popup-politic, .popup-succes').fadeOut();
});
$(".header-middle-contact__btn").click(function() {
    $('.popup-call-back').fadeIn();
});

$(".product__btn").click(function() {
    $('.popup-price').fadeIn();
});
$(".politic-btn").click(function() {
  $('.popup-politic').fadeIn();
});


$(".feed-back__btn").click(function() {
    $('.popup-feedback').fadeIn();
});

$(".certification-items").magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery:{
    enabled: true
  }
});


$(document).mouseup(function (e){
  var div1 = $(".form"); 
  // тут указываем ID элемента
  if (!div1.is(e.target) // если клик был не по нашему блоку
      && div1.has(e.target).length === 0) { // и не по его дочерним элементам
        $('.popup').fadeOut();
    // скрываем его
  }
});
$(".menu").click(function() {
  $('.header-top').addClass("active");
});
$(".close").click(function() {
  $('.header-top').removeClass("active");
});


$('.email').blur(function() {
  var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,6}\.)?[a-z]{2,6}$/i;
  if(($('.email').val() != 0)&&(!pattern.test($('.email').val()))) {
    alert('Вы ввели некорректный e-mail');
    $('.email').focus();
  }
});


$(window).scroll(function(){
  if ($(window).scrollTop() >= 900) {
      $('header').addClass('header-fixed');
     
  }
  else {
      $('header').removeClass('header-fixed');
  
  }
});
