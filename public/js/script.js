function nextCarousel(){isChanging||(isChanging=!0,$("#carousel"+currentIndex).animate({left:-1200},500),currentIndex=++currentIndex>3?0:currentIndex,$("#carousel"+currentIndex).show().css({left:1200}).animate({left:0},500,function(){isChanging=!1}))}function previousCarousel(){isChanging||(isChanging=!0,$("#carousel"+currentIndex).animate({left:1200},500),currentIndex=--currentIndex<0?3:currentIndex,$("#carousel"+currentIndex).show().css({left:-1200}).animate({left:0},500,function(){isChanging=!1}))}function openModal(a){$("body").css({overflow:"hidden"}),$("#overlay").show().find("#modal").css({animation:"modal-open 1s"}).find("div").hide(),$("#"+a).show()}function closeModal(){$("body").css({overflow:""}),$("#overlay").hide().find("#modal").css({animation:""})}$(function(){$("#nav-bar a").click(function(){var a=$(this.hash);return a.length?($("html, body").animate({scrollTop:a.offset().top-46},500),!1):void 0}),$("#carousel0").show(),setInterval(nextCarousel,5e3)}),$(window).scroll(function(){var a=window.scrollY;a>100?$("#nav-bar").addClass("small"):$("#nav-bar").removeClass("small"),$("#nav-bar a").each(function(){var b=$($(this).attr("href"));a>=b.offset().top-46&&a<b.offset().top-46+b.outerHeight()?$(this).addClass("focus"):$(this).removeClass("focus")})}).scroll();var currentIndex=0,isChanging=!1;