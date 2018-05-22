$(document).ready(function(){



  $(window).scroll(function(){
    if($(this).scrollTop()>300){
      $('.call-to-top').fadeIn();
    } else {
      $('.call-to-top').fadeOut();
    }
  });


  $('.call-to-top').click(function(){
  $("html,body").animate({
    scrollTop:0
  },);
  });
  /*-----for wow js -----*/
  new WOW().init();
/*------------- for search bar ---*/
$(".fa-search").click(function(){
  $(".search-box").fadeToggle();
});

/*--------------*/
/*-- counterup
/*-------*/
$('.counter').counterUp({
    delay: 10,
    time: 2000
});
/*---------*/
/*---- for fixed navbar
/*-*/
$(window).scroll(function(){
  if($(this).scrollTop()>50){
    $('#navbar').addClass('sticky');
  }
  else {
    $('#navbar').removeClass('sticky');
  }
})

/*----------*/
/*--- for smooth scroll-*/
$('.navbar-menu li a').click(function() {
   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
   && location.hostname == this.hostname) {
     var $target = $(this.hash);
     $target = $target.length && $target
     || $('[name=' + this.hash.slice(1) +']');
     if ($target.length) {
       var targetOffset = $target.offset().top;
       $('html,body')
       .animate({scrollTop: targetOffset}, 1000);
      return false;
     }
   }
 });




 /*---- for sidebar toggleClass----*/

    $('.sidebar-btn').click(function(){
      $('.sidebar').toggleClass('active');
      $('.sidebar-btn').toggleClass('toggle');

    })
    $('.department').click(function(){
      $('.department-d').slideToggle('slow');
    })
    /*---------- events toggle-*/
    $('.events').click(function(){
      $('.events-d').slideToggle('slow');
    })
/*---------- home toggle-*/
    $('.home').click(function(){
      $('.home-d').slideToggle('slow');
    })



})
