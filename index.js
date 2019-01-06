window.onload = function() {
  $("h1").addClass("faded");
  $("h2").addClass("faded");
};

$(".leg-exp").on("mouseover", function() {
  $(".selection").text("Level 3. See how I got my EXP points.");
  $(".selection").css('opacity', '1');
});

$(".leg-passion").on("mouseover", function() {
  $(".selection").text("HP Full. Check out what drives me.");
  $(".selection").css('opacity', '1');
});

$(".leg-skills").on("mouseover", function() {
  $(".selection").text("My skills are super effective, take a look.");
  $(".selection").css('opacity', '1');
});

$(".leg-proj").on("mouseover", function() {
  $(".selection").text("Want to see what's in my bag?");
  $(".selection").css('opacity', '1');
});

$(".leg-chat").on("mouseover", function() {
  $(".selection").text("Chat with me.");
  $(".selection").css('opacity', '1');
});


$(document).ready(function() {

  var active0 = false;
  var active1 = false;
  var active2 = false;
  var active3 = false;
  var active4 = false;
  var active5 = false;

  $('.parent2').on('click', function() {

    if (!active0) $(this).find('.test0').css({
      'transform': 'translate(0px,100px)',
      'opacity': '1'
    });
    else $(this).find('.test0').css({
      'transform': 'none',
      'opacity': '0'
    });

    if (!active1) $(this).find('.test1').css({
      'transform': 'translate(0px,180px)',
      'opacity': '1'
    });
    else $(this).find('.test1').css({
      'transform': 'none',
      'opacity': '0'
    });
    if (!active2) $(this).find('.test2').css({
      'transform': 'translate(0px,260px)',
      'opacity': '1'
    });
    else $(this).find('.test2').css({
      'transform': 'none',
      'opacity': '0'
    });
    if (!active3) $(this).find('.test3').css({
      'transform': 'translate(0px,340px)',
      'opacity': '1'
    });
    else $(this).find('.test3').css({
      'transform': 'none',
      'opacity': '0'
    });
    if (!active4) $(this).find('.test4').css({
      'transform': 'translate(0px,420px)',
      'opacity': '1'
    });
    else $(this).find('.test4').css({
      'transform': 'none',
      'opacity': '0'
    });
    if (!active4) $(this).find('.test5').css({
      'transform': 'translate(0px,500px)',
      'opacity': '1'
    });
    else $(this).find('.test5').css({
      'transform': 'none',
      'opacity': '0'
    });

    active0 = !active0;
    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
    active4 = !active4;
    active5 = !active5;

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

window.addEventListener("scroll", myScrollFunc);
