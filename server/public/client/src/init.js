	$(document).ready(function() {
		window.pokemon = [];
	  //play music on load
	  
	    var audioElement = document.createElement('audio');
	    audioElement.setAttribute('src', '/client/images/Theme-Song.mp3');
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
			DOM_img.src = "/client/images/pikachu2.gif";
			var pika = DOM_img;
			console.log(pika)
	  	$('.wildArea').append(pika)
	  })

	  $("img").click(function () {
	  	//INSERT into pokemon values (null, 'pikachu')
	  	console.log('sending to database!')
	  })
	});