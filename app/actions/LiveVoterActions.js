import alt from '../alt';

class LiveVoterActions{
	constructor() {
		this.generateActions(
			'sendVoteSuccess',
			'sendVoteFail',
			'getUpdateSuccess',
			'getUpdateFail'
		);
	}
}

export default alt.createActions(LiveVoterActions);