// window.onload = function() {
//   $("h1").addClass("faded");
//   $("h2").addClass("faded");
// };


//Deffered CSS


AOS.init();
AOS.init({
  disable: function(){
    var maxWidth = 900;
    return window.innerWidth < maxWidth;
  },
});

$(".middle-box").hover(function() {
  $('#passion-header').addClass('moveup');
}, function() {
  $('#passion-header').removeClass('moveup');
});

$(".leg-exp").hover(function() {
  $(this).siblings('.floating').addClass('shad-change');
}, function() {
  $(this).siblings('.floating').removeClass('shad-change');
});

$(".leg-passion").hover(function() {
  $(this).siblings('.floating').addClass('shad-change');
}, function() {
  $(this).siblings('.floating').removeClass('shad-change');
});

$(".leg-skills").hover(function() {
  $(this).siblings('.floating').addClass('shad-change');
}, function() {
  $(this).siblings('.floating').removeClass('shad-change');
});

$(".leg-proj").hover(function() {
  $(this).siblings('.floating').addClass('shad-change');
}, function() {
  $(this).siblings('.floating').removeClass('shad-change');
});

$(".leg-chat").hover(function() {
  $(this).siblings('.floating').addClass('shad-change');
}, function() {
  $(this).siblings('.floating').removeClass('shad-change');
});

$("#lines").on({
  click: function() {
    $("#line3").toggleClass('line3clicked');
    $("#line2").toggleClass('line2clicked');
  }
});

var flip1 = false;
var flip2 = false;
var flip3 = false;

$("#inner-1").on({
  click: function() {
    $(this).toggleClass('flip');
    flip1 = !flip1;
    if (flip3){
      $("#inner-3").toggleClass('flip');
      flip3 = !flip3;
    }
    if (flip2){
      $("#inner-2").toggleClass('flip');
      flip2 = !flip2;
    }
  }
});
$("#inner-2").on({
  click: function() {
    $(this).toggleClass('flip');
    flip2 = !flip2;
    if (flip1){
      $("#inner-1").toggleClass('flip');
      flip1 = !flip1;
    }
    if (flip3){
      $("#inner-3").toggleClass('flip');
      flip3 = !flip3;
    }
  }
});
$("#inner-3").on({
  click: function() {
    $(this).toggleClass('flip');
    flip3 = !flip3;
    if (flip1){
      $("#inner-1").toggleClass('flip');
      flip1 = !flip1;
    }
    if (flip2){
      $("#inner-2").toggleClass('flip');
      flip2 = !flip2;
    }
  }
});

$(document).ready(function() {

  var active0 = false;

  $('.parent2').on('click', function() {
    if (!active0) {
      $(this).find('.test0').css({
        'transform': 'translate(0px,100px)',
        'opacity': '1'
      })
      $(this).find('.test1').css({
        'transform': 'translate(0px,180px)',
        'opacity': '1'
      });
      $(this).find('.test2').css({
        'transform': 'translate(0px,260px)',
        'opacity': '1'
      });
      $(this).find('.test3').css({
        'transform': 'translate(0px,340px)',
        'opacity': '1'
      });
      $(this).find('.test4').css({
        'transform': 'translate(0px,420px)',
        'opacity': '1'
      });
      $(this).find('.test5').css({
        'transform': 'translate(0px,500px)',
        'opacity': '1'
      });
    } else {
      $(this).find('.test0').css({
        'transform': 'none',
        'opacity': '0'
      });
      $(this).find('.test1').css({
        'transform': 'none',
        'opacity': '0'
      });
      $(this).find('.test2').css({
        'transform': 'none',
        'opacity': '0'
      });
      $(this).find('.test4').css({
        'transform': 'none',
        'opacity': '0'
      });
      $(this).find('.test3').css({
        'transform': 'none',
        'opacity': '0'
      });
      $(this).find('.test5').css({
        'transform': 'none',
        'opacity': '0'
      });
    }

    active0 = !active0;

  });
});

myID = document.getElementById("menu");

var myScrollFunc = function() {
  var y = window.scrollY;
  var x = $(window).height() - 50;
  if (y >= x) {
    myID.className = "parent2 show"
  } else {
    myID.className = "parent2 hide"
  }
};

window.addEventListener("scroll", myScrollFunc)








// $(function() {
//
//   var $meters = $(".meter > span");
//   var $section = $('#skills');
//   var $queue = $({});
//
//   function loadDaBars() {
//     $meters.each(function() {
//       var $el = $(this);
//       var origWidth = $el.width();
//       $el.width(0);
//       $queue.queue(function(next) {
//         $el.animate({
//           width: origWidth
//         }, 300, next);
//       });
//     });
//   }

//   $(document).bind('scroll', function(ev) {
//     var scrollOffset = $(document).scrollTop();
//     var containerOffset = $section.offset().top - window.innerHeight;
//     if (scrollOffset > containerOffset) {
//       loadDaBars();
//       // unbind event not to load scrolsl again
//       $(document).unbind('scroll');
//     }
//   });
//
// });



$(".contact-item").hover(function() {
  $(".contact-item > .para2").addClass('fade-down');
}, function() {
  $(".contact-item > .para2").removeClass('fade-down');
});


$(".proj-box-0").hover(function() {
  $(".proj-box-1, .proj-box-2, .proj-box-3").addClass('fade-down');
}, function() {
  $(".proj-box-1, .proj-box-2, .proj-box-3").removeClass('fade-down');
});

$(".proj-box-1").hover(function() {
  $(".proj-box-0, .proj-box-2, .proj-box-3").addClass('fade-down');
}, function() {
  $(".proj-box-0, .proj-box-2, .proj-box-3").removeClass('fade-down');
});

$(".proj-box-2").hover(function() {
  $(".proj-box-1, .proj-box-0, .proj-box-3").addClass('fade-down');
}, function() {
  $(".proj-box-1, .proj-box-0, .proj-box-3").removeClass('fade-down');
});

$(".proj-box-3").hover(function() {
  $(".proj-box-1, .proj-box-2, .proj-box-0").addClass('fade-down');
}, function() {
  $(".proj-box-1, .proj-box-2, .proj-box-0").removeClass('fade-down');
});
