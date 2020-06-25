;
// Начинать писать отсюда!!!!

jQuery(document).ready(function($) {
    $('.youtube svg').click(function(){
        $('.youtube svg, .youtube img').fadeOut();
    });
    $('.popup-doc__btn').click(function(){
        $('.popup-doc').fadeIn();
    });
    $('.close').click(function(){
        $('.popup').fadeOut();
    });

    
    $('.input-email').click(function(){
        $('#find input[name="phone"').attr('name', 'email');
        $('input[name="email"').attr('placeholder', 'Ваш email');
        $('.input-email').hide();
        $('.input-phone').show();
        
        $('input[name="email"').inputmask('remove');;
        validateFind();
    });
    $('.input-phone').click(function(){
      $('#find input[name="email"').attr('name', 'phone');

      $('input[name="phone"').attr('placeholder', 'Ваш телефон');
      $('.input-email').show();
      $('.input-phone').hide();
      
      $('input[name="phone"').inputmask({"mask": "+7 (999) 999-99-99"});
      validateFind();
  });



    $('input[name="phone"').inputmask({"mask": "+7 (999) 999-99-99"});

        $("#form").validate({
          rules:{
             name:{
               required: true,
               minlength: 4,
               maxlength: 16,
             },
             phone:{
               required: true,
             },
          },
          messages:{
            name:{
              required: "Ошибка заполнения поля",
              minlength: "Ошибка заполнения поля",
              maxlength: "Ошибка заполнения поля",
          },
          phone:{
            required: "Ошибка заполнения поля",
            },
          }
       });
       validateFind();
       function validateFind() {
       $("#find").validate({
        rules:{
           name:{
             required: true,
             minlength: 4,
             maxlength: 16,
           },
           phone:{
             required: true,
           },

            mark:{
                required: true,
            },
            year:{
                required: true,
            },
            email:{
                required: true,
            },


        },
        messages:{
          name:{
            required: "Ошибка заполнения поля",
            minlength: "Ошибка заполнения поля",
            maxlength: "Ошибка заполнения поля",
        },
        phone:{
          required: "Ошибка заполнения поля",
          },
        mark:{
            required: "Ошибка заполнения поля",
            },
        year:{
                required: "Ошибка заполнения поля",
        },
        email:{
            required: "Ошибка заполнения поля",
        },

        }
     });
    };
    
    $(document).mouseup(function (e){
        var div1 = $(".popup-container");
        if (!div1.is(e.target) 
            && div1.has(e.target).length === 0) { 
              $('.popup').fadeOut();
        }
      });


      $("form").submit(function() { //Change
      var th = $(this);
      $.ajax({
        type: "POST",
        url: "/mail.php", //Change
        data: th.serialize()
      }).done(function() {
        $('.popup-success').fadeIn();
      
        setTimeout(function() {
          // Done Functions
          th.trigger("reset");
        }, 1000);
      });
      return false;
    });
});
