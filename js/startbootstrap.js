/**
 * Created by yuan on 2015/8/4.
 */
$(document).ready(function(){
    $(" .nav li a").click(function(){
        var nav_id=$(this).attr("id");
        var show_id=nav_id+"_show";
        $(".page-wrapper>div").each(function(){
            var page_id=$(this).attr("id");
            if(show_id==page_id){
                $(this).css("display","block").siblings().css("display","none");
            }
        })
    })



    $("#toggleIcon").click(function(){
        $("body").toggleClass("sidebar-collapse");
//                if($("body").hasClass("sidebar-collapse")){
//                    $(".search").css("display","none");
//                    $(" #side-menu  li a span").css("display","none");
//                    $("#side-menu li ul:first").css("display","none");
//                }else{
//                    $(".search").css("display","block");
//                    $("#side-menu li a span").css("display","inline-block");
//                    $("#side-menu li ul:first").css("display","block");
//                }

    })
})