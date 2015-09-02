import alt from '../alt';

class LiveVoterActions{
	constructor() {
		this.generateActions(
			'sendVoteSuccess',
			'sendVoteFail',
			'getUpdateSuccess',
			'getUpdateFail',
			'updateOnlineUsers'
		);
	}

	getUpdate() {

	}

}

export default alt.createActions(LiveVoterActions);