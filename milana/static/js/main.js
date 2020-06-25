
// Начинать писать отсюда!!!!
$(document).ready(function(){

    var banner = new Swiper('.banner-container .swiper-container', {
        slidesPerView:  1,
        loop: true,
        spaceBetween: 0,
        navigation: {
            nextEl: '.banner-next',
            prevEl: '.banner-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        }
        
    });
    var catalogSale = new Swiper('.catalog-sale-container .swiper-container', {
        slidesPerView:  4,
        loop: true,
        spaceBetween: 30,
        navigation: {
            nextEl: '.catalog-sale .next',
            prevEl: '.catalog-sale .prev',
        },
        breakpoints: {
            991: {
                slidesPerView: 3,
                spaceBetween: 30
              },
            767: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            500: {
                slidesPerView: 1,
                spaceBetween: 30
            },
        }
    });
    var catalogNews = new Swiper('.catalog-news-container .swiper-container', {
        slidesPerView:  4,
        loop: true,
        spaceBetween: 30,
        navigation: {
            nextEl: '.catalog-news .next',
            prevEl: '.catalog-news .prev',
        },
        breakpoints: {
            991: {
                slidesPerView: 3,
                spaceBetween: 30
              },
            767: {
                slidesPerView: 2,
                spaceBetween: 30
              },
            500: {
                slidesPerView: 1,
                spaceBetween: 30
            },
        }
    });
    $('.add').click(function () {
        if ($(this).prev().val() < 100) {
          $(this).prev().val(+$(this).prev().val() + 1);
        }
    });
    $('.sub').click(function () {
        if ($(this).next().val() > 1) {
          if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
        }
    });
    $('.popup-title .login').click(function () {
        $('.popup-block-reg').hide();
        $('.popup-block-login').fadeIn();
        $('.popup-title .login').addClass('active');
        $('.popup-title .reg').removeClass('active');
    });
    $('.popup-title .reg').click(function () {
        $('.popup-block-login').hide();
        $('.popup-block-reg').fadeIn();
        $('.popup-title .reg').addClass('active');
        $('.popup-title .login').removeClass('active');
    });
    $('.popup-close').click(function () {
        $('.popup').fadeOut();
    });
    $('.feedback-add').click(function () {
        $('.popup-feedback').fadeIn();
    });
    $('.header-top-signup__login').click(function () {
        $('.popup-log').fadeIn();
        $('.popup-block-reg').hide();
        $('.popup-block-login').fadeIn();
        $('.popup-title .login').addClass('active');
        $('.popup-title .reg').removeClass('active');
    });
    $('.header-top-signup__reg').click(function () {
        $('.popup-log').fadeIn();
        $('.popup-block-login').hide();
        $('.popup-block-reg').fadeIn();
        $('.popup-title .reg').addClass('active');
        $('.popup-title .login').removeClass('active');
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
    $('.burger').click(function () {
        if($('.header').hasClass('active')) {
            $('.header').removeClass('active');
            $('.header-bottom').slideUp(300);
        }
        else {
            $('.header').addClass('active');
            $('.header-bottom').slideDown(300);
        }
    });   
    
});
$(function() {
    $( "#slider-range" ).slider({
    range: true,
    min: 1,
    max: 50000,
    values: [ 1, 500000],
    slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        $("#min").html(ui.values[ 0 ] + " ₽");
        $("#max").html(ui.values[ 1 ] + " ₽");
    }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    $("#min").html($( "#slider-range" ).slider( "values", 0 ) + " ₽");
    $("#max").html($( "#slider-range" ).slider( "values", 1 ) + " ₽");
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

(function() {
    $(function() {
      var toggle;
      return toggle = new Toggle('.toggle');
    });
  
    this.Toggle = (function() {
      Toggle.prototype.el = null;
  
      Toggle.prototype.tabs = null;
  
      Toggle.prototype.panels = null;
  
      function Toggle(toggleClass) {
        this.el = $(toggleClass);
        this.tabs = this.el.find(".tab");
        this.panels = this.el.find(".panel");
        this.bind();
      }
  
      Toggle.prototype.show = function(index) {
        var activePanel, activeTab;
        this.tabs.removeClass('active');
        activeTab = this.tabs.get(index);
        $(activeTab).addClass('active');
        this.panels.hide();
        activePanel = this.panels.get(index);
        return $(activePanel).show();
      };
  
      Toggle.prototype.bind = function() {
        var _this = this;
        return this.tabs.unbind('click').bind('click', function(e) {
          return _this.show($(e.currentTarget).index());
        });
      };
  
      return Toggle;
  
    })();
  
  }).call(this);

  var labels = $("#ranks label");
  var labelsTitle = $("#ranks .rateTitle");
  
  labels.hover(function(){
    $(this).css("color", "gold")
      .prevUntil().css("color", "gold");
      labelsTitle.html($(this).attr('data-rate'));
    
  }, function(){
      $(this).css("color", "inherit").prevUntil().css("color", "inherit");
      var checkedNum = $("#ranks label.checked").length;
      if (checkedNum === 1){
        labelsTitle.html( $("#ranks label.checked").attr("data-rate") );
      }else{
        labelsTitle.html("");
      }
      
  });
  
  
  labels.click(function(){
    var labelSelected = $(this);
    // reset label class and input checkbox
    labels.removeClass("rankChecked checked")
      .find("input[type=checkbox]")
      .removeAttr("checked");
    
    // add checked when label clicked
    labelSelected.find("input[type=checkbox]").attr("checked","checked")
      .parent().addClass("checked");
    
    // add rankChecked Class
    labelSelected.addClass("rankChecked")
      .removeAttr("style")
      .prevUntil()
      .removeAttr("style").addClass("rankChecked")
       
  });


var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.gallery-top-next',
      prevEl: '.gallery-top-prev',
    },
           loop: true,
          loopedSlides: 5
  });
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 5,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
          loopedSlides: 5
  });
  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;


  