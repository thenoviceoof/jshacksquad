// --------------------------------------------------------------------
// hs-grid.js
// --------------------------------------------------------------------

$(function() {
	$("#slider").slider({value:50,});
	$("#slider").bind("slide",function(event, ui) {
		returnSlider(this);
	    });
    });

function returnSlider(slider) {
    // if the slider is not already occupied
    // otherwise, we get a bajillion callbacks
    if($(slider).slider("value") == 50) {
	setTimeout(function(){returnSliderToMiddle(slider)},100);
    }
}

function returnSliderToMiddle(slider) {
    var val = $(slider).slider("value");
    // if within some threshold, stop
    if(Math.abs(val-50) < 5) {
	$(slider).slider("value",50);
	return;
    }
    var velocity = (50-val)/3;
    $(slider).slider("value",val+velocity);
    console.log(val);
    setTimeout(function(){returnSliderToMiddle(slider)},50);
}

function positionOverlays(target) {
}

$(document).ready(function() {
	positionOverlays($("#current_tutorial")[0]);
	$(document).resize(positionOverlays);
	
	$(".categories").click(function(e){
		e.preventDefault();
		return false;
	    });
    });