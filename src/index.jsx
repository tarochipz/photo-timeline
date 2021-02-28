import React from 'react';
import ReactDOM from 'react-dom';
import Timeline from './timeline.jsx';

class App extends React.Component {
	render() {
		return <Timeline />;
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
