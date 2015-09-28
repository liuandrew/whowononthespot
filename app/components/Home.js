import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className="row">

 					<div className="small-2 large-4 columns">
            Hello from Home Component
            <a href="#" className="button">Default Button</a>
					</div>
					<div className="small-2 large-4 columns">
            Hello from Home Component
          </div>
      </div>
    );
  }
}

export default Home;