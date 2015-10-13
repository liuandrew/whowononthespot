var mongoose = require('mongoose');

var episodeSchema = new mongoose.Schema({
	title: {type: String, default: ""},
	episodeNumber: {type: Number, default: 0},
	airDate: {type: Date, default: Date.now},
		//red and blue should show initial teams, with Strings being playerId for 
		//lookup in player database
		//changeRecord should be encoded as "roundNumber, removePlayer, addPlayer, addedToWhichTeam"
	teams: {
		red: [String],
		blue: [String],
		redTeamName: {type: String, default: ""},
		blueTeamName: {type: String, default: ""},
		changeRecord: [String]
	},
		//rounds should be encoded as "gameTitle, roundTitle"
	rounds: [String],
		//red and blue should each be arrays of scores as matched with round numbers
		//finalTotals self explanatory
	officialScores: {
		red: [Number],
		blue: [Number],
		redFinalTotal: {type: Number, default: 0},
		blueFinalTotal: {type: Number, default: 0}
	},
		//same as officialScores
		//yes and no used for Quick Thinking rounds, using -1 when it is not a QT round
		//finalTotals self explanatory
	votes: {
		red: [Number],
		blue: [Number],
		yes: [Number],
		no: [Number],
		redFinalTotal: {type: Number, default: 0},
		blueFinalTotal: {type: Number, default: 0}
	}
});

module.exports = mongoose.model('Episode', episodeSchema);