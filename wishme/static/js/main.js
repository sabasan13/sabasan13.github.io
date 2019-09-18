;
// Начинать писать отсюда!!!!
var swiper_s = new Swiper('.swiper-container-s', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
  });

  $('.product-thumb-container a').click(function(e){
      e.preventDefault();
      $('.product__img img').attr("src", $(this).attr("href"));
    })

    var product = new Swiper('.product-thumb-container', {
        direction: 'vertical',
        slidesPerView: 4,
        navigation: {
          nextEl: '.product-thumb__next',
          prevEl: '.product-thumb__prev',
        }
        
      });



      $(".certificate-items").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
          enabled: true
        }
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

    $('.menu').click(function () {
        $('.header').addClass("active");
    });
    $('.close').click(function () {
        $('.header').removeClass("active");
    });

 

    $(window).resize(function() {
            var height = $(".instagram-block").width();
            $(".instagram-block").css("height", height);

    });

    var height = $(".instagram-block").width();
        $(".instagram-block").css("height", height);