
  $("a.photos__item__photo").click(function(){
    
$().fancybox({
    selector: '[data-fancybox="gallery-1"]',
    idleTime: false,
    baseClass: "fancybox-custom-layout",
    gutter: 0,
    loop: true,
    thumbs: {
      hideOnClose: false,
      parentEl: ".fancybox-outer"
    },
    touch: {
      vertical: false
    },
    afterLoad: function(instance, current) {
      if (instance.group.length > 1 && current.$content) {
        let value = $(".fancybox-caption").text();
        let number =$(".fancybox-infobar span:nth-child(1)").text();
        let count =$(".fancybox-infobar span:nth-child(2)").text();
        current.$content.append(
          '<div class="fancybox-content-caption"><div class="fancybox-content-caption__name">'+ value +'</div><div class="fancybox-content-caption__number"><span data-fancybox-index>'+number+'</span> из <span data-fancybox-count>'+count+'</span></div></div>'
        );
        
      }
    }
  });

});
$(".anketa-services-box-item__show-all").click(function(){
    $(this).siblings('.anketa-services-box-item-line').addClass("anketa-services-box-item-line-show");
    $(this).hide();
}); 
 
$(".resume-box-text__show-all").click(function(){

    $(".resume-box-text").addClass("resume-box-text-auto");
    $(this).hide();
}); 

$(".photos__show-all").click(function(){
    $('.photos__item').addClass("photos__item-show");
    $(this).hide();
}); 



$(".contact-box-body-item img").click(function(){
  $(this).parent().addClass("active");
}); 


$(document).mouseup(function (e){
  var div1 = $(".contact-box-body-item .profile-card"); 
  // тут указываем ID элемента
  if (!div1.is(e.target) // если клик был не по нашему блоку
      && div1.has(e.target).length === 0) { // и не по его дочерним элементам
        $(".contact-box-body-item").removeClass("active");
    // скрываем его
  }
});

$(".contact-box-body-item__remove").click(function(){
  $(this).parent().addClass("remove");
}); 

$(document).mouseup(function (e){
  var div1 = $(".contact-box-body-item-remove-box"); 
  // тут указываем ID элемента
  if (!div1.is(e.target) // если клик был не по нашему блоку
      && div1.has(e.target).length === 0) { // и не по его дочерним элементам
        $(".contact-box-body-item").removeClass("remove");
    // скрываем его
  }
});

$(".contact-box-head__sort-item").click(function(){
  $(this).addClass("active");
  var div1 = $(this); 
  $(document).mouseup(function (e){
    
    // тут указываем ID элемента
    if (!div1.is(e.target) // если клик был не по нашему блоку
        && div1.has(e.target).length === 0) { // и не по его дочерним элементам
          $(".contact-box-head__sort-item").removeClass("active");
      // скрываем его
    }
  });
}); 

$(".contact-box-body__btn--edit").click(function(){
  $(this).siblings('.contact-box-body').addClass("active");
  $(this).hide();
  $(this).siblings('.contact-box-body__btn--save').css("display","block");
}); 

$(".contact-box-body__btn--save").click(function(){
  $(this).siblings('.contact-box-body').removeClass("active");
  $(this).hide();
  $(this).siblings('.contact-box-body__btn--edit').css("display","block");
}); 


$(".setings__new-services__btn").click(function(){
  $("#add-services-popup").fadeIn();
}); 
$(".registration-container__bottom-reg").click(function(){
  $(".registration-container-mobile").removeClass("log");
}); 
$(".registration-container__bottom-log").click(function(){
  $(".registration-container-mobile").addClass("log");
}); 



let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);



$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

    $(this).siblings().removeClass('current');
    
    $(this).parent('ul').parent('.order-message-box-right-top').siblings('.tab-content').removeClass('current');
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})


  

$(".order-message-box-action-chat").click(function(){
  $(this).parent('.order-message-box-action').parent('.tab-content').parent('.order-message-box-right').parent('.order-message-box').parent('.order-message').children(".messages-content__user-chat").slideDown(300);
  $(this).parent('.order-message-box-action').parent('.tab-content').parent('.order-message-box-right').parent('.order-message-box').parent('.order-message').addClass("active");

})

$(".messages-content__user-chat-close").click(function(){
  $(this).parent('.messages-content__user-chat').slideUp(300);
  $(this).parent('.messages-content__user-chat').parent('.order-message').removeClass("active");
})


$(".order-map-open").click(function(){
  $(".ymaps-2-1-74-float-button").click();
}); 

