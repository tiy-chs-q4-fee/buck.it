$(document).ready( function(){


	$("form").on("submit", function(){

		event.preventDefault();
		$(".input").addClass("hide");


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
				for (var i =0; i< exerciseList.length; i++){
					$(".listItems").append( "<li><img src='images/check.png' class='check'>" + exerciseList[i] + "<img src = 'images/xmark.png' class='xmark'></li>")
				}
				break;

			case 'travelVal':
				console.log(travelList);
				for (var i =0; i< travelList.length; i++){
					$(".listItems").append( "<li>" + travelList[i] + "</li>")
				}
				break;

			case 'daredevilVal':
				console.log(daredevilList);
				for (var i =0; i< daredevilList.length; i++){
					$(".listItems").append( "<li>" + daredevilList[i] + "</li>")
				}
				break;

			case 'sportsVal':
				console.log(sportsList);
				for (var i =0; i< sportsList.length; i++){
					$(".listItems").append( "<li>" + sportsList[i] + "</li>")
				}
				break;

			case 'learningVal':
				console.log(learningList);
				for (var i =0; i< learningList.length; i++){
					$(".listItems").append( "<li>" + learningList[i] + "</li>")
				}
				break;
		};
		$('.output').prepend(
			"<h2>" + inputName +"'s buck.it list </h2>"
		);

	});

	$(".output").on("click", "li", function(event){
		$(this).css("text-decoration", "line-through");


	});


});
