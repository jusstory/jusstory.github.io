$(document).ready(function(){
  /* pc 네비게이션  */
  $(".gnb li, .gnb .depth02, .navWrap").mouseenter(function(){
		$(".gnb .depth02, .navWrap").stop(true,false).slideDown(300);
	}).mouseleave(function(){
		$(".gnb .depth02, .navWrap").stop(true,false).slideUp(300);
	});
  $(".gnb li, .gnb .depth02, .navWrap").focusin(function() {
    $(".gnb .depth02, .navWrap").stop(true,false).slideDown(300);
  }).focusout(function() {
    $(".gnb .depth02, .navWrap").stop(true,false).slideUp(300);
  });

  /* 모바일 네비 */
  $(".mb_naviBar").click(function(){
    var wrapH = $("#wrap").height()
    $(".mb_nav").height(wrapH);
    console.log(wrapH);
    if( $(".mb_gnb").css("right") == "0px" ){
      $(".mb_nav").fadeOut(300);
      $(".mb_gnb").animate({"right":"-100%"}, "800" );
      $(".btn_close").animate({"right":"-100%"}, "800" );
    }else{
      $(".mb_nav").fadeIn(300);
      $(".mb_gnb").animate({"right":"0px"}, "800" );
      $(".btn_close").animate({"right":"60%"}, "1000" );
    }
  });

  $(".btn_close").click(function(){
    $(".mb_nav").fadeOut(300);
    $(".mb_gnb").animate({"right":"-100%"}, "800" );
    $(".btn_close").animate({"right":"-100%"}, "800" );
  });

  $(".mb_gnb > li").mouseenter(function(){
		$(this).addClass("on");
	}).mouseleave(function(){
		$(this).removeClass("on");
	});

  $(".mb_gnb > li > a").click(function(){
    var depth02 = $(this).next();
    if( depth02.css("display") == "none" ){
      $(".mb_gnb .depth02").slideUp(300);
      depth02.slideDown(300);
    }else{
      $(".mb_gnb .depth02").slideUp(300);
    }
  });


  /* 비주얼 배너 컨트롤러  */
  $('.visualWrap .train > li').css({"height":window.innerHeight});
    //맨뒤 한칸 앞으로 빼두기
  $(".visualWrap .train li:last").prependTo(".visualWrap .train");
	$(".visualWrap .train").css({"marginLeft":"-100%"});
    //다음버튼 클릭시
	$(".controller .next").click(function(){
		$(".visualWrap .train").animate({"marginLeft":"-=100%"} , "fast", function(){
			$(".visualWrap .train li:first").appendTo(".visualWrap .train");
			$(".visualWrap .train").css({"marginLeft":"-100%"}); // 한번 움직일때마다 순서 바꾸고 앞으로 기차칸빼기 가동
		});
    //컨트롤러 숫자 변경
    var visualNum=$(".visualWrap .train li:last").attr("class").substring(3,4);
    $(".controller .vs_num .num").text(visualNum);
    		return false ;
	});
    //이전버튼클릭시
  $(".controller .prev").click(function(){
		$(".visualWrap .train").animate({"marginLeft":"+=100%"} , "fast", function(){
			$(".visualWrap .train li:last").prependTo(".visualWrap .train");
			$(".visualWrap .train").css({"marginLeft":"-100%"}); // 한번 움직일때마다 순서 바꾸고 앞으로 기차칸빼기 가동
		});
    //컨트롤러 숫자 변경
    var visualNum=$(".visualWrap .train li:nth-child(1)").attr("class").substring(3,4);
    $(".controller .vs_num .num").text(visualNum);
		return false ;
	});

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    //console.log(scroll);
    if(scroll>500){
      $(".section01 .tit").css({"transform":"translateX(-"+(scroll)+"px)"});
    }
  });
  /* 섹션1  */
  $(".skillDT_list li a").click(function(){
    $(".skillDT_list li").removeClass("active");
    $(this).parent().addClass("active");
    var dtNum=$(this).parent().attr("class").substring(2,4);
    var ddNum=$(".skillDD_list li").attr("class").substring(2,4);
    $(".skillDD_list li").removeClass("active");
    $(".skillDD_list li.dd"+dtNum).addClass("active");
    return false;
  });
    //섹션1 의 화살표
  var arrowL = function () {
			$('.arrow').animate({
				'padding-right' : 15
			}, 800, function () {
				arrowR();
			});
		};
	var arrowR = function () {
		$('.arrow').animate({
			'padding-right' : 8
		}, 800, function () {
			arrowL();
		});
	}
	arrowL();

    //섹션1 의 화살표
  var arrowTop = function () {
      $('.arrow2').animate({
        'padding-top' : 0
      }, 800, function () {
        arrowBottom();
      });
    };
  var arrowBottom = function () {
    $('.arrow2').animate({
      'padding-top' : 8
    }, 800, function () {
      arrowTop();
    });
  }
  arrowTop();

  $( ".skillDT_list li.js_sl a" ).on( "click", function() {
      var $arrowEl = $( ".skillDT_list li.js_sl a .arrow" );
      $( ".skillDT_list li.js_sl a .arrow" ).remove();
      /*
      $( ".skillDT_list li.js_sl" ).each(function(i,el){
          if($(el).find(".arrow").length != 0){
              //arrowEl = $(el).find(".arrow");
              $(el).find(".arrow").remove();
          }
      });
      */
      //$(this).prepend('<img src="../images/btn/img_arrow.png" alt="화살표" class="arrow"/>');
      $(this).prepend($arrowEl);
  });

  /* 섹션3 */
    //1번째
    //맨뒤 한칸 앞으로 빼두기
    var sec03train1 = $(".sec03 .liBig .train.tr1");
  $(".sec03 .liBig .train.tr1 li:last").prependTo(sec03train1);
	$(sec03train1).css({"marginLeft":"-100%"});
   //타이머 작동
  var timer = 	window.setInterval(function(){
    $(sec03train1).animate({"marginLeft":"-=100%"} , "fast", function(){
			$(".sec03 .liBig .train.tr1 li:last").prependTo(sec03train1);
			$(sec03train1).css({"marginLeft":"-100%"}); // 한번 움직일때마다 순서 바꾸고 앞으로 기차칸빼기 가동
      })
  }, 2000);
    //2번째
    //맨뒤 한칸 앞으로 빼두기
    var sec03train2 = $(".sec03 .liBig .train.tr2");
  $(".sec03 .liBig .train.tr2 li:last").prependTo(sec03train2);
  $(sec03train2).css({"marginLeft":"-100%"});
   //타이머 작동
  var timer = 	window.setInterval(function(){
    $(sec03train2).animate({"marginLeft":"-=100%"} , "fast", function(){
      $(".sec03 .liBig .train.tr2 li:last").prependTo(sec03train2);
      $(sec03train2).css({"marginLeft":"-100%"}); // 한번 움직일때마다 순서 바꾸고 앞으로 기차칸빼기 가동
      })
  }, 2000);

  /* 디자인 갤러리 작동 */
  $(".gallerySmall li a").click(function(){
    $(this).parent().siblings("li").removeClass("on");
		//$(".gallerySmall li").removeClass("on");
		$(this).parent().addClass("on");
		var gallerySelect = $(this).children("img").attr("src");
    var thisGalleryBig = $(this).parents(".gallerySmall").prev(".galleryBig").children("img");
		$(thisGalleryBig).attr("src",gallerySelect );
		return false;
	});

	$(".galleryPaging .next").click(function(){
    var controlNumber = $(this).parents(".galleryWrap").find(".gallerySmall li").length;
    var gPagingOn = $(this).parents(".galleryWrap").find(".gallerySmall .on");
		if($(gPagingOn).index() < controlNumber-1){
				$(gPagingOn).next().children().click();
			} else{
				$(this).parents(".galleryWrap").find(".gallerySmall li:eq(0) a").click();
			}
			return false;
	});
	$(".galleryPaging .prev").click(function(){
    var controlNumber = $(this).parent().prev(".gallerySmall").children().children("li").length;
    var gPagingOn = $(this).parents(".galleryWrap").find(".gallerySmall .on");
		if($(gPagingOn).index() > 0){
				$(gPagingOn).prev().children().click();
			} else{
				$(this).parents(".galleryWrap").find(".gallerySmall li:eq("+(controlNumber-1)+") a").click();
			}
			return false;
	});

  $("#popup1").click(function(){
    fnShowLayer('#sec02Popup1');
  });
  $("#popup2").click(function(){
    fnShowLayer('#sec02Popup2');
  });
  $("#popup3").click(function(){
    fnShowLayer('#sec02Popup3');
  });

});
/* Layer popup */
function fnShowLayer(objName, wid) {

	var str = '<div id="lp_dim"></div>';
	var layerTop = $(document).scrollTop();
	var layerObj = $(".lp_wrap "+objName);
	layerObj.attr('tabindex', 0).focus();

	// $(".lp_wrap").append(str);
	$("#lp_dim").stop().fadeIn("fast");
	$("html, body").addClass("nyScroll");

	layerObj.show().parent().stop().fadeIn("fast").append(str);
	layerObj.focus();

	var rh = realHeight($(".lp_wrap "+objName));

	//console.log("realHeight",rh);

	var rePosition = function(){
		if(parseInt(rh)<$(window).height()) {
			layerObj.css({
				top: (($(window).height()/2) - (rh/2) ) +"px"
			});
		}
		//console.log($(window).height());
	}
	rePosition();

	$(layerObj).find(".lp_close, #lp_dim").off("click").on("click",function(e){
		e.preventDefault();
		hideLayer(layerTop,$(this));
  });

	$(window).resize(function(){
		rePosition();
	});
  // 팝업창 ESC키로 제어하기
	$(document).keyup(function(e) {
	    if ( e.keyCode == 27) {
	    	e.preventDefault();
			hideLayer(layerTop,$(this));
	    }
	});
	$(".lp_close, #lp_dim").off("click").on("click",function(e){
		e.preventDefault();
		hideLayer(layerTop,$(this));
	});
	//e.preventDefault();
}
function hideLayer(pos, closeObj){
	var layerObj = $(closeObj).closest('.lp_container');

	$("#lp_dim").stop().fadeOut("fast", 0, function() {$(this).remove();});
	$(".lp_wrap").scrollTop(0);
	$("html, body").removeClass("nyScroll");
	$(".lp_wrap").hide();

	$(layerObj).hide();
}


function realHeight(obj){
	var clone = obj.clone();
	$('body').append(clone);
	var height = clone.outerHeight();
	clone.remove();
	return height;
}

function realWidth(obj){
	var clone = obj.clone();
	$('body').append(clone);
	var width = clone.outerWidth();
	clone.remove();
	return width;
}
