import alt from '../alt';

class LiveVoterActions{
	constructor() {
		this.generateActions(
			'sendVoteSuccess',
			'sendVoteFail',
			'getEpisodeSuccess',
			'getEpisodeFail',
			'updateOnlineUsers',
			'updateVotesSuccess',
			'updateVotesFail',
			'updateEpisodeSuccess',
			'updateEpisodeFail',
			'updateDisplayedRound'
		);
	}
		//ask server for full episode details up until current point
	getEpisode() {
		$.ajax({ url: '/live/getcurrentepisode'})
			.done((data) => {
				this.actions.getEpisodeSuccess(data);
			})
			.fail((jqXhr) => {
				this.actions.getEpisodeFail(jqXhr);
			});
	}
		//apply new vote stats coming in from periodic server emits
	updateVotes() {

	}
		//apply new episode structure from server emit
	updateEpiode() {

	}

	changeRound(value) {
		this.actions.updateDisplayedRound(value);
	}
}

export default alt.createActions(LiveVoterActions);