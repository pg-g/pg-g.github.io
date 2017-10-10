$('#blue-btn').on("click", function(){
	$('.color').css('background-color','#58C1EF');
	$('.link-btn').css('color','#58C1EF');
});
$('#gold-btn').on("click", function(){
	$('.color').css('background-color','#FFCB28');
	$('.link-btn').css('color','#FFCB28');
});
$('#orange-btn').on("click", function(){
	$('.color').css('background-color','#F58967');
	$('.link-btn').css('color','#F58967');
});
$('#gray-btn').on("click", function(){
	$('.color').css('background-color','#58595B');
	$('.link-btn').css('color','#58595B');
});
$('#dark-btn').on("click", function(){
	$('.color').css('background-color','#386B95');
	$('.link-btn').css('color','#386B95');
});
$('#pink-btn').on("click", function(){
	$('.color').css('background-color','#E91E63');
	$('.link-btn').css('color','#E91E63');
});
$('#green-btn').on("click", function(){
	$('.color').css('background-color','#4caf50');
	$('.link-btn').css('color','#4caf50');
});

$(document).ready(function () {
	$('.nav a').on('click', function(){
		var theID = this.id;
		var targetID = theID.replace('-link','');
		var d = document.getElementById(targetID); 
		    var topPos = d.offsetTop;
		    $('html, body').animate({
		        scrollTop: topPos-55,
		    },500);
	});
});