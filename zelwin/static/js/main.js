;
// Начинать писать отсюда!!!!

$('.question-tab').on('click', function(){
    $(this).parent('.question').toggleClass("closed opened");
  })


  $('.menu').on('click', function(){
    $('.header .container').toggleClass("active");
  })


  $('.account .burger').on('click', function(){
    $('.account').toggleClass("active");
  })