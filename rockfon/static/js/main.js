
jQuery(document).ready(function( $ ) {

    $(window).scroll(function(){
        var sticky = $('.header'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 1000) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

    var projects = new Swiper('.projects-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
        nextEl: '.projects-navigation-next',
        prevEl: '.projects-navigation-prev',
        },
        loop: false,
        breakpoints: { 
            991: {
                slidesPerView: 3,
              },
            767: {
                slidesPerView: 2,
              },
              580: {
                slidesPerView: 1,
              }
            }
    });
    var certificate = new Swiper('.certificate-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
        nextEl: '.certificate-navigation-next',
        prevEl: '.certificate-navigation-prev',
        },
        loop: false,
        breakpoints: { 
            991: {
                slidesPerView: 3,
              },
              767: {
                slidesPerView: 2,
              },
              580: {
                slidesPerView: 1,
              }
        }
    });

    $('.material-left-items div').click(function(){
        var material = $(this).attr('data-tab');
        var materialItem = $('.material-right-item[data-item='+ material+ ']');
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            materialItem.removeClass('active');
            materialItem.attr("data-fancybox", "");
        } else {
            $(this).addClass('active');
            materialItem.addClass('active');
            materialItem.attr("data-fancybox", "materials");
        }

    });
    $('.material-left-items div:first').click();

    $('.catalog-content-item-details').click(function(){
        const table = $(this).siblings('.catalog-content-item-table');
        if($(this).hasClass('active')) {
            $(this).removeClass('active')
            table.slideUp(300);
        } else {
            $(this).addClass('active');
            table.slideDown(300);
        }
    });


    
    $('.catalog-tab').click(function(){
        var catalogTab = $('.catalog-tab');
        var catalogDataTab = $(this).attr('data-tab');
        var catalogNav = $('.catalog-content[data-item='+ catalogDataTab + '] .catalog-content-nav');
        if($(this).hasClass('active')) {

        } else {
            catalogTab.removeClass('active')
            $('.catalog-content-nav').hide()
            $('.catalog-content-nav-item').removeClass('active')
            $('.catalog-content-items').removeClass('active')
            $(this).addClass('active');
            catalogNav.show();
            catalogNav.addClass('active');
            catalogNav.children('.catalog-content-nav-item:first').click();
        }
    });
    
    $('.catalog-content-nav-item').click(function(){
        var catalogDataTab = $(this).attr('data-tab');
        var catalogItem =  $('.catalog-content-items[data-item='+ catalogDataTab + ']');
        if($(this).hasClass('active')) {

        } else {
            $('.catalog-content-nav-item').removeClass('active')
            $('.catalog-content-items').removeClass('active')
            $(this).addClass('active');
            
            catalogItem.addClass('active')
        }
        $(".catalog-content-items.active .catalog-content-item").slice(0, 3).addClass('active');
        if($(".catalog-content-items.active .catalog-content-item").length < 3) {
            $('.catalog-content-items.active .catalog-content-more').hide();
        }
    });
    $('.catalog-tabs .catalog-tab:first').click();


    $(".catalog-content-items.active .catalog-content-item").slice(0, 3).addClass('active');
    if($(".catalog-content-items.active .catalog-content-item").length < 3) {
        $('.catalog-content-items.active .catalog-content-more').hide();
    }
    
    $(".catalog-content-more").on('click', function(e) {
 
      $(this).siblings(".catalog-content-item:hidden").slice(0, 3).addClass('active');;
      if ($(this).siblings(".catalog-content-item:hidden").length == 0) {
        $(this).siblings(".catalog-content-less").fadeIn('slow');
        $(this).hide();
      }
    });
  
    $(".catalog-content-less").on('click', function(e) {

      $(this).siblings('.catalog-content-item:not(:lt(3))').removeClass('active');
      $(this).siblings(".catalog-content-more").fadeIn('slow');
      $(this).hide();
    });


    $('.form-body__input input').change(function() {
        if($(this).val().length === 0) {
          $(this).siblings('.reset').fadeOut();
        }
        else {
          $(this).siblings('.reset').fadeIn();
        }
      });
      $('.reset').click(function(e) { 
        $(this).siblings('input').val("");
        $(this).fadeOut();
      });

    $('.catalog-content-item__btn').click(function(){
        $('.popup').fadeIn(300);
        var productName = $(this).attr('data-name');
        $('.popup .form-title span').text(productName)
    });
    $('.close').click(function(){
        $('.popup').fadeOut(300);
    });
    $('.phone').inputmask({"mask": "+7(999)999-99-99"});
    $('.phone').change(function(){
        if ($(this).inputmask("isComplete")){
            $(this).removeClass('error');
            $(this).parent().parent().siblings('.error-message').fadeOut();
        } else {
            $(this).addClass('error');
            $(this).parent().parent().siblings('.error-message').fadeIn();
        }
    });
    
    $(window).scroll(function(){
        if ($('.achievements.active').isOnScreen()) {
            $('.achievements-item__number span').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            $('.achievements').removeClass('active')

        } else {

        }
    });
    $.fn.isOnScreen = function(){

        var win = $(window);
    
        var viewport = {
            top : win.scrollTop(),
            left : win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();
    
        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();
    
        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    
    };

});