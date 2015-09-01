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
				LiveVoter
			</div>
		);
	}
}

export default LiveVoter;