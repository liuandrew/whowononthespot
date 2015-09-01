import React from 'react';
import {RouteHandler} from 'react-router';
import Footer from './Footer';
import Navbar from './Navbar';

class App extends React.Component {
	render() {
		return(
			<section>
				<Navbar />
				<RouteHandler />
				<Footer />
			</section>
		)
	}
}

export default App;