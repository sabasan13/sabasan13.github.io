;
// Начинать писать отсюда!!!!

$('.question-tab').on('click', function(){
    $(this).parent('.question').toggleClass("closed opened");
  })


  $('.menu').on('click', function(){
    $('.header-bottom').toggleClass("active");
  })