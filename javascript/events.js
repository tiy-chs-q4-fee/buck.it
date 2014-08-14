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
					break;


			case 'travelVal':
				console.log(travelList);
				break;

			case 'daredevilVal':
				console.log(daredevilList);
				break;

			case 'sportsVal':
				console.log(sportsList);
				break;

			case 'learningVal':
				console.log(learningList);
				break;
		};
		$('.output').html(
			"<h2>" + inputName +"'s buck.it list </h2>"
		);
	});

});
