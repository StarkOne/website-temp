$(function() {

	$(".arrow-bottom").click(function(){
		$("html, body").animate({ scrollTop: $("header").height()}, "slow");
		return false;
	});

});
