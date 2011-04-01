// --------------------------------------------------------------------
// hs-grid.js
// --------------------------------------------------------------------

function slideLeft() {
}
function slideRight() {
}

function positionOverlays() {
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