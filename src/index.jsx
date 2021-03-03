import React from 'react';
import ReactDOM from 'react-dom';
import Timeline from './timeline.jsx';
import Butterfly from './butterfly.jsx';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.css';

class App extends React.Component {
	render() {
		return (
			<>
				<div class="pageHeader">
					<Butterfly />
					<FontAwesomeIcon icon={faHeart} />
					<h1>The Adventures of Sylv & Rav</h1>
					<FontAwesomeIcon icon={faHeart} />
				</div>
				<Timeline />
				{/* <h2 class='pageHeader'>Can't wait for more adventures.</h2> */}
			</>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
