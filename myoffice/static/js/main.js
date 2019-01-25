;
// Начинать писать отсюда!!!!
$(document).ready(function(){

    $(".scroll").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
    $("section").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
    $(".hamburger-btn").click(function(){
        $(".hamburger-btn").hide();
        $(".exit").show();
        $(".nav-list").addClass("active");
    });

    $(".header-nav__mob .nav-list a, .exit").click(function(){
        $(".hamburger-btn").show();
        $(".exit").hide();
        $(".header-nav__mob .nav-list").removeClass("active");
    });

});


$('.js-index-slider').bxSlider({
    pagerCustom: '.js-index-slider__pager',
    controls:false
});
