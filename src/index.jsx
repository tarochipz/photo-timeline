import React from 'react';
import ReactDOM from 'react-dom';
import Timeline from './timeline.jsx';
import './index.css'

class App extends React.Component {
	render() {
		return (
			<>
				<h1 class='pageHeader'>The Adventures of Sylv & Rav</h1>
				<Timeline />
        {/* <h2 class='pageHeader'>Can't wait for more adventures.</h2> */}
			</>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
