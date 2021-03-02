import React from 'react';
import './timelineItem.css';

export default function TimelineItem({ imgUrl, title, caption, date }) {
	return (
		<li className="timelineItem">
			<div>
				<time>{date}</time>
				<div>
        <h1>{title}</h1>
					<p>{caption}</p>
					<img src={imgUrl} />
				</div>
			</div>
		</li>
	);
}
