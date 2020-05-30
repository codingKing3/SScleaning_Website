$(function(){

//$("#turnOff").hide(); //slow , fast
//$("a").eq(1).hide(); // hiding link for later us
//$("a").eq(2).hide();
$("h2").css("color","red");
$("#p_number").css({"text-decoration":"underline"},{"width":"300px"});
$("#p_number").show('slow');
$("#images-link").css({"pointer-events":"none"});
$("#resources-link").css({"pointer-events":"none"});


// add below just to override anchors for now
$("a").click(function(){
    alert('These links are not funtion yet');

});

$("#mainNav").hover(function(){
   $(this).css({"font-size":"50%"});
});
/*
code to create smooth scroll
*/

const change_size = window.matchMedia("max-width: 768px");
const screenSize = document.documentElement.clientWidth;

// listen for size change
screenSize.addEventListener(function(){
  if ($(window).width() < 768){
      alert('reached size');
      document.h1.style.fontSize = "21px";
  }

});




}); // end ready load function
