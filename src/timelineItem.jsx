import React from 'react';
import './timelineItem.css';

export default function TimelineItem({ imgUrl, title, date }) {
	return (
		<li className="timelineItem">
			<div>
				<time>{date}</time>
				<div>
					<h1>{title}</h1>
					<img src={imgUrl} />
				</div>
			</div>
		</li>
	);
}
