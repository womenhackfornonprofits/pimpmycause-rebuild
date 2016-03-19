var async = require('async');
var bCrypt = require('bcrypt-nodejs');
var User = require('./../../model/users/users');
var app = require('express');
var passport = require('passport');
var expressSession = require('express-session');

app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

module.exports = function Registration(User) {
	passport.use('signup', new LocalStrategy({
			passReqToCallback: true
		},
		function (req, username, password, done) {
			var findOrCreateUser = function () {
				User.findOne({'username': username}, function (err, User) {
					if (err) {
						console.log('Error in registration: ' + err);
						return done(err);
					}

					if (User) {
						console.log('User already exists');
						return done(null, false,
							req.flash('message', 'User Already Exists'));
					}
					else {
						var newUser = new User();
						newUser.firstName = req.param('firstName');
						newUser.lastName = req.param('lastName');
						newUser.password = createPasswordHash(password);
						newUser.emailAddress = req.param('email');
						newUser.typeOfUser = req.param('type');
						newUser.image = req.param('image');
						newUser.website = req.param('website');
						newUser.twitterHandle = req.param('twitter');
						newUser.postcode = req.param('postcode');
						newUser.city = req.param('city');
						newUser.country = req.param('country');
						newUser.biography = req.param('bio');
						newUser.skills = req.param('skills');
						newUser.phone_number = parseInt(req.param('phone'));
						newUser.job_role = req.param('job');
						newUser.experience = req.param('experience');
						newUser.education = req.param('education');
						newUser.numberOfLogins = 0;
						newUser.numberOfNominations = 0;
						newUser.registrationDate =  Date.now();
						newUser.isAccountActivated = false;
						newUser.lastLogin =  Date.now();
						newUser.isAvailable = false;

						newUser.save(function (err) {
							if (err) {
								console.log('Error in Saving user: ' + err);
								throw err;
							}
							console.log('User Registration successful');
							return done(null, newUser);
						});
					}
				});
			};
		}));

	var createPasswordHash = function (password) {
		return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
	}

	return Registration;
};
