// <!-- Typed js Handler -->
var typed = new Typed('#element', {
    strings: ['Hello, I\'m'],
   typeSpeed: 100,
   loop: false,
    backSpeed: 0,
    backDelay: 100,
    startDelay: 1000,
});
// ============== ============= Scroll To top ==================
var btn = $('#scroll-to-top');

$(window).scroll(function() {
  if ( $(window).scrollTop() > 200) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// ============== ============= When scroll , header sticky ==================
$( window ).scroll(function(){
    let scrolltop = $( window ).scrollTop();
    let div = $( '#scroll-to-top' );
    
    if( scrolltop >= 100 ){
      div.fadeIn();
      $( '.header-wrapper' ).addClass('sticky');
    }else{
      div.fadeOut();
      $( '.header-wrapper' ).removeClass('sticky');
    }
  
  }); 
// ============== ============= Type Animation ==================
$(function(){
	$('.repeat').click(function(){
    	var classes =  $(this).parent().attr('class');
        $(this).parent().attr('class', 'animate');
        var indicator = $(this);
        setTimeout(function(){ 
        	$(indicator).parent().addClass(classes);
        }, 500);
    });
});

// ============== ============= Navigation Active Trigger ==================

jQuery(document).ready(function () {
  jQuery(".stellarnav ul li").click(function (){
    jQuery(this).children('a').addClass('active').parent('li').siblings().children('a').removeClass('active in-active');
  });
});

// ============== ============= Isotope Filter Handler ==================
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });

    // =============== Ui-design ==========
    $('#ui-design1').click(function(){
      $('#ui-design2').removeClass('d-none');
    });
    $('#all').click(function(){
      $('#ui-design2').addClass('d-none');
    });
    // =============== Ui-design ==========
    $('#ui-design1').click(function(){
      $('#ui-design3').removeClass('d-none');
    });
    $('#all').click(function(){
      $('#ui-design3').addClass('d-none');
    });

  // =============== graphic-design =========
  $('#graphic-design1').click(function(){
    $('#graphic-design2').removeClass('d-none');
  });
  $('#all').click(function(){
    $('#graphic-design2').addClass('d-none');
  });

  // =============== graphic-design =========
  $('#graphic-design1').click(function(){
    $('#graphic-design3').removeClass('d-none');
  });
  $('#all').click(function(){
    $('#graphic-design3').addClass('d-none');
  });

  // =============== web design =========
  $('#web-design1').click(function(){
    $('#web-design2').removeClass('d-none');
  });
  $('#all').click(function(){
    $('#web-design2').addClass('d-none');
  });

  // =============== web design =========
  $('#web-design1').click(function(){
    $('#web-design3').removeClass('d-none');
  });
  $('#all').click(function(){
    $('#web-design3').addClass('d-none');
  });
  // =============== web design =========
  $('#web-design1').click(function(){
    $('#web-design4').removeClass('d-none');
  });
  $('#all').click(function(){
    $('#web-design4').addClass('d-none');
  });


});


$( '.portfolio-wrapper .portfolio-image-gallery .button-group button' ).click(function(){
  $(this).addClass('active').siblings().removeClass('active in-active');
});

// =======================
jQuery('.stellarnav ul li a').click(function(){
  jQuery(this).parents('ul').css({
    'display':'none',
  });
});






