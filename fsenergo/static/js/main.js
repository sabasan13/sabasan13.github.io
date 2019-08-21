;
var swiper = new Swiper('.feed-back-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.feed-back-button-next',
      prevEl: '.feed-back-button-prev',
    },
    breakpoints: {
      750: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 30
      }
    }
  });

var recommended = new Swiper('.recommended-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.recommended-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.recommended-next',
      prevEl: '.recommended-prev',
    },
    breakpoints: {
      600: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });

  var article = new Swiper('.articles-container', {
    slidesPerView: 6,
    spaceBetween: 30,
    pagination: {
      el: '.articles-pagination',
      clickable: true,
    },
    breakpoints: {
      480: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1060: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1250: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      1650: {
        slidesPerView: 5,
        spaceBetween: 30
      }
    }
  });

  var product = new Swiper('.product-gallery-thumbnail-container', {
    direction: 'vertical',
    slidesPerView: 3,
    navigation: {
      nextEl: '.product__down-arrow',
      prevEl: '.product__top-arrow',
    },
    breakpoints: {
      620: {
        slidesPerView: 3,
        spaceBetween: 2
      }
    }
  });

  var similarly = new Swiper('.similarly-container', {
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.similarly-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '.similarly-prev',
      nextEl: '.similarly-next',
    },
    breakpoints: {
      600: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1060: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1250: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      1650: {
        slidesPerView: 5,
        spaceBetween: 30
      }
    }
  });
  var similar = new Swiper('.similar-container', {
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.similar-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '.similar-prev',
      nextEl: '.similar-next',
    },
    breakpoints: {
      600: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1060: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1250: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      1650: {
        slidesPerView: 5,
        spaceBetween: 30
      }
    }
  });
  

  $(document).ready(function () {


    if ($(window).width() < 1000) {
      $(".close-1").fadeOut();
      $(".burger").fadeIn();
  }

  $(window).resize(function() {
      //update stuff
    
      if ($(window).width() > 1000) {
      
      $(".header-nav").fadeIn();
      $(".close-1").fadeOut();
      $(".burger").fadeOut();
      }  
        
      if ($(window).width() < 1000) {
      $(".header-nav").fadeOut();
      $(".close-1").fadeOut();
      $(".burger").fadeIn();
      }  
    });
    
    $(".burger").click(function(){
      $(".header-nav").fadeIn();
      $(".close-1").fadeIn();
      $(".burger").fadeOut();
    });
  
    $(".close-1").click(function(){
      $(".header-nav").fadeOut();
      $(".close-1").fadeOut();
      $(".burger").fadeIn();
    });


    $('.product-gallery-thumbnail-container a').click(function(e){
      e.preventDefault();
      $('.product-gallery__img img').attr("src", $(this).attr("href"));
    })



    $('.product-gallery-thumbnail-container a').click(function(){
      $('.product-gallery-thumbnail-container a').removeClass('active');
        $(this).addClass('active');
    });


    $('.project-gallery-thumbnail a').click(function(e){
      e.preventDefault();
      $('.project-gallery__img img').attr("src", $(this).attr("href"));
    })



    $('.main-nav__link').click(function(){
      $('.main-nav__link').removeClass('active');
        $(this).addClass('active');
    });

    $(document).mouseup(function (e){
    var div1 = $(".dropdown"); 
    // тут указываем ID элемента
    if (!div1.is(e.target) // если клик был не по нашему блоку
        && div1.has(e.target).length === 0) { // и не по его дочерним элементам
          $('.main-nav__link').removeClass("active"); 
      // скрываем его
    }
  });



  $('.search').click(function(){
    $('.header .search-form, .header__close').fadeIn();
    $('.header-nav, .header-contact__title, .header__contact,.search').fadeOut();
  })
  $('.header__close').click(function(){
    $('.header .search-form, .header__close').fadeOut();
    $('.header-nav, .header-contact__title, .header__contact,.search').fadeIn();
  })




  $('.button').click(function(){
    $('.popup').fadeIn();
  });
  $('.popup-close').click(function(){
    $('.popup').fadeOut();
  });

  $('.select-filter-first').click(function(){

    $(".select-filter-first").toggleClass("active");
    $(".filter-first").toggleClass("active");
  });

  $('.select-filter-second').click(function(){

    $(".select-filter-second").toggleClass("active");
    $(".filter-second").toggleClass("active");
  });


  });

// Начинать писать отсюда!!!!