$(document).ready( function(){
	$(".infoSubmit").click(function(){
		event.preventDefault();
		var inputName = $("#name").val();
		$("#name").val(inputName);
		

	});
});
