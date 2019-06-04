;
// Начинать писать отсюда!!!!
$(document).ready(function(){
    slider2 = $('.planshet-slider').lightSlider({
        gallery:true,
        item:3,
        pager:false,
        loop:true,
        freeMove:true,
        enableDrag:true,
        speed: 500,
        auto:true,
    });
    $('.house-pagers_prev').click(function(){
        slider2.goToPrevSlide();
    });

    $('.house-pagers_next').click(function(){
        slider2.goToNextSlide();
    });
});