import alt from '../alt';

class LiveVoterActions{
	constructor() {
		this.generateActions(
			'sendVoteSuccess',
			'sendVoteFail',
			'getUpdateSuccess',
			'getUpdateFail',
			'updateOnlineUsers',
			'updateVotesSuccess',
			'updateVotesFail',
			'updateEpisodeSuccess',
			'updateEpisodeFail'
		);
	}
		//ask server for full episode details up until current point
	getUpdate() {
		$.ajax({ url: '/live/getcurrentepisode'})
			.done((data) => {
				this.actions.getUpdateSuccess(data);
			})
			.fail((jqXhr) => {
				this.actions.getUpdateFail(jqXhr);
			});
	}
		//apply new vote stats coming in from periodic server emits
	updateVotes() {

	}
		//apply new episode structure from server emit
	updateEpiode() {

	}
}

export default alt.createActions(LiveVoterActions);