var swiper = new Swiper('.order-profile-card-slider .swiper-container', {
  slidesPerView: 4,
  spaceBetween: 0,
  loop: true,
  navigation: { 
    nextEl: '.order-profile-card-slider__next',
    prevEl: '.order-profile-card-slider__prev',},
  breakpoints: {
    500: {slidesPerView: 1.5,},
    420: {slidesPerView: 1,},
    700: {slidesPerView: 2.5},
    650: {slidesPerView: 2},
    1199: {slidesPerView: 3}, 
  }});


  $(".list-tab-bar__title").click(function(){

    if($(".setings-tab-bar").hasClass("active")){
			$(".setings-tab-bar").removeClass("active");
    $(".list-tab-bar").slideUp(300);

    
    }	
		else{
      $(".setings-tab-bar").addClass("active");
      $(".list-tab-bar").slideDown(300);
    }
   
  });

 

  var forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]);
    }
  };
  window.onload = function(){
    var max = -219.99078369140625;
    forEach(document.querySelectorAll('.progress'), function (index, value) {
    percent = value.getAttribute('data-progress');
      value.querySelector('.fill').setAttribute('style', 'stroke-dashoffset: ' + ((100 - percent) / 100) * max);
    });
  }



  $(".create-box-comission-what__title").click(function(){
    if($(".create-box-comission-what").hasClass("active")){
       $(".create-box-comission-what-items").slideUp(300);
			$(".create-box-comission-what").removeClass("active");
    }	
		else{
      
      $(".create-box-comission-what").addClass("active");
      $(".create-box-comission-what-items").slideDown(300);
    }
  });

  $(".create-faq-item").click(function(){
    if($(this).hasClass("active")){
      $(this).children(".create-faq-item__text").slideUp(300);
			$(this).removeClass("active");
    }	
		else{
      
      $(this).addClass("active");
      $(this).children(".create-faq-item__text").slideDown(300);
    }
  });


  $(".deal-safe__btn").click(function(){
    if($(".deal-safe").hasClass("active")){
       $(".deal-safe-items").slideUp(300);
			$(".deal-safe").removeClass("active");
    }	
		else{
      $(".deal-safe").addClass("active");
      $(".deal-safe-items").slideDown(300);
    }
  });




  $(".deal-accept-second-action__btn--cancel").click(function(){
    if($(".deal-accept-second").hasClass("active")){
       $(".deal-accept-second-bottom").slideUp(300);
			$(".deal-accept-second").removeClass("active");
    }	
		else{
      $(".deal-accept-second").addClass("active");
      $(".deal-accept-second-bottom").slideDown(300);
    }
  });



  $(".create-what-mobile__title").click(function(){
    if($(".create-what-mobile").hasClass("active")){
       $(".create-what-mobile-block").slideUp(300);
			$(".create-what-mobile").removeClass("active");
    }	
		else{
      $(".create-what-mobile").addClass("active");
      $(".create-what-mobile-block").slideDown(300);
    }
  });


    





var swiper1 = undefined;
function initSwiper() {
    var screenWidth = $(window).width();
    if(screenWidth < 700 && swiper1 == undefined) {  

      swiper1 = new Swiper('.deal-tab .swiper-container', {
        slidesPerView: 1.3,
        spaceBetween: 10,
        loop: false,
        breakpoints: {
          500: {slidesPerView: 1.5,},
          420: {slidesPerView: 1.3,},
          600: {slidesPerView: 2,},
          700: {slidesPerView: 2.5},
        }
    });


 


    } else if (screenWidth > 700 && swiper1 != undefined) {
      swiper1.destroy();
      swiper1 = undefined;
        jQuery('.swiper-wrapper').removeAttr('style');
        jQuery('.swiper-slide').removeAttr('style');            
    }        
}

//Swiper plugin initialization
initSwiper();
textDelete();

//Swiper plugin initialization on window resize
$(window).on('resize', function(){
    initSwiper();
    textDelete();     
});


function textDelete() {
  var screenWidth = $(window).width();
  if(screenWidth < 700) {  

   

  $(".order-message-box-text-cont").text(function(i, text) {

    if (text.length >= 190) {
      text = text.substring(0, 190);
      var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
      text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
    }
    $(this).siblings(".order-message-box-text").text(text);
    
  });

  }
  else if (screenWidth < 991 ) {
    $(".order-message-box-text-cont").text(function(i, text) {
      if (text.length >=224) {
        text = text.substring(0, 224);
        var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
        text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
      }
      
      $(this).siblings(".order-message-box-text").text(text);
      
    });
  }  
  else if (screenWidth > 991 ) {
    $(".order-message-box-text-cont").text(function(i, text) {
      if (text.length >=224) {
        text = text.substring(0, 10000);
        var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
        text = text.substring(0, lastIndex) + ''; // обрезаем до последнего слова
      }
      
      $(this).siblings(".order-message-box-text").text(text);
      
    }); 
  }         
}


$(".order-add ").click(function(){
 
    $(".order-popup-offer").fadeIn(300);
 
  
});
$(".popup-close").click(function(){
 
  $(".popup").fadeOut(300);


});
  var div1 = $(".popup-container"); 
  $(document).mouseup(function (e){
    
    // тут указываем ID элемента
    if (!div1.is(e.target) // если клик был не по нашему блоку
        && div1.has(e.target).length === 0) { // и не по его дочерним элементам
          $(".popup").fadeOut(300);
      // скрываем его
    }
  });
  $(".date-box-block").click(function(){
 
    $(".calendar").fadeIn(300);
 
  
});

$(".mission-list-item").click(function(){
  $(".mission-list-item").removeClass("active");
  $(this).addClass("active");


});
$(".save-contact-box__show").click(function(){
  $(".contact-box-body-item, .save-contact-box-item ").fadeIn();
  $(".save-contact-box__show").fadeOut();
});
$(".date-box").click(function(){
  $(".calendar").fadeIn();
});



$("").click(function(){
  $(this).children(".category-drop").fadeIn();
});

$(".category-drop__back").click(function(){
  $(this).parent(".category-drop").fadeOut();
});


$(".create-box-category .select-box__drop__item-drop").click(function(){

  if($(".create-box-category").hasClass("active")){
    $(".create-box-category").removeClass("active");
  }	

  else{
    $(".create-box-category").addClass("active");
    $(this).children(".category-drop").fadeIn();
  }
});




})