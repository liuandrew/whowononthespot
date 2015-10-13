import alt from '../alt';
import {assign} from 'underscore';
import LiveVoterActions from '../actions/LiveVoterActions';

class LiveVoterStore {
	constructor() {
		this.bindActions(LiveVoterActions);
		this.teams = {
			red: [], 
			blue: [], 
			changeRecord: []
		};
		this.rounds = [];
		this.officialScores = {
			red: [], 
			blue: [], 
			redFinalTotal: 0, 
			blueFinalTotal: 0
		};
		this.votes = {
			red: [],
			blue: [],
			yes: [],
			no: [] 
		};
		this.onlineUsers = 0;
		this.title = "";
			//keeps track and allows displaying of where the player already voted
			//one per round, null for not voted, 1 for red, 2 for blue
		this.voted = [];
			//keeps track of which round is currently being displayed, using
			//typical array index values
		this.currentRound = 0;
	}

	onSendVoteSuccess() {

	}

	onSendVoteFail() {

	}

	onGetEpisodeSuccess(data) {		 
		this.teams = data[0].teams;
		this.rounds = data[0].rounds;
		this.votes = data[0].votes;
		this.title = data[0].title;
		this.currentRound = data[0].rounds.length - 1;
	}

	onGetEpisodeFail() {
		toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
	}

	onUpdateOnlineUsers(data) {
		this.onlineUsers = data.onlineUsers;
	}

	onUpdateDisplayedRound(value) {
		this.currentRound = this.currentRound + value;
	}
}
 
export default alt.createStore(LiveVoterStore);