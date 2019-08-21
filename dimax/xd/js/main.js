;
// Начинать писать отсюда!!!!
$(document).ready(function(){

    
$(window).resize(function() {
    //update stuff
  
    if ($(window).width() > 800) {
    
    $(".header .nav").fadeIn();
    $(".close").fadeOut();
    $(".burger").fadeOut();
    }  
      
    if ($(window).width() < 800) {
    $(".header .nav").fadeOut();
    $(".close").fadeOut();
    $(".burger").fadeIn();
    }  
  });
  
  $(".burger").click(function(){
    $(".header .nav").fadeIn();
    $(".close").fadeIn();
    $(".burger").fadeOut();
  });

  $(".close").click(function(){
    $(".header .nav").fadeOut();
    $(".close").fadeOut();
    $(".burger").fadeIn();
  });
});