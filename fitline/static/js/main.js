;
// Начинать писать отсюда!!!!
var swiper = new Swiper('.feedback-container .swiper-container', {
    slidesPerView: 2,
    spaceBetween: 76,
    navigation: {
      nextEl: '.feedback-container .next',
      prevEl: '.feedback-container .prev',
    },
    breakpoints: {

        768: {
          slidesPerView: 1,
          spaceBetween: 60,
        },
        580: {
          slidesPerView: 1,
          spaceBetween: 60,
        },
    }
});


var swiper = new Swiper('.mobile-product .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.mobile-product .next',
      prevEl: '.mobile-product .prev',
    },
});

var swiper = new Swiper('.result-container .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.result-container .next',
      prevEl: '.result-container .prev',
    },
});


var swiper = new Swiper('.certificate-container .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.certificate-container .next',
      prevEl: '.certificate-container .prev',
    },
});

function makeTimer() {

	//		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
		var endTime = new Date("29 April 2020 9:56:00 GMT+01:00");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$(".days").html(days);
			$(".hours").html(hours);
			$(".minutes").html(minutes);
			$(".seconds").html(seconds);		

	}

    setInterval(function() { makeTimer(); }, 1000);
    
    $(document).mouseup(function (e){
        var div1 = $(".popup-container"); 
        // тут указываем ID элемента
        if (!div1.is(e.target) // если клик был не по нашему блоку
            && div1.has(e.target).length === 0) { // и не по его дочерним элементам
              $('.popup').fadeOut(); 
          // скрываем его
          $('body, html').css("overflow-y", "auto");
          $('.popup-container').css("overflow-y", "auto");
              
        }
      });

      $('.popup-btn-call').click(function(){
        $('.popup-text').fadeOut();
        $('.popup-call').fadeIn();
      });
      $('.popup-btn-text').click(function(){
        $('.popup-text').fadeIn();
      }); 
      $('.popup-close').click(function(){
        $('.popup').fadeOut();
      }); 
      
