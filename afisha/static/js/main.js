/*
Reference: http://jsfiddle.net/BB3JK/47/
*/


$( document ).ready(function() {

$(".popup_input").keypress(function (e)  
    { 
        $('.popup_bg').addClass("active") 
        
         $('.private-office_first-popup').addClass("active") 
           $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".popup_input"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $('.popup_bg').removeClass("active")
             $('.private-office_first-popup').removeClass("active")  // скрываем его
        }
    });


    });




$('.burger').click(function(){
	$('.header-bottom').fadeIn()


	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".header-bottom"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.fadeOut(); // скрываем его
		}
	});
});

if ($(window).width() > 100) {

  	
$('.btn_promocode').click(function(){

	$('.private-office_first-popup.second').fadeIn()
	$('.popup_bg').fadeIn()

	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".private-office_first-popup"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.fadeOut()
			$('.popup_bg').fadeOut(); // скрываем его
		}
	});


});
$('.btn_sales').click(function(){
	$('.private-office_first-popup.first').fadeIn()
	$('.popup_bg').fadeIn()
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".private-office_first-popup"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.fadeOut()
			$('.popup_bg').fadeOut(); // скрываем его
		}
	});
});


  }  


 
});





$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});;

$(function () {
                $('#datetimepicker2').datetimepicker({
                    format: 'L'
                });
                $('#datetimepicker3').datetimepicker({
                    format: 'HH:mm'
                });
            });

$('#phone').inputmask();
$('#phone-1').inputmask();
// Начинать писать отсюда!!!!