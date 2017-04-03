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

$(document).ready(function () {
	$('#work-link').on('click', function(){
		var theID = this.id;
		var targetID = 'work';
		console.log(theID);
		console.log(targetID);
		var d = document.getElementById(targetID);
		    var topPos = d.offsetTop;
		    $('html, body').animate({
		        scrollTop: topPos-114,
		    },500);
	});
});