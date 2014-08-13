$(document).ready( function(){
	$(".infoSubmit").on("click", function(){
		event.preventDefault();
		console.log($(".Excercise").val());
	});
});