;


var partners = new Swiper('.partners-container', {
    slidesPerView: 'auto',
    spaceBetween: 60,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.partners-next',
        prevEl: '.partners-prev',
      },
  });
  var news = new Swiper('.new-slider', {
    slidesPerView: '3',
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: '.new-slider-next',
        prevEl: '.new-slider-prev',
      },
      breakpoints: {
        565: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
      }
  });
  

  var banner = new Swiper('.banner-container', {
    cssMode: true,
    navigation: {
      nextEl: '.banner-next',
      prevEl: '.banner-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  $( "#search" ).click(function() {
    $( ".search" ).fadeIn();
  });

  $( ".close" ).click(function() {
    $( ".popup" ).fadeOut();
  });
  $( ".popup-thank__btn" ).click(function() {
    $( ".popup" ).fadeOut();
  });
  $( ".reg" ).click(function() {
    $( ".popup-log" ).fadeOut();
    $( ".popup-reg" ).fadeIn();
  });
  $( ".log" ).click(function() {
    $( ".popup-reg" ).fadeOut();
    $( ".popup-log" ).fadeIn();
  });
  $( ".main-account__log" ).click(function() {
    $( ".popup-log" ).fadeIn();
  });

  $( ".main-account__reg" ).click(function() {
    $( ".popup-reg" ).fadeIn();
  });
  


  function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  $( ".tablinks" ).click(function() {
    $( ".tablink-drop" ).removeClass("active");
  });
  $( ".tablink , .tablink-drop" ).click(function() {
    $( ".tablink-drop" ).addClass("active");
  });
  

  $( ".year" ).click(function() {
    $( ".year" ).removeClass("active");
    $(this).addClass("active");
  });
  $( ".news-tab" ).click(function() {
    $( ".news-tab" ).removeClass("active");
    $(this).addClass("active");
  });



  

  $( ".details__btn" ).click(function() {
    $(this).parent(".text-content").children(".details").fadeIn();
    $(this).parent(".text-content").children(".details__btn").fadeOut();
  });
  $( ".details__close" ).click(function() {
    $(this).parent(".details").fadeOut();
    $(this).parent(".details").parent(".text-content").children(".details__btn").fadeIn();
  });
  $( ".profile-info ion-icon " ).click(function() {
    $(this).parent(".input").children("input").prop( "disabled", false );
  });

  $( ".profile-info ion-icon " ).click(function() {
    $(this).parent(".input").children("textarea").prop( "disabled", false );
  });


  
  $(document).mouseup(function (e){
    var div1 = $(".popup-container"); 
    // тут указываем ID элемента
    if (!div1.is(e.target) // если клик был не по нашему блоку
        && div1.has(e.target).length === 0) { // и не по его дочерним элементам
          $('.popup').fadeOut();
      // скрываем его
    }
  });

$(".news-gallery-item a").click(function() {

  $(".news-gallery").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
      enabled: true
    }
  });
});
  $( ".about-gallery__btn" ).click(function() {
    $( ".about-gallery__btn" ).fadeOut();
    $(".hidden").addClass("news-gallery");
    $(".hidden").removeClass("hidden");
    
  });
  
  $( ".faq-item__btn" ).click(function() {
    $(this).parent("h4").parent(".faq-item").toggleClass("active");
    
  });


  $( ".menu" ).click(function() {
    $( ".header" ).addClass('active');
  });
  $( ".close-menu" ).click(function() {
    $( ".header" ).removeClass('active');
  });
  

  