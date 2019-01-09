window.onload = function() {
  $("h1").addClass("faded");
  $("h2").addClass("faded");
};

$(".middle-box").hover(function(){
  $('#passion-header').addClass('moveup');
}, function() {
  $('#passion-header').removeClass('moveup');
});

$(".leg-exp").hover(function(){
  $(this).siblings('.floating').addClass('shad-change');
}, function() {
  $(this).siblings('.floating').removeClass('shad-change');
});

$(".leg-passion").hover(function(){
  $(this).siblings('.floating').addClass('shad-change');
}, function() {
  $(this).siblings('.floating').removeClass('shad-change');
});

$(".leg-skills").hover(function(){
  $(this).siblings('.floating').addClass('shad-change');
}, function() {
  $(this).siblings('.floating').removeClass('shad-change');
});

$(".leg-proj").hover(function(){
  $(this).siblings('.floating').addClass('shad-change');
}, function() {
  $(this).siblings('.floating').removeClass('shad-change');
});

$(".leg-chat").hover(function(){
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
