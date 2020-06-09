// Source: https://stackoverflow.com/questions/19158559/how-to-fix-a-header-on-scroll

var stickyOffset = $('.sticky').offset().top;

// $(window).scroll(function(){
//   var sticky = $('.sticky'),
//       scroll = $(window).scrollTop();

//   if (scroll >= stickyOffset) sticky.addClass('fixed');
//   else sticky.removeClass('fixed');

// });

$( window ).resize(function() {
  stickyOffset = $('.sticky').offset().top;
});

$(document).ready(function() {

  // $(window).scroll(function() {
  //   console.log('nut');

  //   $('.target').each(function() {
  //     if($(window).scrollTop() >= $(this).offset().top) {
  //         var id = $(this).attr('id');
  //         $('nav a').removeClass('active');
  //         $('nav a[href=#'+ id +']').addClass('actived');
  //     }
  //   });

    // $("#landing").waypoint(function() {
    //     // if (!typed) {
    //     //     sleep(1000);
    //     //     typeWriter("output", textArray);
    //     // }
    //     // typed = true;
    //     $("#nav").children("ul").children(".active").removeClass("active");
    //     $("#homeNav").addClass("active");
    // })

    // $("#software").waypoint(function() {
    //     // if (!typed) {
    //     //     sleep(1000);
    //     //     typeWriter("output", textArray);
    //     // }
    //     // typed = true;
    //     $("#nav").children("ul").children(".active").removeClass("active");
    //     $("#softwareNav").addClass("active");
    // })
    // $("#experience").waypoint(function() {
    //     // if (!typed) {
    //     //     sleep(1000);
    //     //     typeWriter("output", textArray);
    //     // }
    //     // typed = true;
    //     $("#nav").children("ul").children(".active").removeClass("active");
    //     $("#experienceNav").addClass("active");
    // })
  // });

})