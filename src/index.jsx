import React from 'react';
import ReactDOM from 'react-dom';
import Timeline from './timeline.jsx';

class App extends React.Component {
	render() {
		return (
			<>
				<div>Happy 4 years</div>
				<Timeline />
			</>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
