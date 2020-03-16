$( document ).ready(function() {
var swiper = new Swiper('.catalog-slider-container .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 15,
    loop: true,
    navigation: {
      nextEl: '.catalog-slider .next',
      prevEl: '.catalog-slider .prev',
    },
    pagination: {
        el: '.catalog-slider-container .swiper-pagination',
        type: 'bullets',
      },
    breakpoints: {
        1011: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        610: {
          slidesPerView: 1,
          spaceBetween: 33,
        }
    }
  });

  var swiper1 = new Swiper('.videos-container .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.videos-container .next',
      prevEl: '.videos-container .prev',
    },
    pagination: {
        el: '.videos-container .swiper-pagination',
        type: 'bullets',
      },
    breakpoints: {
        991: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        650: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
    }
  });
  var swiper2 = new Swiper('.feedback-slider .swiper-container', {
    slidesPerView: 5,
    spaceBetween: 63,
    loop: true,
    navigation: {
      nextEl: '.feedback-slider .next',
      prevEl: '.feedback-slider .prev',
    },
    pagination: {
        el: '.feedback-slider-pagination.swiper-pagination',
        type: 'bullets',
      },
    breakpoints: {
        1350: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
    }
  });
  var swiper4 = new Swiper('.res-slider .swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.res-slider .next',
      prevEl: '.res-slider .prev',
    },
    pagination: {
        el: '.res-slider .swiper-pagination',
        type: 'bullets',
      },
  });
    var mySwiper = new Swiper ('#lightbox .swiper-container', {
      init: false,
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '#lightbox .swiper-pagination',
        observer: true,
        observeParents: true,   
      },
      navigation: {
        nextEl: '#lightbox .next',
        prevEl: '#lightbox .prev',
      },
    })
    $('.fancybox-trigger').click(function(e){
      e.preventDefault();
      var thisTarget = $(this).data('index');
      $.fancybox.open({
        src: "#lightbox",
        type: 'inline',
        opts: {
          toolbar: false,
          defaultType: 'inline',
          autoFocus: true,
          touch: false,
          afterLoad: function() {
            mySwiper.init();
            mySwiper.slideTo(thisTarget - 1)
            $('swiper-slide').find('video').each(function(){
              this.pause();
            })
          }
        }
      })
    })


  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 2,
    slidesPerView: 5,
    loop: true,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      650: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
  }
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop:true,

    navigation: {
      nextEl: '.main-product-bottom .next',
      prevEl: '.main-product-bottom .prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });




$('.hwork-top a').click(function(){
  $('.hwork-top a').removeClass("red");
  $(this).addClass("red");
});


$('.faq-item').click(function(){
  if($(this).hasClass('active')) {
    $(this).children('.faq-item-block').slideUp(300);
    $(this).removeClass('active');
  }
  else{
    $(this).children('.faq-item-block').slideDown(300);
    $(this).addClass('active');
  }
});

$('.add').click(function () {
  if ($(this).prev().val() < 100) {
    $(this).prev().val(+$(this).prev().val() + 1);
  }
});
$('.sub').click(function () {
  if ($(this).next().val() > 1) {
    if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
  }
});

$('.burger').click(function(){
  if($(".header-mobile").hasClass('active')) {
    $('.header-mobile-nav').slideUp(300);
    $('.header-mobile').removeClass('active');
  }
  else{
    $('.header-mobile-nav').slideDown(300);
    $('.header-mobile').addClass('active');
  }
});

  var slider = $('.slider');

  slider.on('input', function () {
      $(this).siblings('figure').children(".handle").css("left", slider.val() + "%");
      $(this).siblings('figure').children(".divisor").css("width", slider.val() + "%");
  });
  
 
});

function showtab(tabs)
{
	var tab=tabs;
	switch(tab) //this switch case replaces the tabContent
    {
      case "tab-1":
        document.getElementById('tab-container').innerHTML = document.getElementById("tab-1").innerHTML;
        var slider = $('.slider');
        slider.on('input', function () {
          $(this).siblings('figure').children(".handle").css("left", slider.val() + "%");
          $(this).siblings('figure').children(".divisor").css("width", slider.val() + "%");
      });
        break;
      case "tab-2":
		document.getElementById('tab-container').innerHTML = document.getElementById("tab-2").innerHTML;
        break;
        case "tab-3":
          document.getElementById('tab-container').innerHTML = document.getElementById("tab-3").innerHTML;
          var swiper4 = new Swiper('.res-slider .swiper-container', {
            slidesPerView: 1,
            loop: true,
            navigation: {
              nextEl: '.res-slider .next',
              prevEl: '.res-slider .prev',
            },
            pagination: {
                el: '.res-slider .swiper-pagination',
                type: 'bullets',
              },
          });
          break;
        case "tab-4":
          document.getElementById('tab-container').innerHTML = document.getElementById("tab-4").innerHTML;
          var swiper2 = new Swiper('.feedback-slider .swiper-container', {
            slidesPerView: 5,
            spaceBetween: 63,
            loop: true,
            navigation: {
              nextEl: '.feedback-slider .next',
              prevEl: '.feedback-slider .prev',
            },
            pagination: {
                el: '.feedback-slider-pagination.swiper-pagination',
                type: 'bullets',
              },
            breakpoints: {
                1350: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                600: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
            }
          });
          break;
      default:
		document.getElementById('tab-container').innerHTML = document.getElementById("tab-1").innerHTML;
        break;
    }
}

