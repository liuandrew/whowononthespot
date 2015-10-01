import React from 'react';
import LiveVoterStore from '../stores/LiveVoterStore';
import LiveVoterActions from '../actions/LiveVoterActions';

class LiveVoter extends React.Component {
	constructor(props) {
		super(props);
		this.state = LiveVoterStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		LiveVoterStore.listen(this.onChange);
		LiveVoterActions.getUpdate();


		let socket = io.connect();

		socket.on('onlineUsers', (data) => {
			LiveVoterActions.updateOnlineUsers(data);
		});

		socket.on('updateEpisode', (data) => {
			LiveVoterActions.updateEpisode(data);
		});

		socket.on('updateVotes', (data) => {
			LiveVoterActions.updateVotes(data);
		});
	}

	componentWillUnmount() {
		LiveVoterStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	render() {
		return(
			<div>
				<div className="row">
					<h1>Title</h1>
					<h4>Live viewers now: {this.state.onlineUsers} </h4>
				</div>
				<div className="row">
					<div className="text-centered">
						<h2>Round Number</h2>
					</div>
				</div>
				<div className="row">
					<div className="small-2 columns">
						<button>Previous</button>
					</div>
					<div className="small-8 columns">
						<h3>Round Title</h3>
						<i className="fa fa-calendar"></i>
					</div>
					<div className="small-2 columns">
						<button>Next</button>
					</div>
				</div>

				<div className="row">
					<div className="small-12 large-5 columns">
						<div className="row">
							<div className="small-6 columns">
								Red Team Player 1
							</div>
							<div className="small-6 columns">
								Red Team Player 2
							</div>
						</div>
					</div>
					<div className="large-2 columns show-for-large-up">
						<h4>VS</h4>
					</div>
					<div className="small-12 large-5 columns">
							<div className="row">
							<div className="small-6 columns">
								Blue Team Player 1
							</div>
							<div className="small-6 columns">
								Blue Team Player 2
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="small-4 columns">
						Red Team Score
					</div>
					<div className="small-4 columns">
						Voting Percentages
					</div>
					<div className="small-4 columns">
						Blue Team Score
					</div>
				</div>

			</div>
		);
	}
}

export default LiveVoter;