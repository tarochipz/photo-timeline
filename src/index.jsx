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
				<div class="footer">
					Yay you finally made it til the end.<br />
					I know I'm awesome most of the time, but I can also be pretty annoying to deal with.<br />
					I appreciate you being part of my life the past 4 years and being there for me when it matters.<br />
					Can't wait for more adventures with you when Covid is over <br /><br />
					<strong>
						Happy 4 years mr.Wav, I love you <FontAwesomeIcon icon={faHeart} />
					</strong>
				</div>
			</>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
