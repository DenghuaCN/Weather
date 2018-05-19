$(".circle").on("click",function() {
    if ($(this).css("width") === "50px") {
        $(this).animate({width:"1150px",height:"1150px",left:"-200px",top:"-200px"},550);
        $(".circle-content").slideDown(800,function() {
            $("#close").fadeIn(200);
        });
    }
})
$("#close_icon").on("click",function() {
    $("#close").hide();            
    $(".circle-content").slideUp(250);                
    $(".circle").animate({width:"50px",height:"50px",left:"20px",top:"20px"},500);    
    $(".close").hide();
})