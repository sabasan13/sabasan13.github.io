$(document).ready(function(){

$(".burger").click(function(){
  $(".burger").fadeOut(500);
  $(".bottom-menu").fadeIn(500);
  $(".burger-close").fadeIn(500);
});

$(".burger-close").click(function(){
  $(".bottom-menu").fadeOut(500);
  $(".burger-close").fadeOut(500);
  $(".burger").fadeIn(500);
});
var teacher = $('#teacher').lightSlider({
                gallery:false,
                item:1,
                pager:false,
                loop:false,
                freeMove:false,
                enableDrag:false,
                speed: 500,
                pause: 5000,
                auto:false,
                
            });
  $('.teacher-prev').click(function(){

       teacher.goToPrevSlide();
    });
$('.teacher-next').click(function(){

       teacher.goToNextSlide();
  });
var map = $('#map').lightSlider({
                gallery:false,
                item:1,
                pager:false,
                loop:false,
                freeMove:false,
                enableDrag:false,
                speed: 500,
                pause: 5000,
                auto:false,
            });
$('.map-1').click(function(){
  $('.placeholder').removeClass('active');
    $(this).addClass('active');
       map.goToSlide(0);
    });
$('.map-2').click(function(){
  $('.placeholder').removeClass('active');
    $(this).addClass('active');
       map.goToSlide(1);
    });
$('.map-3').click(function(){
  $('.placeholder').removeClass('active');
    $(this).addClass('active');
       map.goToSlide(2);
    });
$('.map-4').click(function(){
  $('.placeholder').removeClass('active');
    $(this).addClass('active');
       map.goToSlide(3);
    });
$('.map-5').click(function(){
  $('.placeholder').removeClass('active');
    $(this).addClass('active');
       map.goToSlide(4);
    });
var feed_slider = $('#feed-back-slider').lightSlider({
                gallery:false,
                item:2,
                pager:false,
                loop:false,
                freeMove:false,
                enableDrag:false,
                speed: 500,
                pause: 5000,
                auto:false,
                
            });
  $('.feed-back-slider-prev').click(function(){

       feed_slider.goToPrevSlide();
    });
$('.feed-back-slider-next').click(function(){

       feed_slider.goToNextSlide();
  });




var banner = $('#banner-slider').lightSlider({
                gallery:false,
                item:1,
                 pager:false,
                loop:true,
                freeMove:false,
                enableDrag:false,
                speed: 500,
                pause: 5000,
                auto:true,
                onSliderLoad: function() {
                    $('#banner-slider').removeClass('cS-hidden');
                }  
            });
  $('.banner-prev').click(function(){

       banner.goToPrevSlide();
    });
$('.banner-next').click(function(){

       banner-next.goToNextSlide();
  });



var gallery = $('#gallery-slider')

  //update stuff
 

  
    gallery.lightSlider({
                gallery:false,
                item:2,
                pager:false,
                loop:false,
                freeMove:false,
                enableDrag:false,
                speed: 500,
                pause: 5000,
                auto:true,
                responsive : [
            {
                breakpoint:1100,
                settings: {
                    loop:true,
                    item:1,
                  }
            }
        ] 
            });

$('.gallery-prev').click(function(){
      gallery.goToPrevSlide();
    });
$('.gallery-next').click(function(){
      gallery.goToNextSlide();
  });

var news = $('#news-slider').lightSlider({
                gallery:false,
                item:3,
                pager:false,
                loop:false,
                freeMove:false,
                enableDrag:false,
                speed: 500,
                pause: 5000,
                auto:false,
               responsive : [
            {
                breakpoint:1200,
                settings: {
                    loop:true,
                    item:2.5,
                  }
            },
            {
                breakpoint:992,
                settings: {
                    loop:true,
                    item:1.8,
                    slideMove:1
                  }
            },
            {
                breakpoint:747,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]   
            });
  $('.news-prev').click(function(){

       news.goToPrevSlide();
    });
$('.news-next').click(function(){

       news.goToNextSlide();
  });

var why = $('#why').lightSlider({
                gallery:false,
                item:1,
                 pager:false,
                loop:true,
                freeMove:false,
                enableDrag:false,
                speed: 500,
                pause: 5000,
                auto:true,
                onSliderLoad: function() {
                    $('#why').removeClass('cS-hidden');
                }  
            });
  $('.why-prev').click(function(){

       why.goToPrevSlide();
    });
$('.why-next').click(function(){

       why.goToNextSlide();
  });

var group = $('#group-slider').lightSlider({
                gallery:false,
                item:1,
                pager:false,
                loop:false,
                freeMove:false,
                enableDrag:false,
                speed: 500,
                pause: 5000,
                auto:true,
                onSliderLoad: function() {
                    $('#group-slider').removeClass('cS-hidden');
                }  
            });
$('.group-prev').click(function(){
       group.goToPrevSlide();
    });
$('.group-next').click(function(){

       group.goToNextSlide();
  });

var feedback = $('#feed-back').lightSlider({
                gallery:false,
                item:1,
                pager:false,
                loop:false,
                freeMove:false,
                enableDrag:false,
                speed: 500,
                pause: 5000,
                auto:true,
                onSliderLoad: function() {
                    $('#feed-back').removeClass('cS-hidden');
                }  
            });
$('.feedback-prev').click(function(){
       feedback.goToPrevSlide();
    });
$('.feedback-next').click(function(){
      feedback.goToNextSlide();
  });

var skills = $('#skills')
$(window).resize(function() {
  //update stuff
 
  if ($(window).width() < 1010) {
  
    skills.lightSlider({
                gallery:false,
                item:1,
                pager:false,
                loop:false,
                freeMove:false,
                enableDrag:false,
                speed: 500,
                pause: 5000,
                auto:true,
                onSliderLoad: function() {
                    $('#feed-back').removeClass('cS-hidden');
                }  
            });
   if ($(window).width() > 1010) {
   skills.destroy(900);
  }
$('.skills-prev').click(function(){
      skills.goToPrevSlide();
    });
$('.skills-next').click(function(){
      skills.goToNextSlide();
  });

  }  
    
    
});
if ($(window).width() < 1010) {
  
    skills.lightSlider({
                gallery:false,
                item:1,
                pager:false,
                loop:false,
                freeMove:false,
                enableDrag:false,
                speed: 500,
                pause: 5000,
                auto:true,
                onSliderLoad: function() {
                    $('#skills').removeClass('cS-hidden');
                }  
            });
if ($(window).width() > 1010) {
   skills.destroy(900);
  }
$('.skills-prev').click(function(){
      skills.goToPrevSlide();
    });
$('.skills-next').click(function(){
      skills.goToNextSlide();
  });

  }





var skills_1 = $('#skills-1')
$(window).resize(function() {
  //update stuff
 
  if ($(window).width() < 1010) {
  
    skills_1.lightSlider({
                gallery:false,
                item:1,
                pager:false,
                loop:false,
                freeMove:false,
                enableDrag:false,
                speed: 500,
                pause: 5000,
                auto:true,
                onSliderLoad: function() {
                    $('#skills').removeClass('cS-hidden');
                }  
            });
   if ($(window).width() > 1010) {
   skills_1.destroy(900);
  }
$('.skills-1-prev').click(function(){
      skills_1.goToPrevSlide();
    });
$('.skills-1-next').click(function(){
      skills_1.goToNextSlide();
  });

  }  
    
    
});
if ($(window).width() < 1010) {
  
    skills_1.lightSlider({
                gallery:false,
                item:1,
                pager:false,
                loop:false,
                freeMove:false,
                enableDrag:false,
                speed: 500,
                pause: 5000,
                auto:true,
                onSliderLoad: function() {
                    $('#skills').removeClass('cS-hidden');
                }  
            });
if ($(window).width() > 1010) {
   skills_1.destroy(900);
  }
$('.skills-1-prev').click(function(){
      skills_1.goToPrevSlide();
    });
$('.skills-1-next').click(function(){
      skills_1.goToNextSlide();
  });

  }


var skills_2 = $('#skills-2')
$(window).resize(function() {
  //update stuff
 
  if ($(window).width() < 1010) {
  
    skills_2.lightSlider({
                gallery:false,
                item:1,
                pager:false,
                loop:false,
                freeMove:false,
                enableDrag:false,
                speed: 500,
                pause: 5000,
                auto:true,
                onSliderLoad: function() {
                    $('#skills').removeClass('cS-hidden');
                }  
            });
   if ($(window).width() > 1010) {
   skills_2.destroy(900);
  }
$('.skills-2-prev').click(function(){
      skills_2.goToPrevSlide();
    });
$('.skills-2-next').click(function(){
      skills_1.goToNextSlide();
  });

  }  
    
    
});

if ($(window).width() < 1010) {
  
    skills_2.lightSlider({
                gallery:false,
                item:1,
                pager:false,
                loop:false,
                freeMove:false,
                enableDrag:false,
                speed: 500,
                pause: 5000,
                auto:true,
                onSliderLoad: function() {
                    $('#skills').removeClass('cS-hidden');
                }  
            });
if ($(window).width() > 1010) {
   skills_2.destroy(900);
  }
$('.skills-2-prev').click(function(){
      skills_2.goToPrevSlide();
    });
$('.skills-2-next').click(function(){
      skills_2.goToNextSlide();
  });

  }


var adults = $('#adults-slider')
$(window).resize(function() {
  //update stuff
 
  if ($(window).width() < 1010) {
  
    adults.lightSlider({
                gallery:false,
                item:1,
                pager:false,
                loop:false,
                freeMove:false,
                enableDrag:false,
                speed: 500,
                pause: 5000,
                auto:true,
                onSliderLoad: function() {
                    $('#adults-slider').removeClass('cS-hidden');
                }  
            });
   if ($(window).width() > 1010) {
   adults.destroy(900);
  }
$('.adults-prev').click(function(){
      adults.goToPrevSlide();
    });
$('.adults-next').click(function(){
      adults.goToNextSlide();
  });

  }  
    
    
});
if ($(window).width() < 1010) {
  
    adults.lightSlider({
                gallery:false,
                item:1,
                pager:false,
                loop:false,
                freeMove:false,
                enableDrag:false,
                speed: 500,
                pause: 5000,
                auto:true,
                onSliderLoad: function() {
                    $('#adults-slider').removeClass('cS-hidden');
                }  
            });
if ($(window).width() > 1010) {
   adults.destroy(900);
  }
$('.adults-prev').click(function(){
      adults.goToPrevSlide();
    });
$('.adults-next').click(function(){
      adults.goToNextSlide();
  });

  }


var company = $('#company-slider')
$(window).resize(function() {
  //update stuff
 
  if ($(window).width() < 1010) {
  
    company.lightSlider({
                gallery:false,
                item:1,
                pager:false,
                loop:false,
                freeMove:false,
                enableDrag:false,
                speed: 500,
                pause: 5000,
                auto:true,
                onSliderLoad: function() {
                    $('#company-slider').removeClass('cS-hidden');
                }  
            });
   if ($(window).width() > 1010) {
   company.destroy(900);
  }
$('.company-prev').click(function(){
      company.goToPrevSlide();
    });
$('.company-next').click(function(){
      company.goToNextSlide();
  });

  }  
    
    
});
if ($(window).width() < 1010) {
  
    company.lightSlider({
                gallery:false,
                item:1,
                pager:false,
                loop:false,
                freeMove:false,
                enableDrag:false,
                speed: 500,
                pause: 5000,
                auto:true,
                onSliderLoad: function() {
                    $('#company-slider').removeClass('cS-hidden');
                }  
            });
if ($(window).width() > 1010) {
   company.destroy(900);
  }
$('.company-prev').click(function(){
      company.goToPrevSlide();
    });
$('.company-next').click(function(){
      company.goToNextSlide();
  });

  }




  
    
    

if ($(window).width() < 1010) {
  
   gallery.lightSlider({
                gallery:false,
                item:1,
                pager:false,
                loop:false,
                freeMove:false,
                enableDrag:false,
                speed: 500,
                pause: 5000,
                auto:true,
                onSliderLoad: function() {
                    $('#gallery-slider').removeClass('cS-hidden');
                }  
            });
if ($(window).width() > 1010) {
   gallery.destroy(900);
  }
$('.gallery-prev').click(function(){
      gallery.goToPrevSlide();
    });
$('.gallery-next').click(function(){
      gallery.goToNextSlide();
  });

  }


var video = $('#video')
$(window).resize(function() {
  //update stuff
 
  if ($(window).width() < 1010) {
  
    video.lightSlider({
                gallery:false,
                item:1,
                pager:false,
                loop:false,
                freeMove:false,
                enableDrag:false,
                speed: 500,
                pause: 5000,
                auto:true,
                onSliderLoad: function() {
                    $('#gallery').removeClass('cS-hidden');
                }  
            });
   if ($(window).width() > 1010) {
   video.destroy(900);
  }
$('.video-prev').click(function(){
      video.goToPrevSlide();
    });
$('.video-next').click(function(){
      video.goToNextSlide();
  });

  }  
    
    
});
if ($(window).width() < 1010) {
  
   video.lightSlider({
                gallery:false,
                item:1,
                pager:false,
                loop:false,
                freeMove:false,
                enableDrag:false,
                speed: 500,
                pause: 5000,
                auto:true,
                onSliderLoad: function() {
                    $('#video').removeClass('cS-hidden');
                }  
            });
if ($(window).width() > 1010) {
   video.destroy(900);
  }
$('.video-prev').click(function(){
      video.goToPrevSlide();
    });
$('.video-next').click(function(){
      video.goToNextSlide();
  });

  }




});