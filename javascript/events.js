$(document).ready( function(){

	$("")


	$(".inputForm").on("submit", function(){

		event.preventDefault();
		$(".input").addClass("hide");
		$(".output").removeClass("hide");

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
					$(".listItems").append( "<li>" + exerciseList[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")
				}
				break;

			case 'travelVal':
				console.log(travelList);
				for (var i =0; i< travelList.length; i++){
					$(".listItems").append( "<li>" + travelList[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")
				}
				break;

			case 'daredevilVal':
				console.log(daredevilList);
				for (var i =0; i< daredevilList.length; i++){
					$(".listItems").append( "<li>" + daredevilList[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")
				}
				break;

			case 'sportsVal':
				console.log(sportsList);
				for (var i =0; i< sportsList.length; i++){
					$(".listItems").append( "<li>" + sportsList[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")
				}
				break;

			case 'learningVal':
				console.log(learningList);
				for (var i =0; i< learningList.length; i++){
					$(".listItems").append( "<li>" + learningList[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")
				}
				break;
		};

		$('.list').prepend(

			"<h2>" + inputName +"'s buck.it list </h2>"
		);

		$('.profile').append(

			"<img src='images/avatar.png' class='avatar'>" +
			"<h2>" + inputName + "</h2>" +
			"<h3>Age: " + inputAge + "</h3>"

		);

	});

	$(".output").on("click", ".check", function(event){

		$(this).parent().toggleClass("line");

	});

	$(".output").on("click", ".xmark", function(event){

		$(this).parent().addClass("hide");

	});

	$(".addItems").on('submit', function(event){

		event.preventDefault();
		var addtlInput = $('.addItems input').val();
		$(".listItems").append( "<li>" + addtlInput + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>");
		$(".addItems input").val('');

	});

	$(".lucky").on("click", function(event){
		event.preventDefault();
		var randNum = Math.floor(Math.random()*10);
		$(".listItems").append( "<li>" + luckyList[randNum] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>");


	});

	$(".addItems").on("focus", "input", function(event){

		$(this).attr("placeholder","");

	});

	$(".addItems").on("focusout", "input", function(event){

		$(this).attr("placeholder","Add your own buck.it list item!");

	});

});
