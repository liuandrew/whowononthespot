import alt from '../alt';
import LiveVoterActions from '../actions/LiveVoterActions';

class LiveVoterStore {
	constructor() {
		this.bindActions(LiveVoterActions);
		this.teams = [];
		this.rounds = [];
		this.officialScores = [];
		this.votes = [];
		this.onlineUsers = 0;
	}

	onSendVoteSuccess() {

	}

	onSendVoteFail() {

	}

	onGetUpdateSuccess() {

	}

	onGetUpdateFail() {

	}

	onUpdateOnlineUsers(data) {
		this.onlineUsers = data.onlineUsers;
	}
}
 
export default alt.createStore(LiveVoterStore);