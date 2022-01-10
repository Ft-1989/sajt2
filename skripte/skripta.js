$(document).ready(function(){
    $("#hamburger").click(function(){
        if($(this).attr("src") == "./images/icon-hamburger.svg"){
            $(this).attr("src", "./images/icon-close.svg");
            $("#logo-header").attr("src", "./images/logo-bookmark-white.svg")
            $(".navbar").css("display", "flex");
            $("body").css("overflow", "hidden");
        }else{
            $(this).attr("src", "./images/icon-hamburger.svg");
            $("#logo-header").attr("src", "./images/logo-bookmark.svg")
            $(".navbar").css("display", "none");
            $("body").css("overflow", "unset");
        }
    });

    var tabs = document.getElementsByClassName("tab");

    $(".t1").click(function(){
        for(var i = 0; i<tabs.length; i++){
            $(tabs[i]).css("display", "none");
        }
        $(tabs[0]).css("display", "flex");
        $(this).css("border-color", "var(--Soft-Red)");
        $(".t2").css("border-color", "transparent");
        $(".t3").css("border-color", "transparent");
    });
    $(".t2").click(function(){
        for(var i = 0; i<tabs.length; i++){
            $(tabs[i]).css("display", "none");
        }
        $(tabs[1]).css("display", "flex");
        $(this).css("border-color", "var(--Soft-Red)");
        $(".t1").css("border-color", "transparent");
        $(".t3").css("border-color", "transparent");
    });
    $(".t3").click(function(){
        for(var i = 0; i<tabs.length; i++){
            $(tabs[i]).css("display", "none");
        }
        $(tabs[2]).css("display", "flex");
        $(this).css("border-color", "var(--Soft-Red)");
        $(".t2").css("border-color", "transparent");
        $(".t1").css("border-color", "transparent");
    });

    $(".q").click(function(){
        if($(this).closest(".qna").children(".a").css("display") == "none"){
            $(".a").hide(100);
            $(this).closest(".qna").children(".a").show(100);
            $(this).css("border-color", "transparent");  
        }else{
            $(this).closest(".qna").children(".a").hide(100);
            $(this).css("border-color", "hsl(229deg 8% 60% / 50%)");  
        }
                     
    });
    
});