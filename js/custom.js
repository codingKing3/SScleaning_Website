$(function(){

//$("#turnOff").hide(); //slow , fast
$("a").eq(1).hide();
$("a").eq(2).hide();
$("h2").css("color","red");
$("#phone_block").css({"padding-right":"0px"});
$("#p_number").css({"text-decoration":"underline"},{"width":"300px"});
$("#p_number").show('slow');

// add below just to override anchors for now
$("a").click(function(){
    alert('These links are not funtion yet');

});








}); // end ready load function
