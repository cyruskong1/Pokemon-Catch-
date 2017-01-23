//********************* Dependencies **********************//
var express = require('express');
var session = require('express-session')

var app = express();
//set up view engine so you can render views!
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');

//********************* Server Info **********************//
var server = app.listen (8081, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Hello, Cy, this server is listening at http://',host, port) 
	console.log('host', host)
});

//********************* Public Routes **********************//

app.get('/', function(req, res) {
	console.log('welcome to the login page - enter credentials')
	res.render('login')
});

app.get('/login', function(req, res) {
	console.log('welcome to the login page - enter credentials')
	res.render('login')
});

app.get('/signup', function(req, res) {
	console.log('welcome new user, please sign up to catch Pokemons')
	res.render('signup')
});

//for testing purposes only, comment before going live
app.get('/safari', function(req, res) {
	console.log('you have entered the safari')
	res.render('safari')
});

//********************* Authentication Routes **********************//

app.post('/signup', function (req, res) {
	console.log('create account here')
	//go through authentication process
	//create a new user
  //check if new username matches any in database
  	//if no,
  	  //create password
      //encrypt
       //create new session
    //if user does exist in db
      //redirect to login
})

app.post('/login', function(req, res) {
		 //check if user name is present
		 //if no - >
      //redirect to /login
      //if yes ->
      //compare password
        //if match -> create session and redirect to /
        //else redirect to /login
})








