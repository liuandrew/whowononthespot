var mongoose = require('mongoose');

var episodeSchema = new mongoose.Schema({
	title: String,
		//red and blue should show initial teams, with Strings being playerId for 
		//lookup in player database
		//changeRecord should be encoded as "roundNumber, removePlayer, addPlayer, addedToWhichTeam"
	teams: {
		red: [String],
		blue: [String],
		changeRecord: [String]
	},
		//rounds should be encoded as "gameTitle, roundTitle"
	rounds: [String],
		//red and blue should each be arrays of scores as matched with round numbers
		//finalTotals self explanatory
	officialScores: {
		red: [Number],
		blue: [Number],
		redFinalTotal: Number,
		blueFinalTotal: Number
	},
		//same as officialScores
		//yes and no used for Quick Thinking rounds, using NaN when it is not a QT round
		//finalTotals self explanatory
	votes: {
		red: [Number],
		blue: [Number],
		yes: [Number],
		no: [Number],
		redFinalTotal: Number,
		blueFinalTotal: Number
	}
});

module.exports = mongoose.model('Episode', episodeSchema);