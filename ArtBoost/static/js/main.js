;
// Начинать писать отсюда!!!!
var swiperH = new Swiper('.swiper-container-h', {
    spaceBetween: 50,
    slidesPerView: 1,
    simulateTouch: false,
  });
  var swiperA = new Swiper('.swiper-container-a', {
    spaceBetween: 50,
    slidesPerView: 1,
    simulateTouch: false,
  });
  var swiperV = new Swiper('.swiper-container-v', {
    direction: 'vertical',
    simulateTouch: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  });

  var swiperf = new Swiper('.swiper-container-f', {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    navigation: {
        prevEl: '.feed-back-prev',
        nextEl: '.feed-back-next',
      },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1000: {
        slidesPerView: 1.2,
        spaceBetween: 10
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });




  
$(document).ready(function () {

    $('ul.nav li').click(function(){
        $('ul.nav li').removeClass('active');
        $(this).addClass('active');
    });



    $('.pick-list i').click(function(){
        $(".pick-list").toggleClass("active");
        $(".pick-list-border").toggleClass("active");
    });

    $('.product-list-item').click(function(){
        var productNumber = $('.product-list-item').index(this);
        swiperV.slideTo(productNumber, 0);
    });

    $('.pick-list-items .pick-list-item').click(function(){
        var pickNumber = $('.pick-list-item').index(this);
        swiperA.slideTo(pickNumber, 0);
        $(".pick-list").toggleClass("active");
        $(".pick-list-border").toggleClass("active");
    });


    $('i.fas.fa-caret-square-down').click(function(){
        $(this).toggleClass("active");
        $(this).closest('.faq-list-li').toggleClass("active");
    });


    $(window).scroll(function(){
        if ($(this).scrollTop()>1000) {
          $('.header-top').addClass('active');
        }
        else{
          $('.header-top').removeClass('active');
        }
    });

    $(".play").on('click',function(){
        var vi = $("#iframe");
        vi.attr("src", vi.data("autoplay-src") );
        $('.video-item').addClass('hidden');
        $('.play').fadeOut();
    });

  
    if ($(window).width() < 1080) {
      $(".close-1").fadeOut();
      $(".burger").fadeIn();


      $(document).mouseup(function (e){
        var div1 = $(".header-top__nav"); 
        // тут указываем ID элемента
        if (!div1.is(e.target) // если клик был не по нашему блоку
            && div1.has(e.target).length === 0) { // и не по его дочерним элементам
          // скрываем его
          $(".header-top__nav").fadeOut();
          $(".close-1").fadeOut();
          $(".burger").fadeIn();
        }
      });
      $(".header-top__nav ul.nav a").click(function(){
        $(".header-top__nav").fadeOut();
        $(".close-1").fadeOut();
        $(".burger").fadeIn();
      });

    }

    $(window).resize(function() {
      //update stuff
    
    if ($(window).width() > 1080) {
      
      $(".header-top__nav").fadeIn();
      $(".close-1").fadeOut();
      $(".burger").fadeOut();
    }  
        
    if ($(window).width() < 1080) {
      $(".header-top__nav").fadeOut();
      $(".close-1").fadeOut();
      $(".burger").fadeIn();
      }  
    });
    
    $(".burger").click(function(){
      $(".header-top__nav").fadeIn();
      $(".close-1").fadeIn();
      $(".burger").fadeOut();
    });
  
    $(".close-1").click(function(){
      $(".header-top__nav").fadeOut();
      $(".close-1").fadeOut();
      $(".burger").fadeIn();
    });
   

    
});
