var $=require("jquery");


$(".js__open").click(function(){
     $(".modal").addClass("modal--is-visible");
    return false;
});

$(".modal__close").click(function(){
     $(".modal").removeClass("modal--is-visible");
    return false;
});

$(document).keyup(function(event){
    if(event.keyCode === 27){
     $(".modal").removeClass("modal--is-visible");
    }
    return false;
});