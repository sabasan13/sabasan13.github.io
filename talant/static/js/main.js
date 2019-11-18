$(document).ready(function(){

	$(".phone-input").mask("+7 (99) 99 99 999");
	$('textarea').each(function () {
	  this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
	}).on('input', function () {
	  this.style.height = 'auto';
	  this.style.height = (this.scrollHeight) + 'px';
	});

	/*-----VERIFICATION-----*/
	$(".verification-line__status").click(function(){
		$(".verification__drop").slideUp(300);
		if($(this).hasClass("verification-line__status_unconfirmed_email")){
			if($(".verification__drop__email").hasClass("active")){
				$(".verification__drop__email").removeClass("active");
			}else{
				$(".verification__drop").removeClass("active");
				$(".verification__drop__email").slideDown(300);
				$(".verification__drop__email").addClass("active");
			}
		}else{
			if($(this).hasClass("verification-line__status_unconfirmed_phone")){
				if($(".verification__drop__phone").hasClass("active")){
					$(".verification__drop__phone").removeClass("active");
				}else{
					$(".verification__drop").removeClass("active");
					$(".verification__drop__phone").slideDown(300);
					$(".verification__drop__phone").addClass("active");
				}
			}else{
				if($(this).hasClass("verification-line__status_unconfirmed_passport")){
					if($(".verification__drop__passport").hasClass("active")){
						$(".verification__drop__passport").removeClass("active");
					}else{
						$(".verification__drop").removeClass("active");
						$(".verification__drop__passport").slideDown(300);
						$(".verification__drop__passport").addClass("active");
					}
				}else{
					if($(this).hasClass("verification-line__status_unconfirmed_oo")){
						if($(".verification__drop__oo").hasClass("active")){
							$(".verification__drop__oo").removeClass("active");
						}else{
							$(".verification__drop").removeClass("active");
							$(".verification__drop__oo").slideDown(300);
							$(".verification__drop__oo").addClass("active");
						}
					}
				}	
			}	
		}
	});


	/*-----REGISTRATE-----*/
	$(".registration-container__left__button").click(function(){
		console.log(1);
		if($(".registration").hasClass("login")){
			$(".registration").removeClass("login");
			$(".registration").addClass("animate");
			setTimeout(function(){
				$(".registration").removeClass("animate");
			}, 700);
		}else{
			$(".registration").addClass("login");
			$(".registration").addClass("animate");
			setTimeout(function(){
				$(".registration").removeClass("animate");
			}, 700);
		}
	});

	/*-----NOTIFICATION-----*/
	hidetail();
	$(".header__user-panel__notification .header__user-panel__interact__button svg").click(function(){
		$(".header__user-panel__notification__drop-setings").slideUp(100);
		if($(".header__user-panel__notification").hasClass("active")){
			$(".header__user-panel__notification").removeClass("active");
			$(".header__user-panel__notification__drop").slideUp(100);
			if($(window).width()<=768){
				$(".notification-shadow").hide();
			}
		}else{
			$(".header__user-panel__notification").addClass("active");
			$(".header__user-panel__notification__drop").slideDown(100);
			if($(window).width()<=768){
				$(".notification-shadow").show();
			}
		}
		setheight();
	});
	$(document).mouseup(function (e){
		var div = $(".header__user-panel__notification__drop");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0 && !$(".header__user-panel__notification .header__user-panel__interact__button svg").is(e.target)
		    && $(".header__user-panel__notification .header__user-panel__interact__button svg").has(e.target).length === 0 && !$(".header__user-panel__notification__drop-setings").is(e.target)
		    && $(".header__user-panel__notification__drop-setings").has(e.target).length === 0) { 
			div.slideUp(300);
			$(".header__user-panel__notification__drop-setings").slideUp(100);
			$(".header__user-panel__notification").removeClass("active");
			if($(window).width()<=768){
				$(".notification-shadow").hide();
			}
		}
	});
	$(".header__user-panel__notification__drop__show-all span").click(function(){
		if($(this).hasClass("header__user-panel__notification__drop__show-all__show")){
			$(".header__user-panel__notification__drop__show-all").addClass("active");
			$(".header__user-panel__notification__drop__content__list__item").removeClass("header__user-panel__notification__drop__content__list__item_last");
			$(".header__user-panel__notification__drop__content__list__item").show();
		}else{
			if($(this).hasClass("header__user-panel__notification__drop__show-all__hide")){
				$(".header__user-panel__notification__drop__show-all").removeClass("active");
				hidetail();
			}
		}
		setheight();
	});
	$(".header__user-panel__notification__drop-setings__top__back").click(function(){
		
		$(".header__user-panel__notification__drop").slideDown(150);
		$(".header__user-panel__notification__drop-setings").slideUp(150);
	});
	$(".header__user-panel__notification__drop__open-setings svg").click(function(){
		$(".header__user-panel__notification__drop-setings").slideDown(150);
		$(".header__user-panel__notification__drop").slideUp(150);
		if($(window).width()<=768){
			$(".notification-shawow").show();
		}
	});
	/*-----CUSTOM SCROOL-----*/
	var custom = new Scrollbot(".header__user-panel__notification__drop__content");
	/*-----END NOTIFICATION-----*/
	$(".animated-icon3").click(function(){
		if($(".mob-menu").hasClass("active")){
			$(".mob-menu").removeClass("active");
			$("body").css("overflow","auto");
		}else{
			$(".mob-menu").addClass("active");
			$("body").css("overflow","hidden");
		}
	});
	$(document).mouseup(function (e){
		var div = $(".mob-menu__drop__content");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0 && !$(".animated-icon3").is(e.target)
		    && $(".animated-icon3").has(e.target).length === 0) { 
			$(".mob-menu").removeClass("active");
			$("body").css("overflow","auto");
		}
	});


	/*-----MESSAGES-----*/
	$(".header__user-panel__messages svg").click(function(){
		if($(".messages").hasClass("active")){
			$(".messages").removeClass("active");
			$(".header__user-panel__messages").removeClass("active");
			if($(window).width()<=500){
				$("body, html").css("overflow","auto");
			}
			
			
		}else{
			$(".messages").addClass("active");
			$(".header__user-panel__messages").addClass("active");
			if($(window).width()<=500){
				$("body, html").css("overflow","hidden");	
			}
			
		}		
	});
	$(".messages__close").click(function(){
		$(".messages").removeClass("active");
		$(".header__user-panel__messages").removeClass("active");
		if($(window).width()<=500){
			$("body, html").css("overflow","auto");
		}
		
	});
	$(document).mouseup(function (e){
		var div = $(".messages-container");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0 && !$(".header__user-panel__messages svg").is(e.target)
		    && $(".header__user-panel__messages svg").has(e.target).length === 0) { 
			$(".messages").removeClass("active");
			$(".header__user-panel__messages").removeClass("active");
		}
	});
	var custom2 = new Scrollbot(".messages-content__chats__list");
	var custom3 = new Scrollbot(".messages-content__user-chat-bar");
	custom3.refresh();
	$(".messages-content__chats__item").hide();
	for(var i=1; i<=6;i++){
		$(".messages-content__chats__list__items .messages-content__chats__item:nth-child("+i+")").show();
	}
	$(".messages-content__chats__show-all span").click(function(){
		$(".messages-content__chats__show-all").hide();
		$(".messages-content__chats__list__items .messages-content__chats__item").show();
		$(".messages-content__chats__list").css("height","calc(100% - 45px)");
		custom2.refresh();
	});
	$(".messages-content__user-chat__panel__back").click(function(){
		$(".messages-content").removeClass("active");
	});
	$(".messages-content__chats__item").click(function(e){
		var div = $(".messages-content__user-chat__panel__menu-drop");
		if (!$(".messages-content__chats__item__nickname").is(e.target)
		    && !$(".messages-content__chats__item__project").is(e.target)) { 
			/*-----
			Перебиваю переход по ссылке,
			по необходимости отключить
			-----*/
			event.preventDefault();
			$(".messages-content").addClass("active");
			custom3.refresh();
		}		
	});
	$(".messages-content__user-chat__panel__menu").click(function(){
		if($(".messages-content__user-chat__panel__menu").hasClass("active")){
			$(".messages-content__user-chat__panel__menu").removeClass("active");	
			$(".messages-content__user-chat__panel__menu-drop").slideUp(300);
		}else{
			$(".messages-content__user-chat__panel__menu").addClass("active");
			$(".messages-content__user-chat__panel__menu-drop").slideDown(300);
		}
	});
	$(document).mouseup(function (e){
		var div = $(".messages-content__user-chat__panel__menu-drop");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0 && !$(".messages-content__user-chat__panel__menu").is(e.target)
		    && $(".messages-content__user-chat__panel__menu").has(e.target).length === 0) { 
			div.slideUp(300);
			$(".messages-content__user-chat__panel__menu").removeClass("active");
		}
	});


	/*-----USER PANEL-----*/
	$(".type-account__title__master").click(function(){
		$(this).parent().removeClass("type-account_customer");
		$(this).parent().addClass("type-account_master");
	});
	$(".type-account__title__customer").click(function(){
		$(this).parent().addClass("type-account_customer");
		$(this).parent().removeClass("type-account_master");
	});
	$(".type-account .type-account__switch").click(function(){
		if($(this).parent().hasClass("type-account_customer")){
			$(this).parent().removeClass("type-account_customer");
			$(this).parent().addClass("type-account_master");
		}else{
			$(this).parent().addClass("type-account_customer");
			$(this).parent().removeClass("type-account_master");
		}
	});
	var custom4 = new Scrollbot(".whats-new__content");
	custom4.refresh();
	$(".user-panel__whats-new").click(function(){
		$(".whats-new").addClass("active");
		custom4.refresh();

	});
	$(".whats-new__close").click(function(){
		$(".whats-new").removeClass("active");
	});
	$(document).mouseup(function (e){
		var div = $(".whats-new__container");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0 ) { 
			$(".whats-new").removeClass("active");
	
		}
	});


	/*-----SETINGS MAIN-----*/
	if($(".setings-box__line__left_confirmation .checkbox-line__checkbox input").prop('checked')){
		$(".setings-box__line__confirmation-drop").slideDown(300);
	}else{
		$(".setings-box__line__confirmation-drop").slideUp(300);
	}
	$(".setings-box__line__left_confirmation").click(function(){
		if($(".setings-box__line__left_confirmation .checkbox-line__checkbox input").prop('checked')){
			$(".setings-box__line__confirmation-drop").slideDown(300);
		}else{
			$(".setings-box__line__confirmation-drop").slideUp(300);
		}
	});


	/*-----USER PANEL MOBILE-----*/
	$(".header__user-panel__user").click(function(){
		if($(window).width()<=500){
			$(".header__user-panel-mobile").addClass("active");
		}
	});
	$(".header__user-panel-mobile__close").click(function(){
		$(".header__user-panel-mobile").removeClass("active");
	});
	$(document).mouseup(function (e){
		var div = $(".header__user-panel-mobile__container");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0 ) { 
			$(".header__user-panel-mobile").removeClass("active");
		}
	});




	/*-----SELECT BOX-----*/
	$(".select-box__main").click(function(){
		parent=$(this).parent();
		console.log($());
		if(parent.hasClass("active")){
			parent.removeClass("active");
			parent.find(".select-box__drop").slideUp(300);
		}else{
			parent.addClass("active");
			parent.find(".select-box__drop").height(parent.find(".select-box__drop").height());
			parent.find(".select-box__drop").slideDown(300);
		}
	});
	$(".select-box__drop__item").click(function(){
		console.log($(this).attr("value"));
		$(this).parent().parent().parent().find("input, textarea").val($(this).attr("value"));
		$(this).parent().parent().parent().find(".select-box__main__text").text($(this).attr("value"));
		$(this).parent().parent().slideUp(300);
		$(this).parent().parent().parent().removeClass("active");
	});
	$(document).mouseup(function (e){
		if($("div").is(".select-box.active")){
			var div = $(document).find(".select-box.active");
			if (!div.is(e.target)
			    && div.has(e.target).length === 0 ) { 
				div.removeClass("active");
				div.find(".select-box__drop").slideUp(300);
			}
		}
	});


	/*-----SETINGS SPECIALIZATION-----*/
	
	var services1=new Scrollbot(".my-services");
	services1.refresh();
	
	$(".my-services__item__show-all").click(function(){
		$(this).parent().find(".my-services__item__body__line").show();
		$(this).hide();
	});



	/*-----POPUP-----*/
	$("*[custom-popup]").click(function(){
		var popup_name=$(this).attr("custom-popup");
		$("#"+popup_name).addClass("active");
		$("#"+popup_name).show();
	});
	$(".popup-close").click(function(){
		$(this).parent().parent().hide();
		$(this).parent().parent().removeClass("active");
	});
	$(document).mouseup(function (e){
		var div = $(document).find(".popup.active .popup-container");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0 ) { 
			div.parent().removeClass("active");
			div.parent().hide();
		}
	});


});




/*-----
убирает в none лишние уведомления
-----*/
function hidetail(){
	length_items=$(".header__user-panel__notification__drop__content__list__item").length;
	$(".header__user-panel__notification__drop__content__list__item").removeClass("header__user-panel__notification__drop__content__list__item_last");
	if(length_items>6){
		$(".header__user-panel__notification__drop__content__list__item").hide();
		for(var i=1; i<=6;i++){
			$(".header__user-panel__notification__drop__content__list__item:nth-child("+i+")").show();
		}
		$(".header__user-panel__notification__drop__content__list__item:nth-child("+6+")").addClass("header__user-panel__notification__drop__content__list__item_last");
	}
}


/*-----
задает высоту для блока уведомлений
(нужно для коректного отображения 
кастомного скролла)
-----*/
function setheight(){
	$(".header__user-panel__notification__drop__content").css("height","auto");
	$(".header__user-panel__notification__drop__content").css("height",$(".header__user-panel__notification__drop__content").height()+20+"px");
}




