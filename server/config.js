//********************* Dependencies **********************//
var path = require('path');
var knex = require('knex')({
	client:'sqlite3',
	connection:{
		//When you use the SQLite3 adapter, there is a filename required, not a network connection.
		filename: path.join(__dirname, '../database/pokemon.sqlite')
	},
	//useNullAsDefault because my node server told me to
	useNullAsDefault: true
});
var db = require('bookshelf')(knex);

//********************* Database for Users **********************//

db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function (user) {
      user.increments('id').primary();
      user.string('username', 16);
      user.string('password', 16);
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

module.exports = db;

//********************* User model **********************//

var User = db.Model.extend({
	tablename: 'users',

})

//********************* User Collections model **********************//

// var User = new db.Collection();

// User.model = User;

module.exports = User;