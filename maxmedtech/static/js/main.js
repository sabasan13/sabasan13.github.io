;
// Начинать писать отсюда!!!!



$(document).ready(function () {
  var swiper = new Swiper('.header-container', {
    cssMode: true,
    navigation: {
      nextEl: '.header-action-next',
      prevEl: '.header-action-prev',
    },
    pagination: {
      el: '.header-action .swiper-pagination',
      clickable: true 
    },
  });
  var swiper1 = new Swiper('.offer-items .swiper-container', {
    cssMode: true,
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: '.offer-action-next',
      prevEl: '.offer-action-prev',
    },
    breakpoints: {
        991: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        580: {
            slidesPerView: 1,
            spaceBetween: 20,
          }
    }
  });

  var swiper2 = new Swiper('.produce .swiper-container', {
    cssMode: true,
    loop: true,
    slidesPerView: 6,
    spaceBetween: 30,
    navigation: {
      nextEl: '.produce-action-next',
      prevEl: '.produce-action-prev',
    },
    breakpoints: {
        991: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        580: {
            slidesPerView: 2,
            spaceBetween: 20,
          }

    }
  });

  var swiper3 = new Swiper('.card-page-content-pagination .swiper-container', {
    cssMode: true,

    slidesPerView: 4,
    spaceBetween: 14,
    navigation: {
      nextEl: '.card-page-content-next',
      prevEl: '.card-page-content-prev',
    },
    breakpoints: {
        400: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
    }
  });

  var swiper4 = new Swiper('.card-page-content-gallery__img .swiper-container', {
    cssMode: true,
    slidesPerView: 1,

    thumbs: {
      swiper: swiper3
    }
  });





$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});




$(document).mouseup(function (e){
    var div1 = $(".popup-container"); 
    // тут указываем ID элемента
    if (!div1.is(e.target) // если клик был не по нашему блоку
        && div1.has(e.target).length === 0) { // и не по его дочерним элементам
          $('.popup').fadeOut(); 
      // скрываем его
    }
  });

  $('.card-page-content-pagination a').click(function(e){
    e.preventDefault();
    $('.card-page-content-gallery__img img').attr("src", $(this).attr("href"));

  })

  $('.header-container__btn, .header-top-btn').click(function(){
    $('.popup-callback').fadeIn();
  });

  $('.popup-cancel').click(function(){
    $('.popup').fadeOut();
  });



  $('.header-mobile-burger').click(function(){
      if($('.header-mobile .header-bottom').hasClass('active')) {
        $('.header-mobile .header-bottom').slideUp();
        $('.header-mobile .header-bottom').removeClass('active');
      }
      else {
        $('.header-mobile-menu-1').slideUp();
        $('.header-mobile-menu-1').removeClass('active');
        $('.header-mobile .header-bottom').slideDown();
        $('.header-mobile .header-bottom').addClass('active');
      }
    
  });

  $('.header-mobile-phone').click(function(){
    if($('.header-mobile-menu-1').hasClass('active')) {
      $('.header-mobile-menu-1').slideUp();
      $('.header-mobile-menu-1').removeClass('active');
    }
    else {
        $('.header-mobile .header-bottom').slideUp();
        $('.header-mobile .header-bottom').removeClass('active');
      $('.header-mobile-menu-1').slideDown();
      $('.header-mobile-menu-1').addClass('active');
    }
  
});

$('.header-mobile .dropdown').click(function(){
    if($('.header-mobile .dropdown').hasClass('active')) {
      $('.header-mobile .dropdown > ul').slideUp();
      $('.header-mobile .dropdown').removeClass('active');
    }
    else {
        $('.header-mobile .dropdown > ul').slideDown();
      $('.header-mobile .dropdown').addClass('active');
    }
});   


});