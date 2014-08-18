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

									$(".listItems").append( "<li>" + teen.exerciseList.northAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'southAmericaVal':

								for (var i = 0; i < teen.exerciseList.southAmerica.length; i++) {

									$(".listItems").append( "<li>" + teen.exerciseList.southAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'europeVal':

								for (var i = 0; i < teen.exerciseList.europe.length; i++) {

									$(".listItems").append( "<li>" + teen.exerciseList.europe[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'asiaVal':

								for (var i = 0; i < teen.exerciseList.asia.length; i++) {

									$(".listItems").append( "<li>" + teen.exerciseList.asia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'australiaVal':

								for (var i = 0; i < teen.exerciseList.australia.length; i++) {

									$(".listItems").append( "<li>" + teen.exerciseList.australia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'africaVal':

								for (var i = 0; i < teen.exerciseList.africa.length; i++) {

									$(".listItems").append( "<li>" + teen.exerciseList.africa[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
						};
					break;
					case 'travelVal':
						switch(inputLocation){
							case 'northAmericaVal':

								for (var i = 0; i < teen.travelList.northAmerica.length; i++) {

									$(".listItems").append( "<li>" + teen.travelList.northAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'southAmericaVal':

								for (var i = 0; i < teen.travelList.southAmerica.length; i++) {

									$(".listItems").append( "<li>" + teen.travelList.southAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'europeVal':

								for (var i = 0; i < teen.travelList.europe.length; i++) {

									$(".listItems").append( "<li>" + teen.travelList.europe[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'asiaVal':

								for (var i = 0; i < teen.travelList.asia.length; i++) {

									$(".listItems").append( "<li>" + teen.travelList.asia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'australiaVal':

								for (var i = 0; i < teen.travelList.australia.length; i++) {

									$(".listItems").append( "<li>" + teen.travelList.australia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'africaVal':

								for (var i = 0; i < teen.travelList.africa.length; i++) {

									$(".listItems").append( "<li>" + teen.travelList.africa[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
						};
					break;
					case 'sportsVal':
						switch(inputLocation){
							case 'northAmericaVal':

								for (var i = 0; i < teen.sportsList.northAmerica.length; i++) {

									$(".listItems").append( "<li>" + teen.sportsList.northAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'southAmericaVal':

								for (var i = 0; i < teen.sportsList.southAmerica.length; i++) {

									$(".listItems").append( "<li>" + teen.sportsList.southAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'europeVal':

								for (var i = 0; i < teen.sportsList.europe.length; i++) {

									$(".listItems").append( "<li>" + teen.sportsList.europe[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'asiaVal':

								for (var i = 0; i < teen.sportsList.asia.length; i++) {

									$(".listItems").append( "<li>" + teen.sportsList.asia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'australiaVal':

								for (var i = 0; i < teen.sportsList.australia.length; i++) {

									$(".listItems").append( "<li>" + teen.sportsList.australia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'africaVal':

								for (var i = 0; i < teen.sportsList.africa.length; i++) {

									$(".listItems").append( "<li>" + teen.sportsList.africa[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
						};
					break;
					case 'daredevilVal':
						switch(inputLocation){
							case 'northAmericaVal':

								for (var i = 0; i < teen.daredevilList.northAmerica.length; i++) {

									$(".listItems").append( "<li>" + teen.daredevilList.northAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'southAmericaVal':

								for (var i = 0; i < teen.daredevilList.southAmerica.length; i++) {

									$(".listItems").append( "<li>" + teen.daredevilList.southAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'europeVal':

								for (var i = 0; i < teen.daredevilList.europe.length; i++) {

									$(".listItems").append( "<li>" + teen.daredevilList.europe[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'asiaVal':

								for (var i = 0; i < teen.daredevilList.asia.length; i++) {

									$(".listItems").append( "<li>" + teen.daredevilList.asia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'australiaVal':

								for (var i = 0; i < teen.daredevilList.australia.length; i++) {

									$(".listItems").append( "<li>" + teen.daredevilList.australia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'africaVal':

								for (var i = 0; i < teen.daredevilList.africa.length; i++) {

									$(".listItems").append( "<li>" + teen.daredevilList.africa[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
						};
					break;
					case 'learningVal':
						switch(inputLocation){
							case 'northAmericaVal':

								for (var i = 0; i < teen.learningList.northAmerica.length; i++) {

									$(".listItems").append( "<li>" + teen.learningList.northAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'southAmericaVal':

								for (var i = 0; i < teen.learningList.southAmerica.length; i++) {

									$(".listItems").append( "<li>" + teen.learningList.southAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'europeVal':

								for (var i = 0; i < teen.learningList.europe.length; i++) {

									$(".listItems").append( "<li>" + teen.learningList.europe[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'asiaVal':

								for (var i = 0; i < teen.learningList.asia.length; i++) {

									$(".listItems").append( "<li>" + teen.learningList.asia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'australiaVal':

								for (var i = 0; i < teen.learningList.australia.length; i++) {

									$(".listItems").append( "<li>" + teen.learningList.australia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'africaVal':

								for (var i = 0; i < teen.learningList.africa.length; i++) {

									$(".listItems").append( "<li>" + teen.learningList.africa[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

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

								for (var i = 0; i < adult.exerciseList.northAmerica.length; i++) {

									$(".listItems").append( "<li>" + adult.exerciseList.northAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'southAmericaVal':

								for (var i = 0; i < adult.exerciseList.southAmerica.length; i++) {

									$(".listItems").append( "<li>" + adult.exerciseList.southAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'europeVal':

								for (var i = 0; i < adult.exerciseList.europe.length; i++) {

									$(".listItems").append( "<li>" + adult.exerciseList.europe[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'asiaVal':

								for (var i = 0; i < adult.exerciseList.asia.length; i++) {

									$(".listItems").append( "<li>" + adult.exerciseList.asia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'australiaVal':

								for (var i = 0; i < adult.exerciseList.australia.length; i++) {

									$(".listItems").append( "<li>" + adult.exerciseList.australia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'africaVal':

								for (var i = 0; i < adult.exerciseList.africa.length; i++) {

									$(".listItems").append( "<li>" + adult.exerciseList.africa[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
						};
					break;
					case 'travelVal':
						switch(inputLocation){
							case 'northAmericaVal':

								for (var i = 0; i < adult.travelList.northAmerica.length; i++) {

									$(".listItems").append( "<li>" + adult.travelList.northAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'southAmericaVal':

								for (var i = 0; i < adult.travelList.southAmerica.length; i++) {

									$(".listItems").append( "<li>" + adult.travelList.southAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'europeVal':

								for (var i = 0; i < adult.travelList.europe.length; i++) {

									$(".listItems").append( "<li>" + adult.travelList.europe[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'asiaVal':

								for (var i = 0; i < adult.travelList.asia.length; i++) {

									$(".listItems").append( "<li>" + adult.travelList.asia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'australiaVal':

								for (var i = 0; i < adult.travelList.australia.length; i++) {

									$(".listItems").append( "<li>" + adult.travelList.australia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'africaVal':

								for (var i = 0; i < adult.travelList.africa.length; i++) {

									$(".listItems").append( "<li>" + adult.travelList.africa[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
						};
					break;
					case 'sportsVal':
						switch(inputLocation){
							case 'northAmericaVal':

								for (var i = 0; i < adult.sportsList.northAmerica.length; i++) {

									$(".listItems").append( "<li>" + adult.sportsList.northAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'southAmericaVal':

								for (var i = 0; i < adult.sportsList.southAmerica.length; i++) {

									$(".listItems").append( "<li>" + adult.sportsList.southAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'europeVal':

								for (var i = 0; i < adult.sportsList.europe.length; i++) {

									$(".listItems").append( "<li>" + adult.sportsList.europe[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'asiaVal':

								for (var i = 0; i < adult.sportsList.asia.length; i++) {

									$(".listItems").append( "<li>" + adult.sportsList.asia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'australiaVal':

								for (var i = 0; i < adult.sportsList.australia.length; i++) {

									$(".listItems").append( "<li>" + adult.sportsList.australia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'africaVal':

								for (var i = 0; i < adult.sportsList.africa.length; i++) {

									$(".listItems").append( "<li>" + adult.sportsList.africa[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
						};
					break;
					case 'daredevilVal':
						switch(inputLocation){
							case 'northAmericaVal':

								for (var i = 0; i < adult.daredevilList.northAmerica.length; i++) {

									$(".listItems").append( "<li>" + adult.daredevilList.northAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'southAmericaVal':

								for (var i = 0; i < adult.daredevilList.southAmerica.length; i++) {

									$(".listItems").append( "<li>" + adult.daredevilList.southAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'europeVal':

								for (var i = 0; i < adult.daredevilList.europe.length; i++) {

									$(".listItems").append( "<li>" + adult.daredevilList.europe[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'asiaVal':

								for (var i = 0; i < adult.daredevilList.asia.length; i++) {

									$(".listItems").append( "<li>" + adult.daredevilList.asia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'australiaVal':

								for (var i = 0; i < adult.daredevilList.australia.length; i++) {

									$(".listItems").append( "<li>" + adult.daredevilList.australia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'africaVal':

								for (var i = 0; i < adult.daredevilList.africa.length; i++) {

									$(".listItems").append( "<li>" + adult.daredevilList.africa[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
						};
					break;
					case 'learningVal':
						switch(inputLocation){
							case 'northAmericaVal':

								for (var i = 0; i < adult.learningList.northAmerica.length; i++) {

									$(".listItems").append( "<li>" + adult.learningList.northAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'southAmericaVal':

								for (var i = 0; i < adult.learningList.southAmerica.length; i++) {

									$(".listItems").append( "<li>" + adult.learningList.southAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'europeVal':

								for (var i = 0; i < adult.learningList.europe.length; i++) {

									$(".listItems").append( "<li>" + adult.learningList.europe[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'asiaVal':

								for (var i = 0; i < adult.learningList.asia.length; i++) {

									$(".listItems").append( "<li>" + adult.learningList.asia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'australiaVal':

								for (var i = 0; i < adult.learningList.australia.length; i++) {

									$(".listItems").append( "<li>" + adult.learningList.australia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'africaVal':

								for (var i = 0; i < adult.learningList.africa.length; i++) {

									$(".listItems").append( "<li>" + adult.learningList.africa[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

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

								for (var i = 0; i < retiree.exerciseList.northAmerica.length; i++) {

									$(".listItems").append( "<li>" + retiree.exerciseList.northAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'southAmericaVal':

								for (var i = 0; i < retiree.exerciseList.southAmerica.length; i++) {

									$(".listItems").append( "<li>" + retiree.exerciseList.southAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'europeVal':

								for (var i = 0; i < retiree.exerciseList.europe.length; i++) {

									$(".listItems").append( "<li>" + retiree.exerciseList.europe[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'asiaVal':

								for (var i = 0; i < retiree.exerciseList.asia.length; i++) {

									$(".listItems").append( "<li>" + retiree.exerciseList.asia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'australiaVal':

								for (var i = 0; i < retiree.exerciseList.australia.length; i++) {

									$(".listItems").append( "<li>" + retiree.exerciseList.australia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'africaVal':

								for (var i = 0; i < retiree.exerciseList.africa.length; i++) {

									$(".listItems").append( "<li>" + retiree.exerciseList.africa[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
						};
					break;
					case 'travelVal':
						switch(inputLocation){
							case 'northAmericaVal':

								for (var i = 0; i < retiree.travelList.northAmerica.length; i++) {

									$(".listItems").append( "<li>" + retiree.travelList.northAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'southAmericaVal':

								for (var i = 0; i < retiree.travelList.southAmerica.length; i++) {

									$(".listItems").append( "<li>" + retiree.travelList.southAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'europeVal':

								for (var i = 0; i < retiree.travelList.europe.length; i++) {

									$(".listItems").append( "<li>" + retiree.travelList.europe[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'asiaVal':

								for (var i = 0; i < retiree.travelList.asia.length; i++) {

									$(".listItems").append( "<li>" + retiree.travelList.asia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'australiaVal':

								for (var i = 0; i < retiree.travelList.australia.length; i++) {

									$(".listItems").append( "<li>" + retiree.travelList.australia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'africaVal':

								for (var i = 0; i < retiree.travelList.africa.length; i++) {

									$(".listItems").append( "<li>" + retiree.travelList.africa[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
						};
					break;
					case 'sportsVal':
						switch(inputLocation){
							case 'northAmericaVal':

								for (var i = 0; i < retiree.sportsList.northAmerica.length; i++) {

									$(".listItems").append( "<li>" + retiree.sportsList.northAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'southAmericaVal':

								for (var i = 0; i < retiree.sportsList.southAmerica.length; i++) {

									$(".listItems").append( "<li>" + retiree.sportsList.southAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'europeVal':

								for (var i = 0; i < retiree.sportsList.europe.length; i++) {

									$(".listItems").append( "<li>" + retiree.sportsList.europe[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'asiaVal':

								for (var i = 0; i < retiree.sportsList.asia.length; i++) {

									$(".listItems").append( "<li>" + retiree.sportsList.asia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'australiaVal':

								for (var i = 0; i < retiree.sportsList.australia.length; i++) {

									$(".listItems").append( "<li>" + retiree.sportsList.australia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'africaVal':

								for (var i = 0; i < retiree.sportsList.africa.length; i++) {

									$(".listItems").append( "<li>" + retiree.sportsList.africa[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
						};
					break;
					case 'daredevilVal':
						switch(inputLocation){
							case 'northAmericaVal':

								for (var i = 0; i < retiree.daredevilList.northAmerica.length; i++) {

									$(".listItems").append( "<li>" + retiree.daredevilList.northAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'southAmericaVal':

								for (var i = 0; i < retiree.daredevilList.southAmerica.length; i++) {

									$(".listItems").append( "<li>" + retiree.daredevilList.southAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'europeVal':

								for (var i = 0; i < retiree.daredevilList.europe.length; i++) {

									$(".listItems").append( "<li>" + retiree.daredevilList.europe[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'asiaVal':

								for (var i = 0; i < retiree.daredevilList.asia.length; i++) {

									$(".listItems").append( "<li>" + retiree.daredevilList.asia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'australiaVal':

								for (var i = 0; i < retiree.daredevilList.australia.length; i++) {

									$(".listItems").append( "<li>" + retiree.daredevilList.australia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'africaVal':

								for (var i = 0; i < retiree.daredevilList.africa.length; i++) {

									$(".listItems").append( "<li>" + retiree.daredevilList.africa[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
						};
					break;
					case 'learningVal':
						switch(inputLocation){
							case 'northAmericaVal':

								for (var i = 0; i < retiree.learningList.northAmerica.length; i++) {

									$(".listItems").append( "<li>" + retiree.learningList.northAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'southAmericaVal':

								for (var i = 0; i < retiree.learningList.southAmerica.length; i++) {

									$(".listItems").append( "<li>" + retiree.learningList.southAmerica[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'europeVal':

								for (var i = 0; i < retiree.learningList.europe.length; i++) {

									$(".listItems").append( "<li>" + retiree.learningList.europe[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'asiaVal':

								for (var i = 0; i < retiree.learningList.asia.length; i++) {

									$(".listItems").append( "<li>" + retiree.learningList.asia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'australiaVal':

								for (var i = 0; i < retiree.learningList.australia.length; i++) {

									$(".listItems").append( "<li>" + retiree.learningList.australia[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
							case 'africaVal':

								for (var i = 0; i < retiree.learningList.africa.length; i++) {

									$(".listItems").append( "<li>" + retiree.learningList.africa[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>")

								}

								break;
						};
					break;
				};
			break;

		};


		$('.list').prepend(

			"<h2>" + inputName +"'s buck.it list </h2>"
		);

		$('.profile').append(

			"<img src='images/avatar.png' class='avatar'>" +
			"<h2>" + inputName + "</h2>"
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
		$(".listItems").append( "<li>" + addtlInput + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>");
		$(".addItems input").val('');

	});

	$(".lucky").on("click", function(event){
		event.preventDefault();
		var randNum = Math.floor(Math.random()*10);
		$(".listItems").append( "<li>" + luckyList[randNum] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'><img src='images/comment2.png' class='comment'><ul class='commentList'></ul><form class='commentForm hide'><input type='text' placeholder='Add comments...'><button>Add note</button></form></li>");


	});

	$(".addItems").on("focus", "input", function(event){

		$(this).attr("placeholder","");

	});

	$(".addItems").on("focusout", "input", function(event){

		$(this).attr("placeholder","Add your own buck.it list item!");

	});

	$('.output').on('click', '.comment', function(event) {

		$(this).siblings('.commentForm').toggleClass('hide');

	});

	$(".output").on("focus", ".commentForm input", function(event){

		$(this).attr("placeholder","");

	});

	$('.output').on('submit', '.commentForm', function(event){

		event.preventDefault();
		var commentInput = $(this).children('input').val();
		console.log(commentInput);
		$(this).parent().find('.commentList').append("<li>" + commentInput + "</li>");


	});

	$(".output").on("focusout", ".commentForm input", function(event){

		$(this).attr("placeholder","Add comments...");

	});

});
