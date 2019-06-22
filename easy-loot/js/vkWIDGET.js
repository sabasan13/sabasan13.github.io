$( document ).ready(function() {
    $(window).scroll(function() {
        220 <= $(window).scrollTop() ? $(".authorization-mobile-on").addClass("stickytop") : $(".authorization-mobile-on").removeClass("stickytop")
    }), $(document).ready(function() {
        $("#carousel1").owlCarousel({
            autoplayTimeout: 7000,
            items: 1,
            loop: !0,
            dots: !0,
            mouseDrag: !1,
            autoplay: !0
        })
    }), $(document).ready(function() {
        $("#carousel2").owlCarousel({
            items: 1,
            loop: !0,
            dots: !1,
            nav: !0,
            mouseDrag: !1,
            animateOut: "slideOutDown",
            animateIn: "slideInDown",
            navText: ["<img src='img/arrow-back.png' alt=''>", " <img src='img/arrow-next.png' alt=''>"]
        })
    }), $(document).ready(function() {
        $("#nav-icon3").click(function() {
            return $(this).toggleClass("open"), $(".nav").slideToggle(), $(".filter").toggleClass("blur"), !1
        })
    });
});
$( document ).ready(function() {
    $("head").append('//userapi.com/js/api/openapi.js?52');
    var i = 1;
    $( "#carousel2" ).find('div').each(function() {
        var $this = $(this);
            setTimeout(function(){
                VK.Widgets.Post($this.data('id'), -180228082, $this.data('id'), $this.data('code'));
            }, 1500 * i);
        i++;
    });
});