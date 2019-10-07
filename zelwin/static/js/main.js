;
// Начинать писать отсюда!!!!

$('.question-tab').on('click', function(){
    $(this).parent('.question').toggleClass("closed opened");
  })


  $('.menu').on('click', function(){
    $('.header .container').toggleClass("active");
  })

  $(document).mouseup(function (e){
    var div1 = $(".header, .account-items"); 
    // тут указываем ID элемента
    if (!div1.is(e.target) // если клик был не по нашему блоку
        && div1.has(e.target).length === 0) { // и не по его дочерним элементам
          $('.header .container, .account').removeClass("active"); 
      // скрываем его
    }
  });

$('.account .burger').click(function(){
  $(".account .burger").removeClass("active focus");
  $('.account').toggleClass("active");
});

  $(document).ready(function () {
    $(".referall-link__name img").click(function (event) {
        event.preventDefault();
        CopyToClipboard($(".referall-link__name span").text(), true, "Скопировано");
    });
});

function CopyToClipboard(value, showNotification, notificationText) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(value).select();
    document.execCommand("copy");
    $temp.remove();

    if (typeof showNotification === 'undefined') {
        showNotification = true;
    }
    if (typeof notificationText === 'undefined') {
        notificationText = "Copied to clipboard";
    }

    var notificationTag = $("div.copy-notification");
    if (showNotification && notificationTag.length == 0) {
        notificationTag = $("<div/>", { "class": "copy-notification", text: notificationText });
        $("body").append(notificationTag);

        notificationTag.fadeIn("slow", function () {
            setTimeout(function () {
                notificationTag.fadeOut("slow", function () {
                    notificationTag.remove();
                });
            }, 1000);
        });
    }
}


$('.banner-action__log').click(function(){
  $(".popup-log").fadeIn(500);
});
$('.banner-action__sign').click(function(){
  $(".popup-sign").fadeIn(500);
});
$('.popup__close').click(function(){
  $(".popup").fadeOut(500);
});
$('.about__play').click(function(){
  $(".popup-video").fadeIn(500);
});

$(document).mouseup(function (e){
  var div1 = $(".popup-container"); 
  // тут указываем ID элемента
  if (!div1.is(e.target) // если клик был не по нашему блоку
      && div1.has(e.target).length === 0) { // и не по его дочерним элементам
        $(".popup").fadeOut(500);
    // скрываем его
  }
});


