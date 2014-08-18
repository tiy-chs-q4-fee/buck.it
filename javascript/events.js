$(document).ready( function(){

$('.imageone').on( "mouseover",  function(){
	$('body').css( "background-image", "url(images/rockclimbing.jpg)");

});


$('.imagetwo').on( "mouseover",  function(){
	$('body').css( "background-image", "url(images/surfer.jpg)");

});


$('.imagethree').on( "mouseover",  function(){
	$('body').css( "background-image", "url(images/motocross.jpg)");

});

	$(".inputForm").on("submit", function(){

		event.preventDefault();

		$(".input").addClass("hide");
		$(".output").removeClass("hide");

		var inputAge = $('#age').val();
		$("#age").val(inputAge);

		var inputName = $('#name').val();
		$("#name").val(inputName);

		var inputInterest = $('#interests').val();
		$("#interests").val(inputInterest);

		var inputLocation = $('#location').val();
		$("#location").val(inputLocation);

		console.log(inputAge + " " + inputName + " " + inputInterest + " " + inputLocation);

		switch(inputAge) {
			case 'teenVal':
				switch (inputInterest){
					case 'exerciseVal':
						switch(inputLocation){
							case 'northAmericaVal':

								for (var i = 0; i < teen.exerciseList.northAmerica.length; i++) {

									$(".listItems").append( "<li>" + teen.exerciseList.northAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'southAmericaVal':

								for (var i = 0; i < teen.exerciseList.southAmerica.length; i++) {

									$(".listItems").append( "<li>" + teen.exerciseList.southAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'europeVal':

								for (var i = 0; i < teen.exerciseList.europe.length; i++) {

									$(".listItems").append( "<li>" + teen.exerciseList.europe[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'asiaVal':

								for (var i = 0; i < teen.exerciseList.asia.length; i++) {

									$(".listItems").append( "<li>" + teen.exerciseList.asia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'australiaVal':

								for (var i = 0; i < teen.exerciseList.australia.length; i++) {

									$(".listItems").append( "<li>" + teen.exerciseList.australia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'africaVal':

								for (var i = 0; i < teen.exerciseList.africa.length; i++) {

									$(".listItems").append( "<li>" + teen.exerciseList.africa[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
						};
					break;
					case 'travelVal':
						switch(inputLocation){
							case 'northAmericaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'southAmericaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'europeVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'asiaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'australiaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'africaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
						};
					break;
					case 'sportsVal':
						switch(inputLocation){
							case 'northAmericaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'southAmericaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'europeVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'asiaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'australiaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'africaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
						};
					break;
					case 'daredevilVal':
						switch(inputLocation){
							case 'northAmericaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'southAmericaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'europeVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'asiaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'australiaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'africaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
						};
					break;
					case 'learningVal':
						switch(inputLocation){
							case 'northAmericaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'southAmericaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'europeVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'asiaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'australiaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'africaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
						};
					break;
				};

			break;
			case 'adultVal':
				switch (inputInterest){
					case 'exerciseVal':
						switch(inputLocation){
							case 'northAmericaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'southAmericaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'europeVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'asiaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'australiaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'africaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
						};
					break;
					case 'travelVal':
						switch(inputLocation){
							case 'northAmericaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'southAmericaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'europeVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'asiaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'australiaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'africaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
						};
					break;
					case 'sportsVal':
						switch(inputLocation){
							case 'northAmericaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'southAmericaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'europeVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'asiaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'australiaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'africaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
						};
					break;
					case 'daredevilVal':
						switch(inputLocation){
							case 'northAmericaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'southAmericaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'europeVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'asiaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'australiaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'africaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
						};
					break;
					case 'learningVal':
						switch(inputLocation){
							case 'northAmericaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'southAmericaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'europeVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'asiaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'australiaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'africaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
						};
					break;
				};
			break;
			case 'retireeVal':
				switch (inputInterest){
					case 'exerciseVal':
						switch(inputLocation){
							case 'northAmericaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'southAmericaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'europeVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'asiaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'australiaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'africaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
						};
					break;
					case 'travelVal':
						switch(inputLocation){
							case 'northAmericaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'southAmericaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'europeVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'asiaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'australiaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'africaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
						};
					break;
					case 'sportsVal':
						switch(inputLocation){
							case 'northAmericaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'southAmericaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'europeVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'asiaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'australiaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'africaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
						};
					break;
					case 'daredevilVal':
						switch(inputLocation){
							case 'northAmericaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'southAmericaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'europeVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'asiaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'australiaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'africaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
						};
					break;
					case 'learningVal':
						switch(inputLocation){
							case 'northAmericaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'southAmericaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'europeVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'asiaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'australiaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
							case 'africaVal':

								for (var i = 0; i < AGE.INTEREST.LOCATION.length; i++) {

									$(".listItems").append( "<li>" + AGE.INTEREST.LOCATION[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

								}

								break;
						};
					break;
				};
			break;

		};

		/*switch(inputInterest){

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
		};*/

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
		var randNum = Math.floor(Math.random()*10);
		alert(listFinish[randNum]);

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
