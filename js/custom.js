$(function(){

//$("#turnOff").hide(); //slow , fast
//$("a").eq(1).hide(); // hiding link for later us
//$("a").eq(2).hide();
$("h2").css("color","red");
$("#p_number").css({"text-decoration":"underline"},{"width":"300px"});
$("#p_number").show('slow');

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






}); // end ready load function
