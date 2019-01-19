;
// Начинать писать отсюда!!!!
$(document).ready(function(){

$("#menu li a").click(function(){
    $("#menu-toggle").click();
});

});

$("section").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
});

$("#NEXT").click(function(){
    $(".bx-wrapper .bx-next").click();
});
$("#PREV").click(function(){
    $(".bx-wrapper .bx-prev").click();
});
$('#slide-counter').prepend('<div class="current-index"></div> из 9');

$('.js-index-slider').bxSlider({
    pager: false,
    nextText: '',
    prevText: '',
    onSliderLoad: function (currentIndex){
        $('#slide-counter .current-index').text(currentIndex + 1);
    },
    onSlideBefore: function ($slideElement, oldIndex, newIndex){
        $('#slide-counter .current-index').text(newIndex + 1);
    }
});

var popup = document.getElementById("popup-call-back");
$('#popup').click(function(){
    popup.style.display = "block";
    document.body.style.overflow = "hidden";
});
$('.popup__btn').click(function(){
    popup.style.display = "none"
    document.body.style.overflow = "auto";
    document.body.style.overflowX = "hidden";
});

$(window).click(function(event){
    if(event.target == popup){
        popup.style.display = "none";
        document.body.style.overflow = "auto";
        document.body.style.overflowX = "hidden";}
});

