$(document).ready( function(){


	$("form").on("submit", function(){

		event.preventDefault();

		var inputName = $('#name').val();
		$("#name").val(inputName);

		var inputAge = $('#age').val();
		$("#age").val(inputAge);

		var inputInterest = $('#interests').val();
		$("#interests").val(inputInterest);

		console.log(inputInterest);

		switch(inputInterest){

			case 'exerciseVal':
				console.log(exerciseList);

		};

		$('.output').html(
			"<p>" + inputName + "'s buck.it list</p>"
			+ "<p>" + inputInterest + "</p>"
			);

	});

});
