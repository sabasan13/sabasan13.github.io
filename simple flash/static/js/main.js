;
// Начинать писать отсюда!!!!

/*
Reference: http://jsfiddle.net/BB3JK/47/
*/

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

var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
  });
  var swiper1 = new Swiper('.swiper-container-1', {
    navigation: {
      nextEl: '.swiper-next-1',
      prevEl: '.swiper-prev-1',
    },
  });
  var swiper2 = new Swiper('.swiper-container-2', {
    navigation: {
      nextEl: '.swiper-next-2',
      prevEl: '.swiper-prev-2',
    },
  });
   $(".gallery").magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery:{
        enabled: true
      }
    });
    $(".rooms-item-info__btn").click(function(){
        $(".calendar-popup").fadeIn();
    });
    $(".popup-close").click(function(){
        $(".calendar-popup, .order-popup, .registration-popup, .add-popup").fadeOut();
    });

    $(".profile__add-model, .profile__add-photograph, .profile__add-stilist").click(function(){
      $(".add-popup").fadeIn();
  });
    $(".approve").click(function(){
        $(".order-popup").fadeIn();
    });
    $(".sign").click(function(){
        $(".registration-popup").fadeIn();
    });
    $(".registration-popup__log").click(function(){
      $(".registration-popup__log, .registration-form-log").addClass("active");
      $(".registration-popup__sign,.registration-form-sign ").removeClass("active");

    });

    $(".registration-popup__sign").click(function(){
      $(".registration-popup__log, .registration-form-log").removeClass("active");
      $(".registration-popup__sign, .registration-form-sign").addClass("active");
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

     

      if ($(window).width() < 1200) {
        $(".close-1").fadeOut();
        $(".burger").fadeIn();
    }
  
    $(window).resize(function() {
        //update stuff
      
        if ($(window).width() > 1200) {
        $(".header-main .header-action").fadeIn();
        $(".close-1").fadeOut();
        $(".burger").fadeOut();
        $(".header-mobile").fadeOut();
        }  
          
        if ($(window).width() < 1200) {
        $(".header-nav").fadeOut();
        $(".close-1").fadeOut();
        $(".burger").fadeIn();


        $(".header-main .header-action").fadeOut();
        $(".close-1").fadeOut();
        $(".burger").fadeIn();
        $(".header-mobile").fadeOut();
        }  
      });
      
      $(".burger").click(function(){
        $(".header-mobile").fadeIn();
        $(".close-1").fadeIn();
        $(".burger").fadeOut();
      });
    
      $(".close-1").click(function(){
        $(".header-mobile").fadeOut();
        $(".close-1").fadeOut();
        $(".burger").fadeIn();
      });

      $('.cart-images__ph a').click(function(e){
        e.preventDefault();
        $('.cart__img img').attr("src", $(this).attr("href"));
      })


      $(".profile__add-btn").click(function(){
        $(".profile__add-btn").toggleClass("active");
      });
      

      $('#file-input').change( function()
      {
        $(".add-popup__file label").html($(this).val());
      });
