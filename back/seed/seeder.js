const wanderspotSeed = require('./wanderspot-seed');
const profileSeed = require('./profile-seed');
const destinationSeed = require('./destination-seed');
var db = require('../models')

db.sequelize.sync().then(function(){
	profileSeed();
	destinationSeed();
 	wanderspotSeed();
});
