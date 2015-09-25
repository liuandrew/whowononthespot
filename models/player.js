var mongoose = require('mongoose');

var playerSchema = new mongoose.Schema({
	name: String,
	//for MVP calculation purposes
	votes: Number,
	//picture will be a URL to an image hosted online
	picture: String,
	//array of episode numbers
	episodeAppearances: [Number]
});

module.exports = mongoose.model('Player', playerSchema);
