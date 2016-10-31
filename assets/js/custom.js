/**	
	* Template Name: Intensely
	* Version: 1.2	
	* Template Scripts
	* Author: MarkUps
	* Author URI: http://www.markups.io/

	Custom JS
	
	0. HEADER
	1. SEARCH ENGINE
	2. HOVER DROPDOWN MENU
	3. BOOTSTRAP ACCORDION
	4. SKILL PROGRESS BAR
	5.LIGHTBOX ( FOR PORTFOLIO POPUP VIEW )
	6. MAIN SLIDER (SLICK SLIDER)
	7. LOGIN MODAL WINDOW
	8. COUNTER
	9. TESTIMONIAL SLIDER (SLICK SLIDER)
	10. CLIENTS BRAND SLIDER (SLICK SLIDER) 
	11. SCROLL TOP BUTTON
	12. PRELOADER 
	13. WOW ANIMATION
	14. FOOTER	
	
**/

jQuery(function($){

	/* ----------------------------------------------------------- */
	/*  0. HEADER
	/* ----------------------------------------------------------- */ 
	var documentWidth = $(window).width();
	if(documentWidth<=416){
		$('.navbar-brand img').css('width','120');
	}
	$(document).scroll(function() {
		var top = $('html').offset().top;
		var element = $("#header").offset().top;
		documentWidth = $(window).width();
		if (documentWidth>416){
			if (element>30){
				$('.navbar-brand img').css('width','200');			
				$('#menu-area').css('height','88');
				return;
			}
			else{
				$('.navbar-brand img').css('width','350');
				$('#menu-area').css('height','120');
				return;
			}
		}
		else{
			$('.navbar-brand img').css('width','120');
			$('#menu-area').css('height','90');
		}
	});
	
	/* ----------------------------------------------------------- */
	/*  1. SEARCH ENGINE
	/* ----------------------------------------------------------- */ 

	jQuery(function($){
		$('.footableHelp').footable({
			"empty": "No hay registros",
			"filtering": {"enabled": true,
				"delay": 1,
				"min": 1,
				"placeholder": "Qué buscas?"},
			"paging": {"enabled": true,
				"limit": 3,
				"size": 5},
			"sorting": {"enabled": true}
		});
	});
			
	/* ----------------------------------------------------------- */
	/*  2. HOVER DROPDOWN MENU
	/* ----------------------------------------------------------- */ 
	
	// for hover dropdown menu
  	$('ul.nav li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });

  	/* ----------------------------------------------------------- */
	/*  3. BOOTSTRAP ACCORDION
	/* ----------------------------------------------------------- */ 
	
	$('#accordion .panel-collapse').on('shown.bs.collapse', function () {
	$(this).prev().find(".fa").removeClass("fa-plus-square").addClass("fa-minus-square");
	});
	
	//The reverse of the above on hidden event:
	
	$('#accordion .panel-collapse').on('hidden.bs.collapse', function () {
	$(this).prev().find(".fa").removeClass("fa-minus-square").addClass("fa-plus-square");
	});	

	/* ----------------------------------------------------------- */
	/*  4. SKILL PROGRESS BAR
	/* ----------------------------------------------------------- */ 

	$('.progress .progress-bar').progressbar({
		display_text: 'center', percent_format: function(p) {return p + ' %';}});

	/* ----------------------------------------------------------- */
	/*  5. LIGHTBOX ( FOR PORTFOLIO POPUP VIEW ) 
	/* ----------------------------------------------------------- */ 
	
	$('body').append("<div id='portfolio-popup'><div class='portfolio-popup-area'><div class='portfolio-popup-inner'></div></div></div>");
	
	// WHEN CLICK PLAY BUTTON 
	
    jQuery('.view-icon').on('click', function(event) {
      event.preventDefault();
      $('#portfolio-popup').addClass("portfolio-popup-show");
      $('#portfolio-popup').animate({
	      "opacity": 1
      },500);   
      var portfolio_detailscontent = $(this).parent(".single-item-content").find(".portfolio-detail").html();
	  $(".portfolio-popup-inner").html(portfolio_detailscontent);     

    });  
           
    // WHEN CLICK CLOSE BUTTON
    
    $(document).on('click','.modal-close-btn', function(event) {     
	    event.preventDefault();
		$('#portfolio-popup').removeClass("portfolio-popup-show");
		$('#portfolio-popup').animate({
		      "opacity": 0
	    },500);  

    });
    

	/* ----------------------------------------------------------- */
	/*  6. MAIN SLIDER (SLICK SLIDER)
	/* ----------------------------------------------------------- */

	jQuery('.main-slider').slick({
		dots: true,
		infinite: true,
		speed: 500,
		autoplay: true,
		accessibility: false,
		fade: true,
		cssEase: 'linear'
	});

	/* ----------------------------------------------------------- */
	/*  7. LOGIN MODAL WINDOW
	/* ----------------------------------------------------------- */

	$("#search-icon").on('click', function(e){
		$('#search-form').show();
		e.preventDefault();		
	});

	$("#login-btn").on('click', function(e){
		$('#login-content').show();
		e.preventDefault();
				
	});

	/* ----------------------------------------------------------- */
	/*  8. COUNTER
	/* ----------------------------------------------------------- */ 

	  jQuery('.counter').counterUp({
            delay: 10,
            time: 1000
        });

	/* ----------------------------------------------------------- */
	/*  9. TESTIMONIAL SLIDER (SLICK SLIDER)
	/* ----------------------------------------------------------- */   

	jQuery('.testimonial-slider').slick({
		dots: true,
		infinite: true,
		speed: 500,
		autoplay: true,		
		cssEase: 'linear'
	});


	/* ----------------------------------------------------------- */
	/*  10. CLIENTS BRAND SLIDER (SLICK SLIDER)
	/* ----------------------------------------------------------- */   

	$('.clients-brand-slide').slick({
	  dots: false,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  autoplay: true,	
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

	/* ----------------------------------------------------------- */
	/*  11. SCROLL TOP BUTTON
	/* ----------------------------------------------------------- */

	//Check to see if the window is top if not then display button

	$(window).scroll(function(){
	    if ($(this).scrollTop() > 300) {
	      $('.scrollToTop').fadeIn();
	    } else {
	      $('.scrollToTop').fadeOut();
	    }
	});	   
	   
	//Click event to scroll to top

	$('.scrollToTop').click(function(){
	    $('html, body').animate({scrollTop : 0},800);
	    return false;
	});

	/* ----------------------------------------------------------- */
	/*  12. PRELOADER 
	/* ----------------------------------------------------------- */ 
	
	jQuery(window).load(function() { // makes sure the whole site is loaded
      $('#status').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(100).css({'overflow':'visible'});
    })

   
	/* ----------------------------------------------------------- */
	/*  13. WOW ANIMATION
	/* ----------------------------------------------------------- */ 

	wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        live:         true,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init(); 
	
});
   
	/* ----------------------------------------------------------- */
	/*  14. FOOTER
	/* ----------------------------------------------------------- */ 

		var isMobile = { 
		Android: function() { return navigator.userAgent.match(/Android/i); }, 
		BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); }, 
		iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, 
		Opera: function() { return navigator.userAgent.match(/Opera Mini/i); }, 
		Windows: function() { return navigator.userAgent.match(/IEMobile/i); }, 
		any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

		jQuery(function($) {
		    if (!isMobile.any()){
		    	$('.isMobileClass').hide();
		    	$('.isDesktopClass').show();
		    	//alert("1");
		    }
		    if (isMobile.any()){
		    	$('.isDesktopClass').hide();
		    }
		});
		