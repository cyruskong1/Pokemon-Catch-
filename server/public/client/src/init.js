//********************* Dependencies **********************//

//********************* Cool stuff happening **********************//
	$(document).ready(function() {
		window.pokemon = [];
	  //play music on load
	  
	    var audioElement = document.createElement('audio');
	    audioElement.setAttribute('src', '/client/images/go-theme.mp3');
	    audioElement.setAttribute('autoplay', 'autoplay');
	    //audioElement.load()
	    $.get();
	    audioElement.addEventListener("load", function() {
	      audioElement.play();
	    }, true);

	    $('.play').click(function() {
	      audioElement.play();
	    });

	    $('.pause').click(function() {
	      audioElement.pause();
	    });

	  $('.addPokemon').click(function() {
	  	console.log('added Pokemon');
	  	var DOM_img = document.createElement("img");
			DOM_img.src = "/client/images/pikachu.gif";
			var pika = DOM_img;
	  	$('.wildArea').append(pika)
	  })

	  //send pokemon to database
	  $(".wildArea").click(function () {
	  	var img = $('img:first', this)
	  	//INSERT into pokemon values (null, 'pikachu')
	  	//delete from DOM
	  	var didYouCatchIt = function () {
	  		return Math.floor(Math.random() * 100)
	  	};

	  	var result = didYouCatchIt();

	  	if(result < 50) {
	  		alert('pikachu escaped!')
	  	} else {
	  	$.ajax({
				  type: "POST",
				  url: "http://127.0.0.1:8081/safari",
				 	data: -1,
				  success: function() {console.log('throwing pokeball!')},
				  error: function () {console.log('sending to db error')}
				});
	  	img.remove()
	  	}
	  })

	  $(".showCaught").click(function () {
	  	//INSERT into pokemon values (null, 'pikachu')
	  	//delete from DOM
	  	$.ajax({
				  type: "GET",
				  url: "http://127.0.0.1:8081/safari",
				 	data: 0,
				  success: function() {console.log('loading pokedex')},
				  error: function () {console.log('error getting pokedex')}
				});
	  })



	});