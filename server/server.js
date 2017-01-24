//********************* Dependencies **********************//
var express = require('express');
var session = require('express-session')
var db = require('./config');
var partials = require('express-partials');
var bodyParser = require('body-parser');
var User = require('./config');
var app = express();
//trying something here...
console.log('dirname', __dirname)
var path = require('path');
var knex = require('knex')({
	client:'sqlite3',
	connection:{
		//When you use the SQLite3 adapter, there is a filename required, not a network connection.
		filename: path.join(__dirname, '/database/pokemon.sqlite')
	},
	//useNullAsDefault because my node server told me to
	useNullAsDefault: true
});

//set up view engine so you can render views!
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');
app.use(partials());
// Parse JSON (uniform resource locators)
app.use(bodyParser.json());
// Parse forms (signup/login)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(session({
  secret:'shhh, its a secret',
  resave:false,
	saveUninitialized:false,
}));
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

// app.get('/signup', function(req, res) {
// 	console.log('welcome new user, please sign up to catch Pokemons')
// 	res.render('safari')
// });

//for testing purposes only, comment before going live
app.get('/safari', function(req, res) {
	console.log('you have entered the safari')
	res.render('safari')
});

//********************* Authentication Routes **********************//

app.post('/signup', function (req, res) {
	console.log('sending you to the safari zone')
	// // go through authentication process
	// // create a new user

	// var username = req.body.username;
	// var password = req.body.password;
	
	// console.log('create account here', User)
	// new User ({username : username})
 //  //check if new username matches any in database
 //  .fetch()
 //  .then(function(user){  	
 //  	//if no,
 //  	if(!user) {
 //  	  //create password
 //      //encrypt

 //  	  bcrypt.hash(password, null, null, function (error, hash) {
 //  	  	User.create({
 //  	  		username: username,
 //  	  		password: hash
 //  	  	}).then(function(user){
 //      		//create new session
 //      		console.log('creating new user and new session')
 //  	  		return function (req, res, user) {
 //  	  			return req.session.regenerate(function(){
 //  	  				req.session.user = newUser;
 //  	  				res.redirect('/safari')
 //  	  			})
 //  	  		}
 //  	  	})
 //  	  })
 //  	} else {  		
 //    //if user does exist in db
 //    console.log('user does not exist')
 //    res.redirect('/safari')
 //      //redirect to login
 //  	}
 //  })
 res.redirect('/safari')
})

app.post('/login', function(req, res) {
	// var user = new User ({username : req.body.username}).fetch().then(function(user){	
	// //check if user name is present
	// //if no user exists - >
	// 	if(!user) {
	// 	//redirect to /login
	// 		console.log('user does not exist')
	// 		res.redirect('/login')
	// 	} else {		
	// 		//if yes ->
 //      //compare password
 //      bcrypt.compare(req.body.password, user.get('password'), function(error, hash){
 //        if(match) {
 //        //if match -> create session and redirect to /
 //          util.createSession(req, res, user);
 //          res.redirect('/');
 //        //else redirect to /login
 //        } else {
 //          res.redirect('/login')
 //        }
 //      })
 //    }
 //  })
 res.redirect('/safari')
});

app.post('/safari', function(req, res){
	knex('pokemon').insert([{id: null}, {name: 'pikachu'}]).then(function(result){
		console.log('result', result)
	});
	console.log('pokemon caught!')
})








