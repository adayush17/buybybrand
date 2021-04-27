;(function () {
	
	'use strict';



	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("<i></i>Phone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	
	

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-close-offcanvas");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('#fh5co-offcanvas').hasClass('animated fadeInLeft') ) {

    			$('#fh5co-offcanvas').addClass('animated fadeOutLeft');
				setTimeout(function(){
					$('#fh5co-offcanvas').css('display', 'none');	
					$('#fh5co-offcanvas').removeClass('animated fadeOutLeft fadeInLeft');
				}, 1000);
				$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

		$('body').on('click', '.js-fh5co-close-offcanvas', function(event){
		

	  		$('#fh5co-offcanvas').addClass('animated fadeOutLeft');
			setTimeout(function(){
				$('#fh5co-offcanvas').css('display', 'none');	
				$('#fh5co-offcanvas').removeClass('animated fadeOutLeft fadeInLeft');
			}, 1000);
			$('.js-fh5co-nav-toggle').removeClass('active');

	    	event.preventDefault();

		});

	};

	

	

	// Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			var $this = $(this);

			$('#fh5co-offcanvas').css('display', 'block');
			setTimeout(function(){
				$('#fh5co-offcanvas').addClass('animated fadeInLeft');
			}, 100);
			
			// $('body').toggleClass('fh5co-overflow offcanvas-visible');
			$this.toggleClass('active');
			event.preventDefault();

		});

	};

	var scrolledWindow = function() {

		$(window).scroll(function(){

			var header = $('#fh5co-header'),
				scrlTop = $(this).scrollTop();


		   $('#fh5co-home .flexslider .fh5co-overlay').css({
				'opacity' : (.5)+(scrlTop/2000)
		   });

		   if ( $('body').hasClass('offcanvas-visible') ) {
		   	$('body').removeClass('offcanvas-visible');
		   	$('.js-fh5co-nav-toggle').removeClass('active');
		   }
		 
		});

		$(window).resize(function() {
			if ( $('body').hasClass('offcanvas-visible') ) {
		   	$('body').removeClass('offcanvas-visible');
		   	$('.js-fh5co-nav-toggle').removeClass('active');
		   }
		});
		
	};


	

	// Page Nav
	var clickMenu = function() {
		var topVal = ( $(window).width() < 769 ) ? 0 : 58;

		$(window).resize(function(){
			topVal = ( $(window).width() < 769 ) ? 0 : 58;		
		});

		if ( $(this).attr('href') != "#") {
			$('#fh5co-main-nav a:not([class="external"]), #fh5co-offcanvas a:not([class="external"])').click(function(event){
				var section = $(this).data('nav-section');


				if ( $('div[data-section="' + section + '"]').length ) {

					$('html, body').animate({
			        	scrollTop: $('div[data-section="' + section + '"]').offset().top - topVal
			    	}, 500);	
			    	
			   }
			   event.preventDefault();

			});
		}

		


	};


	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){
					
					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );


	};


	// Document on load.
	$(function(){

		mobileMenuOutsideClick();
		burgerMenu();
		scrolledWindow();
		
		// Animations
		contentWayPoint();
		
		

	});


}());


//for share button

document.addEventListener('DOMContentLoaded',function(){
 
	//Initialize Fixed floating btn
	const shareButtons = document.querySelector('.fixed-action-btn');
	M.FloatingActionButton.init(shareButtons,{
		hoverEnabled:false
	});
	 
	 
	//Getting page information
	let current_url = window.location.href;
	let currentPage_title = document.title;
	 
	//Get icon ids
	let facebook = document.getElementById('fb');
	let twitter = document.getElementById('tw');
	let whatsapp = document.getElementById('wts');
	let linkedIn = document.getElementById('lnk');
	let googlePlus = document.getElementById('gp');
	 
	//Facebook
	facebook.addEventListener('click',function(){
		let fb_shareUrl = "https://www.facebook.com/sharer/sharer.php?u="+current_url;
		let window_size = "width=565,height=569";
		window.open(fb_shareUrl,"","menubar=no,resizeable=yes,scrollbars=yes,"+window_size);
		return false;
	});
	 
	 
	//Twitter
	twitter.addEventListener('click',function(){
		let tw_shareUrl = "https://twitter.com/intent/tweet?text="+currentPage_title+"&url="+current_url;
		let window_size = "width=565,height=569";
		window.open(tw_shareUrl,"","menubar=no,resizeable=yes,scrollbars=yes,"+window_size);
		return false;
	});
	 
	 
	//Whatapp
	whatsapp.addEventListener('click',function(){
		let wts_shareUrl = "whatsapp://send?text="+current_url;
		let window_size = "width=565,height=569";
		window.open(wts_shareUrl,"","menubar=no,resizeable=yes,scrollbars=yes,"+window_size);
		return false;
	});
	 
	 
	//LinkedIn
	linkedIn.addEventListener('click',function(){
		let lnk_shareUrl = "https://www.linkedin.com/cws/share?url="+current_url;
		let window_size = "width=565,height=569";
		window.open(lnk_shareUrl,"","menubar=no,resizeable=yes,scrollbars=yes,"+window_size);
		return false;
	});
	 
	 
	//Google Plus
	googlePlus.addEventListener('click',function(){
		let gp_shareUrl = "https://plus.google.com/share?url="+current_url;
		let window_size = "width=565,height=569";
		window.open(gp_shareUrl,"","menubar=no,resizeable=yes,scrollbars=yes,"+window_size);
		return false;
	});
	 
	 
	});