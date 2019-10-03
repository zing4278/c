$(document).ready(function() {
	var buttonClicked = false;
	$(".menu").click(function() {
	buttonClicked = true;
		$(".noir").css("display", "block"), $(".noir").animate({
            opacity: .5
        }, 400), 
		$(".nav").animate({
            marginLeft: 409,
			width: 409
        }, 400)
	
	});
	$(".noir, .close").click(function(){
		$(".noir").css("display", "none"),
		$(".nav").animate({
            marginLeft: -545
        }, 400)
		
	});
	
	jQuery('body').on('click', '.see-bottom', function (event) {
		event.preventDefault();

		jQuery('html, body').animate({
            scrollTop: $("#aboutme").offset().top 
            // -100
		}, 700);
	});
	
		
	$(".classtest").click(function() {
		
		if ($("div.current").is(":visible")) {
			$("div.current").slideUp("slow", function() {
				$("div.current").removeClass("current");
				$("#img_01").slideDown("slow", function() {
					$("#img_01").addClass("current")
				})
			})
		} else {
			$("#img_01").slideDown("slow", function() {
				$("#img_01").addClass("current")
			})
		}
	});
	$(".classtest").mouseover(function(){
		alert()
	});	
	
	 $(".menu").mouseover(function() {
		buttonClicked = false;
        $(".ligne1").stop().animate({
            left: 18
        },200);
        $(".ligne3").stop().animate({
            left: 12
        },200)
		$(".nav").stop().animate({
			 marginLeft: 90 + "px"
		},100)
    });
	
    $(".menu").mouseout(function() {
	
        $(".ligne1").stop().animate({
            left: 15
        },200);
        $(".ligne3").stop().animate({
                left: 15
            },200)
		if(!buttonClicked){
		$(".nav").stop().animate({
			 marginLeft: 0
		},100)
		}
    });
	
	$(".projets a").mouseover(function() {
        $(this).stop().animate({
            color: "rgba(248, 123, 0, 1)",
            marginRight: 50
        }, 200)
    });
    $(".projets a").mouseout(function() {
        $(this).stop().animate({
            color: "rgba(0, 0, 0, 1)",
            marginRight: 60
        }, 200)
    });
	
	$(".projets a").click(function() {
        $(this).addClass("selected")
    });
	
	var stickyLeftNav = $(".nav").offset().top ;
	
	var leftNav = function(){
		var scrollTop = $(window).scrollTop() >= 100;
			  
			if (scrollTop > stickyLeftNav) { 
				$(".nav").stop().animate({
					 marginLeft: 90 + "px"
				},100)
			} else {
				$(".nav").stop().animate({
					 marginLeft: 0 + "px"
				},100) 
			}
	};
    
    	var navtop = $("body").offset().top;
	var stickyNav = function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop-110 > navtop){
                   $('.logo').stop().animate({width:'57px', height:'90px'},500, 'easeOutElastic');
               } else {
                   $('.logo').stop().animate({width:'344px', height:'107px'}, 500, 'easeOutElastic');
               }
	};
	
	$(window).scroll(function() {
		stickyNav();
	});
	
	
    $(".close_work").click(function() {
        $("div.work_item").slideUp("slow")
    });
    
});







