/*
 *	User module to save all new users to database
 *	Will perform all CRUD operations
 */

var dbConfig = require('./../../../../config');
var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var dbConnection = mongoose.connection;

autoIncrement.initialize(dbConnection);

var userSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	typeOfUser: String,
	emailAddress: String,
	password: String,
	image: { data: Buffer, contentType: String },
	website: String,
	twitterHandle: String,
	postcode: String,
	city: String,
	country: String,
	biography: String,
	skills: [
		String
	],
	phone_number: Number,
	job_role: String,
	experience: String,
	education: String,
	numberOfLogins: Number,
	numberOfNominations: Number,
	registrationDate: {type: Date, default: Date.now()},
	isAccountActivated: Boolean,
	lastLogin: {type: Date, default: Date.now()},
	isAvailable: Boolean
});

userSchema.plugin(autoIncrement.plugin, 'User');

mongoose.connect(dbConfig.db.servers);

var User = mongoose.model('User', userSchema);

module.exports = User;