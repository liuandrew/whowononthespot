import React from 'react';
import LiveVoterStore from '../stores/LiveVoterStore';
import LiveVoterActions from '../actions/LiveVoterActions';

class LiveVoter extends React.Component {
	constructor(props) {
		console.log("live voter initialized");
		super(props);
		this.state = LiveVoterStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		console.log('mounted');
		LiveVoterStore.listen(this.onChange);
		LiveVoterActions.getUpdate();


		let socket = io.connect();

		socket.on('onlineUsers', (data) => {
			LiveVoterActions.updateOnlineUsers(data);
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
				<h1>LiveVoter</h1>
				<h4>Live viewers now: {this.state.onlineUsers} </h4>
			</div>
		);
	}
}

export default LiveVoter;