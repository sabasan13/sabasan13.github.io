$( document ).ready(function() {
  $(function() {
    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            $(this).addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        },
          slowHide: function (animationName) {
              var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
              $(this).addClass('animated ' + animationName).one(animationEnd, function() {
                  $(this).hide();
                  $(this).removeClass('animated ' + animationName);
              });
          },
          slowShow: function (animationName) {
              var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
              $(this).show();
              $(this).addClass('animated ' + animationName).one(animationEnd, function() {
                  $(this).removeClass('animated ' + animationName);
              });
          }
    });
  });

});

function noti(status, text) {
  $('.alert-'+status+' em').text(text);
  $('.alert-'+status).slowShow('bounceIn');
  setTimeout(function() {
      $('.alert-'+status).slowHide('bounceOut');
  }, 4000);
}

function popupOpen(id) {
  $(id +" .popup-container").css("top","200%");
  $(id).fadeIn(300);
  
  $(id +" .popup-container").animate({
    top: "40%"
  }, 500, function() {
    
      $( ".popup-container" ).animate({
      top: "50%"
    }, 500, function() {
        
    });
  });
}


function popupClose(id) {
  $(id +" .popup-container").animate({
    top: "60%"
  }, 500, function() {
    
    $(id).fadeOut(500);
    
      $(id+" .popup-container").animate({
      top: "-300%"
    }, 500, function() {
        
    });
  });
}
function changePaymentMethod(pm, payid) {
  $(".payment-method").removeClass("active");
  $(".pm-"+pm).addClass("active");
  
  // $("#form-deposit").prop("action", "/payment/"+pm+"/go/");
  $("#withdrawal-type-field").val(pm);
  $("#payment_id").val(payid);

  
  // if (holder != undefined) { 
  //   document.getElementsByClassName('PurseHolder')[0].placeholder=holder;
  // }
}
function add_comment() {
	 var data   = $('#add_comment').serialize();
    $.post("/engine/comment.php", data, function(r) {
      if(r.status == 'success') {
        if(typeof(r.msg) != 'undefined') {
          noti(r.status, r.msg);
	  }}
		else if(r.status == 'error') {
        noti(r.status, r.msg);
      }
    }, "json");
    return false;
}
function psave() {
	 var data   = $('#profile-info').serialize();
    $.post("/engine/pinfo.php", data, function(r) {
      if(r.status == 'success') {
        if(typeof(r.msg) != 'undefined') {
          noti(r.status, r.msg);
	  }}
		else if(r.status == 'error') {
        noti(r.status, r.msg);
      }
    }, "json");
    return false;
}
function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[1-5]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}
function psell(itemid) {
    $.post("/engine/psell.php", {itemid:itemid}, function(r) {
      if(r.status == 'success') {
        if(typeof(r.msg) != 'undefined') {
          noti(r.status, r.msg);
	  }	
	  setTimeout(function () {
   location.reload();
}, 1000);}
		else if(r.status == 'error') {
        noti(r.status, r.msg);
      }
    }, "json");
}
function pdelivery(itemid) {
    $.post("/engine/pdelivery.php", {itemid:itemid}, function(r) {
      if(r.status == 'success') {
        if(typeof(r.msg) != 'undefined') {
          noti(r.status, r.msg);
	  }	
	  setTimeout(function () {
   window.location.href = "/profile?action=pdelivery";
}, 1000);}
		else if(r.status == 'error') {
        noti(r.status, r.msg);
      }
    }, "json");
}

function rand( min, max ) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
}
function roll(caseid) {
    $.post("/engine/game.php", {caseid:caseid}, function(r) {
      if(r.status == 'success') {
        if(typeof(r.msg) != 'undefined') {	
		
		  setTimeout(function() { noti(r.status, r.msg) }, 8000);
        }
        var balance = parseInt($("#user-balance").html());
        if(balance >= r.price)
          balance = balance - r.price;
        $("#user-balance").html(balance);
        var itm = "";
        var unx = r['unx'];
        var rnd = -1;
        var old = 0;
        // $("#roulette").html('');
        for(var i = 0;i<20;i++){
          // itm +="<div class='roulette-item'><img src='/img/coin-"+r[i]+".svg'></div>";\
          itm += r[i];
        }
        // itm +="<div class='roulette-item' data-num='"+unx+"'><img src='/img/coin-"+win_item.value+".svg'></div>";
        itm += r['win'];
        for(var i = 20;i<25;i++){
          // itm +="<div class='roulette-item'><img src='/img/coin-"+r[i]+".svg'></div>";
          itm += r[i];
        }
        $("#roulette").append(itm);
        var container = $('#roulette');
        var scrollTo = $(".fortune-item[data-num='"+unx+"']");
        container.animate({scrollLeft: scrollTo.offset().left - container.offset().left + container.scrollLeft()-470+rand(1,60)},{duration: 10000,easing: 'swing',complete: function() { 
          if(typeof(r.img) != 'undefined') {
          $("#prize").css("display", "block");
            $("#filter").css("display", "block");
            $("#prize-img").attr('src',"/img/items/"+r.img+".png");
            $("#prize-product").html(r.name);
			$("#pricewin").html(r.cost_sell);
            if(r.id != 0)
              $("#get-prize").attr('onclick',"psell("+r.id+")");
            else {
              $("#get-prize").attr('href',"/");
              $("#get-prize").html("<span>На главную</span>");
            }
          }
        }});
      } else if(r.status == 'error') {
        game_proccess = false;
        noti(r.status, r.msg);
      }
    }, "json");
}


$(document).ready(function(){
 $('.single-item').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
});
});

$(document).ready(function() {
            $('.navbar-toggle').click(function() {
                $('#nav-icon1').toggleClass('open');
            });        
});

      $('.navbar-toggle').on('click', function (e) {
        e.preventDefault();
        var $target = $('.menu-dp');
        if (!$target.is(':visible')) {
            $target.css('display', 'block');
            $target.animate({
                top: 70 + 'px'
            });
         $('.mobile-menu-overlay').show();
         $('html').css("overflow", "hidden");
        } else {
            $target.animate({
                top: -100 + '%'
            }, function () {
                $target.css('display', 'none');

            });
            $('.mobile-menu-overlay').hide();
            $('html').css('overflow', 'inherit');        
        }
    }); 

          $('.mobile-menu-overlay').on('click', function (e) {
        e.preventDefault();
        var $target = $('.menu-dp');
        $('#nav-icon1').removeClass('open'); 
           $target.animate({
                top: -100 + '%'
            }, function () {
                $target.css('display', 'none');
                                
            });
            $('.mobile-menu-overlay').hide();
            $('html').css('overflow', 'inherit');  
    });     