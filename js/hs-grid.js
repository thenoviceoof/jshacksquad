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
    // if within some threshold, stop (base case)
    if(Math.abs(val-50) < 5) {
	$(slider).slider("value",50);
	return;
    }
    var velocity = (50-val)/3;
    $(slider).slider("value",val+velocity);
    setTimeout(function(){returnSliderToMiddle(slider)},50);
}

function initOverlays(target, actionLeft, actionRight) {
    var pos = $(target).offset();
    var w = $(target).width();
    var h = 238;//$(target).height(); // not working for some reason
    // haven't defined stuff yet, add navigational elements
    if(!$("#left")[0]) {
	var left = $("<nav/>").attr("id","left");
	var lefta = $("<nav/>").attr("id","leftarrow");
	var right = $("<nav/>").attr("id","right");
	var righta = $("<nav/>").attr("id","rightarrow");
	left.append(lefta);
	$("body").append(left);
	right.append(righta);
	$("body").append(right);
    }
    // okay, move them into position
    $("#left,#right").height(h);
    $("#left,#right").width(w/6);
    $("#left").offset({left:pos.left,top:pos.top});
    $("#right").offset({left:pos.left+5/6*w,top:pos.top});
    $("#leftarrow").offset({left:pos.left+w/8-$("#leftarrow").outerWidth(),top:pos.top+h/2-$("#leftarrow").outerHeight()/2});
    $("#rightarrow").offset({left:pos.left+w*7/8,top:pos.top+h/2-$("#rightarrow").outerHeight()/2});
    $("#left, #right").hide();
    // trying to get and keep the sides showing when moused over
    $(target).mouseenter(function(e) { $("#left, #right").show()});
    $(target).mouseleave(function(e) { $("#left, #right").hide()});
    $("#left, #right").mouseenter(function(e) { 
	    $("#left, #right").show();
	    $(this).css("opacity","0.6");
	});
    $("#left, #right").mouseleave(function(e) { 
	    $(this).css("opacity","0.3");
	    $("#left, #right").hide() });
    $("#left").click(actionLeft);
    $("#right").click(actionRight);
}

function moveLeft(target) {
    $(target).animate();
}

$(document).ready(function() {
	setTimeout(function() {
		initOverlays($("#slidee-cont")[0],
			     function(){alert("ehlo")},
			     function(){});
	    }, 100);
	// $(document).resize(positionOverlays);

	// load these guys up with AJAX
	$(".categories").click(function(e){
		e.preventDefault();
		return false;
	    });
    });