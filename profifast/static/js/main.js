
$(document).ready(function(){

$(window).scroll(function(){
  if ($(this).scrollTop()>40) {
    $('.scroll-up').fadeIn();
  }
  else{
    $('.scroll-up').fadeOut();
  }
});

$("body").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
});


$(".content-group__img-holder").click(function(){
  $(".lightbox").show(100);
  document.body.style.overflow = "hidden";
});

$("#img1").click(function(){
  $(".lightbox").hide(100);
  document.body.style.overflow = "auto";
});


var slider = $('#latest-posts-slider').lightSlider({
                gallery:true,
                item:1,
                pager:false,
                loop:false,
                enableDrag:false,
                speed: 500,
                onSliderLoad: function() {
                    $('#latest-posts-slider').removeClass('cS-hidden');
                }  
            });

$('.latest-posts-action__arrow').click(function(){

       slider.goToNextSlide();
});


$('.latest-posts-action__all').click(function(){
  slider.destroy(900); 
});


var slider1 = $('#popular-posts-slider').lightSlider({
                gallery:false,
                item:1,
                pager:true,
                loop:true,
                freeMove:false,
                enableDrag:false,
                speed: 500,
                pause: 5000,
                auto:true,
                onSliderLoad: function() {
                    $('#popular-posts-slider').removeClass('cS-hidden');
                }  
            });



$("#similarPost").each(function () {
 var sliderCount = $(this).find('li').length;
  if (sliderCount > 2) {
  var slider2 = $('#similarPost').lightSlider();
  if ($(window).width() > 1010) {
  slider2 = $('#similarPost').lightSlider({
                gallery:true,
                item:3,
                pager:false,
                loop:false,
                freeMove:false,
                enableDrag:false,
                speed: 500,
                responsive : [
            {
                breakpoint:1010,
                settings: {
                    item:2.5,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:560,
                settings: {
                    item:2,
                    slideMove:1
                  }
            },
            {
                breakpoint:450,
                settings: {
                    item:1.5,
                    slideMove:1
                  }
            }
        ] 
            });
  }





  $('.similar-posts__btn-left').click(function(){

       slider2.goToPrevSlide();
    });
  $('.similar-posts__btn-right').click(function(){

       slider2.goToNextSlide();
    });

    
  }
});



   

$(window).resize(function() {
  //update stuff

  if ($(window).width() > 1010) {
  
  $("header nav.nav").fadeIn();
  }  
    
  if ($(window).width() < 1010) {
  $("header nav.nav").hide();
  }  
});




$(document).mouseup(function (e){
if ($(window).width() < 1010) {
 // событие клика по веб-документу
    var div = $("#nav");// тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
      div.fadeOut(); // скрываем его
    }
}



    

// событие клика по веб-документу

    var div1 = $(".nav-expanded-item"); 
    // тут указываем ID элемента
     if (!div1.is(e.target) // если клик был не по нашему блоку
        && div1.has(e.target).length === 0) { // и не по его дочерним элементам
      div1.removeClass("active"); 
      // скрываем его
    }
 
$('.nav-expanded-item').click(function(){
       $(".nav-expanded-item").toggleClass("active");
    });
$('.nav-expanded-item').click(function(){
       $(".nav-expanded-item").addClass("active");
    });
$('.nav-expanded-item.active').click(function(){
       $(".nav-expanded-item.active").removeClass("active");
    });




  });

$('.pager1').click(function(){
  $('.popular-posts__pagers .popular-posts__pagers-item').removeClass('active');
    $(this).addClass('active');
       slider1.goToSlide(1);
    });
$('.pager2').click(function(){
  $('.popular-posts__pagers .popular-posts__pagers-item').removeClass('active');
    $(this).addClass('active');
       slider1.goToSlide(2);
    });
$('.pager3').click(function(){
  $('.popular-posts__pagers .popular-posts__pagers-item').removeClass('active');
    $(this).addClass('active');
       slider1.goToSlide(3);
    });
//enableDrag:false,

$('.popular-tags-block__name').click(function(){
  $(this).toggleClass('active');
    });

$("#comment-1").click(function(){
  $("#addCommentForm-1").show(500);
 $(".comment-form-base").hide(500);

});
$("#button-1").click(function(){
  $("#addCommentForm-1").hide(500);
  $(".comment-form-base").show(500);
});
$("#comment-2").click(function(){
  $("#addCommentForm-2").show(500);
 $(".comment-form-base").hide(500);

});
$("#button-2").click(function(){
  $("#addCommentForm-2").hide(500);
  $(".comment-form-base").show(500);
})
$("#comment-2-1").click(function(){
  $("#addCommentForm-2-1").show(500);
 $(".comment-form-base").hide(500);

});
$("#button-2-1").click(function(){
  $("#addCommentForm-2-1").hide(500);
  $(".comment-form-base").show(500);
})
$("#comment-3").click(function(){
  $("#addCommentForm-3").show(500);
 $(".comment-form-base").hide(500);

});
$("#button-3").click(function(){
  $("#addCommentForm-3").hide(500);
  $(".comment-form-base").show(500);
})
$(".show-menu-btn").click(function(){
  $("header nav.nav").fadeIn();
});

$(".hide-menu-btn").click(function(){
  $("header nav.nav").fadeOut();
});

 });
