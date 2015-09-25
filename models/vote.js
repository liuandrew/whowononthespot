var mongoose = require('mongoose');

var voteSchema = new mongoose.Schema({
	//RNG cookie that matches to a vote so it cannot be changed, or so it can be remembered
	cookie: String,
	episode: Number,
	round: Number,
	//red = 1, blue = 2
	team: Number,
	player: String
});

module.exports = mongoose.model('Player', voteSchema);
