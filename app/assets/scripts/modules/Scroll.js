var $=require("jquery");

$(".site-header__scroll-down__link").click(function(){
    $("html,body").animate({scrollTop:$(".js__scroll-slides").offset().top},1000);
    return false;
});
$(".btn__yellow").click(function(){
    $("html,body").animate({scrollTop:$(".js__scroll-contact").offset().top},1500);
    return false;
});
