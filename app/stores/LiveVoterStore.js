import alt from '../alt';
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
	}

	onSendVoteSuccess() {

	}

	onSendVoteFail() {

	}

	onGetUpdateSuccess(data) {
		
	}

	onGetUpdateFail() {
		toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
	}

	onUpdateOnlineUsers(data) {
		this.onlineUsers = data.onlineUsers;
	}
}
 
export default alt.createStore(LiveVoterStore);