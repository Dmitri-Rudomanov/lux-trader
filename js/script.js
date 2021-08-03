
  function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
  callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {

  if (support == true) {
  document.querySelector('body').classList.add('webp');
  }else{
  document.querySelector('body').classList.add('no-webp');
  }
  });
 
function ibg() {
 let ibg=document.querySelectorAll(".ibg");
 for (var i = 0; i < ibg.length; i++) {
 if(ibg[i].querySelector('img')){
 ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
 }
 }
 }
ibg();
 

// BurgerMenu
  $('.icon-menu').click(function(){
        $('.icon-menu, .menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});

$('.menu__body').click(function(){
       $('.icon-menu, .menu__body').removeClass('active');
       $('body').removeClass('lock');
});

$('.user-header__icon').click(function(){
        $('.user-header__menu').toggleClass('active');
});


$(document).ready(function(){
	$('.main-slider__body').slick({
	 	arrows:true,
	 	dots:false,
		slidesToShow: 1,
		nextArrow:'.control-main-slider__arrow_next',
		prevArrow:'.control-main-slider__arrow_prev'
	//	accessibility: false,
	// 	slidesToScroll: 1,
	// 	easing: 'linear',
	// 	infinite: false,
    // initialSlide: 0,
     //appendArrows: $('control-main-slider'),
		// variableWidth:,
		// pauseOnDotsHover:true,
		// pauseOnHover:true,
		// pauseOnFocus:true,
		// rows:1-n,
		// touchMove:true,
		// (Sliders_connect)=>asNavFor:,
		// centerMode:false.
		// autoplay:true,
		// speed:1000,
		// autoplaySpeed: 3000,
		// adaptiveHeight: true,
		// draggable:true,
		// swipe:true,
		// mobileFirst: true;
		// responsive:[
		// {
		//  	breakpoint: 768,
		// 	settings: {
		 		
	 	// 	}
		// },
		// 	{
		// 		breakpoint: 550,
		// 		settings: {
		// 			slidesToShow:1
		// 		}
		// 	}
		// ]
	});

});
$(document).ready(function(){
	$('.slider-lots__body').slick({
	 	arrows:true,
	 	dots:false,
		slidesToShow: 3,
		prevArrow: '.control-slider-lots__arrow_prev',
		nextArrow: '.control-slider-lots__arrow_next',
		//accessibility: true,
	 	slidesToScroll: 1,
	 	easing: 'linear',
	 	infinite: true,
    // initialSlide: 0,
     //appendArrows: $('control-main-slider'),
		// variableWidth:,
		// pauseOnDotsHover:true,
		// pauseOnHover:true,
		// pauseOnFocus:true,
		// rows:1-n,
		// touchMove:true,
		// (Sliders_connect)=>asNavFor:,
		// centerMode:false.
		// autoplay:true,
		// speed:1000,
		// autoplaySpeed: 5000,
		 adaptiveHeight: false,
		 draggable:true,
		 swipe:true,
		// mobileFirst: true,
		 responsive:[
		 {
		  	breakpoint: 768,
		 	settings: {
		 	slidesToShow:2	
	 	 	}
		 },
		{
		 		breakpoint: 550,
		 		settings: {
		 			slidesToShow:1
		 		}
	 	}
		 ]
	});

});
$(document).ready(function(){
	$('.slider-quotes__body').slick({
	 	arrows:true,
		dots: false,
		
		slidesToShow: 1,
		prevArrow:'.control-slider-quotes__circle',
		nextArrow: '.control-slider-quotes__circle',
		//accessibility: true,
	 	slidesToScroll: 1,
	 	easing: 'linear',
	 	infinite: true,
    // initialSlide: 0,
     //appendArrows: $('control-main-slider'),
		// variableWidth:,
		// pauseOnDotsHover:true,
		// pauseOnHover:true,
		// pauseOnFocus:true,
		// rows:1-n,
		// touchMove:true,
		// (Sliders_connect)=>asNavFor:,
		// centerMode:false.
		// autoplay:true,
		// speed:1000,
		// autoplaySpeed: 5000,
		 adaptiveHeight: false,
		// draggable:true,
		// swipe:true,
		// mobileFirst: true,
		//  responsive:[
		//  {
		//   	breakpoint: 768,
		//  	settings: {
		//  	slidesToShow:2	
	 	//  	}
		//  },
		// {
		//  		breakpoint: 550,
		//  		settings: {
		//  			slidesToShow:1
		//  		}
	 	// }
		//  ]
	});

});

