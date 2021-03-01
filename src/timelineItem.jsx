import React from 'react';
import './timelineItem.css';

export default function TimelineItem({ imgUrl, title, caption, date }) {
	return (
		<li className="timelineItem">
			<div>
				<time>{date}</time>
				<div>
					<h2>{title}</h2>
					<p>{caption}</p>
					<img src={imgUrl} />
				</div>
			</div>
		</li>
	);
}
