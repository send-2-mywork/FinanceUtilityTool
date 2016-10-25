$(document).ready(function(){

	// Set CSS for Setting Icon
	var headerHeight = $('header.header').outerHeight();
	$('.settings-nav .icon').css({'height':headerHeight, 'width':headerHeight, 'line-height':headerHeight+'px' })
	$('.settings-nav > ul').css({'bottom':-headerHeight - 6});

	// Toggle Settings Navigation
	$('.settings-nav .icon').on('click', function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
		  $('.settings-nav > ul').animate({
		    opacity: '0'
		  }, 300);
			$('.settings-nav > ul').css({'display':'none'});
		} else {
			$(this).addClass('on');
			$('.settings-nav > ul').animate({
		    opacity: '1'
		  }, 300);
			$('.settings-nav > ul').css({'display':'block'});
		}
	});

	// For chrome
	var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
	var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

	if (isChrome){
		alert("You are using Chrome!");
	} 
	if (isSafari) {
		alert("You are using Safari!");
	}

	/* Setting Footer when least content */
	var bodyHeight = $('body').height();
	var windowHeight = $(window).height();
	console.log(bodyHeight);
	console.log(windowHeight);
	if(bodyHeight < windowHeight){
		$('body').css({'height': windowHeight});
		$('#footer').addClass('fixed');
	} 

	/* Dashboard Introduction Steps */

	var trip7 = new Trip([
	  { 
	  	sel : $("#navigation .navbar-nav li:nth-child(1)"), 
	  	content : "This is your dashboard. It will <br/>display all the Participants for <br />each of your plans as they are added.", 
	  	expose : true, 
	  	position : "s" 
	  },
	  { 
	  	sel : $("#navigation .navbar-nav li:nth-child(2)"), 
	  	content : "Team allows you to add <br />Team Members for assigning tasks.", 
	  	expose : true, 
	  	position : "s" 
	  },
	  { 
	  	sel : $("#navigation .navbar-nav li:nth-child(3)"), 
	  	content : "Need help? Want to create a ticket. <br />Start here to begin.", 
	  	expose:true, 
	  	position : "s" 
	  },
	  { 
	  	sel : $("#navigation .navbar-nav li:nth-child(5)"), 
	  	content : "Account allows you to modify your account settings, like password, name and email. ", 
	  	expose : true, 
	  	position : "s" 
	  },
	  { 
	  	sel : $(".operate-plans .addplan-btn"), 
	  	content : "Get started by adding a<br />Plan. Then you can begin<br /> adding Participants to <br /> unlock the Excel and <br /> PDF reports.", 
	  	expose : true, 
	  	position : "e" 
	  }  
	], {
		showNavigation : true,
	  showCloseBox : true,
	  delay : -1,
	  animation: 'fadeIn',
	  finishLabel:'Done',
	  skipLabel: ''
	});

	trip7.start();

	$("#date1").mask("99/99/9999");
	$("#date2").mask("99/99/9999", {placeholder: 'dd/mm/yyyy'});
		
});

/*$( window ).load(function() {
  // Run code
});*/