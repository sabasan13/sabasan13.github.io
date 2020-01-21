$( document ).ready(function() {


  
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


$(".btn-filter").click(function() {
    $(".card-filter").slideDown(300);
});
$(".card-filter__close").click(function() {
    $(".card-filter").slideUp(300);
});


$(".widget").click(function() {
  $(".widget").removeClass("active");
    $(this).addClass("active");
});

 $(document).mouseup(function (e){
    var div1 = $(".widget"); 
    // тут указываем ID элемента
    if (!div1.is(e.target) // если клик был не по нашему блоку
        && div1.has(e.target).length === 0) { // и не по его дочерним элементам
          $('.widget').removeClass("active"); 
      // скрываем его
    }
  });

$(".burger").click(function() {
    $(".header").toggleClass("active");
});


});
var swiper = new Swiper('.banner .swiper-container', {
    cssMode: true,
    autoplay: 
    {
      delay: 3000,
    },
    loop: true,
    navigation: {
      nextEl: '.banner-nav-next',
      prevEl: '.banner-nav-prev',
    },
    pagination: {
      el: '.banner .swiper-pagination',
      clickable: true,
    },

  });
  for (let i = 0; i < 18; i++) { // выведет 0, затем 1, затем 2
    var card = new Swiper('.card-item:nth-child('+i+') .swiper-container', {
        cssMode: true,
        navigation: {
          nextEl: '.card-item:nth-child('+i+') .card-item-nav-next',
          prevEl: '.card-item:nth-child('+i+') .card-item-nav-prev',
        },
        pagination: {
          el: '.card-item:nth-child('+i+') .swiper-pagination',
          clickable: true,
        },

      });

  }
  var gallery = new Swiper('.card-info .swiper-container', {
    cssMode: true,
    navigation: {
      nextEl: '.card-info-gallery-next',
      prevEl: '.card-info-gallery-prev',
    },
    pagination: {
      el: '.card-info .swiper-pagination',
      clickable: true,
    },

  });
  document.querySelector('.card-info-pagination-item-1').addEventListener('click', function (e) {
    e.preventDefault();
    gallery.slideTo(1, 0);
  });
  document.querySelector('.card-info-pagination-item-2').addEventListener('click', function (e) {
    e.preventDefault();
    gallery.slideTo(2, 0);
  });
  document.querySelector('.card-info-pagination-item-3').addEventListener('click', function (e) {
    e.preventDefault();
    gallery.slideTo(3, 0);
  });