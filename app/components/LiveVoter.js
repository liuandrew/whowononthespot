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
		LiveVoterActions.getEpisode();


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

	  //click handlers for next and previous buttons, just change currentRound
	  //in store via actions

	handleClickNext() {
		if(this.state.currentRound < this.state.rounds.length - 1) {
			LiveVoterActions.changeRound(1);
		} 
	}

	handleClickPrevious() {
		if(this.state.currentRound > 0) {
			LiveVoterActions.changeRound(-1);
		}
	}

	render() {
		var displayRound = this.state.currentRound;
		var roundNodes = this.state.rounds.map((round, index) => {
			var parsedRound = round.split(", ");
			var divContainerClassName = "sliding-transition";
			if(index != displayRound) {
				divContainerClassName = "sliding-transition hidden hidden-left";
			} 
			return(
				<div className={divContainerClassName}>
					<h3 className="round-title">{parsedRound[0]}</h3>
					<h4 className="round-subtitle">{parsedRound[1]}</h4>
				</div>
			);
		});
		console.log("done mapping rounds");
		console.log(this.state.votes.red);
		var voteStatNodes = this.state.votes.red.map((numVotes, index) => {
			console.log("mapping votes");
			var red = numVotes;
			var blue = this.state.votes.blue[index];
			var divContainerClassName = "sliding-transition";
			var totalVotes = red + blue;
			var redBarHeight = {height: Math.floor((red/totalVotes) * 100) + "px"};
			var blueBarHeight = {height: Math.floor((blue/totalVotes) * 100) + "px"};

			if(index != displayRound) {
				divContainerClassName = "sliding-transition hidden hidden-left";
			}
			if(red == -1 || blue == -1) {
				return(
					<div className={divContainerClassName}>
						No Votes for this round!
					</div>
				);
			}
			return(
				<div className={divContainerClassName}>
					<div className="red-vote-bar" style={redBarHeight}></div>
					<p className="red-vote-number">{red}</p>
					<div className="blue-vote-bar" style={blueBarHeight}></div>
					<p className="blue-vote-number">{blue}</p>
					<p className="total-vote-number">Total Votes: {totalVotes}</p>
				</div>
			)
		});

		return(
			<div>
				<div className="row">
					<h1>{this.state.title}</h1>
					<h4>Live viewers now: {this.state.onlineUsers} </h4>
				</div>
				<div className="row">
					<div className="text-centered">
						<h2>Round Number</h2>
					</div>
				</div>
				<div className="row">
					<div className="small-2 columns">
						<button onClick={this.handleClickPrevious.bind(this)}>Previous</button>
					</div>
					<div className="small-8 columns">
						{roundNodes}
					</div>
					<div className="small-2 columns">
						<button onClick={this.handleClickNext.bind(this)}>Next</button>
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
						{voteStatNodes}
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