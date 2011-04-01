// --------------------------------------------------------------------
// hs-grid.js
// --------------------------------------------------------------------

function slideLeft() {
    $("#slideImg");
}
function slideRight() {
}

function positionOverlays() {
    $("nav#left").css("left",900);
}

$(document).ready(function() {
	positionOverlays();
	/* */
	$(document).resize(positionOverlays);
	
	$("nav#left").click(function(e){
		alert("hello world! Left");
	    });
	$("nav#right").click(function(e){
		alert("hello world! Right");
	    });
    });