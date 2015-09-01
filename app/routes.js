import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import LiveVoter from './components/LiveVoter';

export default (
	<Route handler={App}>
		<Route path='/' handler={Home} />
		<Route path='/live' handler={LiveVoter} />
	</Route>
);