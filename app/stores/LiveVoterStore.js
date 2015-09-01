import alt from '../alt';
import LiveVoterActions from '../actions/LiveVoterActions';

class LiveVoterStore {
	constructor() {
		this.bindActions(LiveVoterActions);
		this.teams = {};
		this.rounds = [];
		this.officialScores = [];
		this.votes = [];
	}

	onSendVoteSuccess() {

	}

	onSendVoteFail() {

	}

	onGetUpdateSuccess() {

	}

	onGetUpdateFail() {

	}
}

export default alt.createStore(LiveVoterStore);