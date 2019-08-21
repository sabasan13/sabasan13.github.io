;
// Начинать писать отсюда!!!!
/*! Main */
$(document).ready(function($) {
    $(window).scroll(function(){
        if ($(this).scrollTop()>100) {
          $('header').addClass('fixed');
        }
        else{
          $('header').removeClass('fixed');
        }
    });

});


