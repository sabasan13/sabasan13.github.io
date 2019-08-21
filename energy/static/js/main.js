
$(document).ready(function(){



$(document).mouseup(function (e){
if ($(window).width() < 900) {
 // событие клика по веб-документу
    var div = $(".header-bottom_nav");// тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
      div.fadeOut(); // скрываем его
    }
}
 
 });

 slider2 = $('#house').lightSlider({
                gallery:true,
                item:5,
                pager:false,
                loop:false,
                freeMove:false,
                enableDrag:false,
                speed: 500,
                responsive : [
            {
                breakpoint:1700,
                settings: {
                    item:4,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:1500,
                settings: {
                    item:3,
                    slideMove:1
                  }
            },
            {
                breakpoint:1100,
                settings: {
                    item:2,
                    slideMove:1
                  }
            },
            {
                breakpoint:600,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ] 
            });
$('.house-pagers_prev').click(function(){
  slider2.goToPrevSlide();

 });


$('.house-pagers_next').click(function(){

 slider2.goToNextSlide();
 });


 slider1 = $('#question').lightSlider({
                gallery:true,
                item:1.2,
                pager:false,
                loop:false,
                freeMove:false,
                enableDrag:false,
                speed: 500,
                responsive : [
            {
                breakpoint:1200,
                settings: {
                    item:1,
                    slideMove:1,
                    slideMargin:6,
                  }
            }
        
        ] 
            });






$(window).resize(function() {
  //update stuff

  if ($(window).width() < 900) {
  
$(".header-bottom_nav").fadeOut();
  $('.burger').click(function(){

  $(".header-bottom_nav").fadeIn();
 });
  




  }  
    
  
 if ($(window).width() > 899) {
   $(".header-bottom_nav").fadeIn();

}
slider1.destroy(); 
 slider1 = $('#question').lightSlider({
                gallery:true,
                item:1.2,
                pager:false,
                loop:false,
                freeMove:false,
                enableDrag:false,
                speed: 500,
                responsive : [
            {
                breakpoint:1200,
                settings: {
                    item:1,
                    slideMove:1,
                    slideMargin:6,
                  }
            }
        
        ] 
            });
slider2.destroy(); 
            slider2 = $('#house').lightSlider({
                gallery:true,
                item:5,
                pager:false,
                loop:false,
                freeMove:false,
                enableDrag:false,
                speed: 500,
                responsive : [
            {
                breakpoint:1700,
                settings: {
                    item:4,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:1500,
                settings: {
                    item:3,
                    slideMove:1
                  }
            },
            {
                breakpoint:1100,
                settings: {
                    item:2,
                    slideMove:1
                  }
            },
            {
                breakpoint:600,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ] 
            });
});



if ($(window).width() < 900) {
  

  $('.burger').click(function(){

  $(".header-bottom_nav").fadeIn();
  $(".header-bottom_nav").fadeIn();

 });
  

  }  





 


    

$('.pager-1').click(function(){
  $('.question-pager_item').removeClass('active');
    $(this).addClass('active');
       slider1.goToSlide(0);
    });
$('.pager-2').click(function(){
  $('.question-pager_item').removeClass('active');
    $(this).addClass('active');
       slider1.goToSlide(1);
    });
$('.pager-3').click(function(){
  $('.question-pager_item').removeClass('active');
    $(this).addClass('active');
       slider1.goToSlide(2);
    });
$('.pager-4').click(function(){
  $('.question-pager_item').removeClass('active');
    $(this).addClass('active');
       slider1.goToSlide(3);
        });
$('.pager-5').click(function(){
  $('.question-pager_item').removeClass('active');
    $(this).addClass('active');
       slider1.goToSlide(4);
//enableDrag:false,
 });


 });
