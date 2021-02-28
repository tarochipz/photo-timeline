import React from 'react';
import TimelineItem from './timelineItem.jsx';
import './timeline.css';

export default function Timeline() {
	const items = document.getElementsByTagName('li');

	const elementsInViewport = (el) => {
		var rect = el.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	};
	const updateInView = () => {
		for (var i = 0; i < items.length; i++) {
			if (elementsInViewport(items[i])) {
				if (!items[i].classList.contains('in-view')) {
					items[i].classList.add('in-view');
				}
			} else if (items[i].classList.contains('in-view')) {
				items[i].classList.remove('in-view');
			}
		}
	};

	React.useEffect(() => {
		window.addEventListener('load', updateInView);
		window.addEventListener('scroll', updateInView);
	}, []);

	return (
		<ul>
			<TimelineItem
				imgUrl={
					'https://lh3.googleusercontent.com/BUsgXDCBpPMgRminNzBs7k9zJwnewUTtLrErJphSmud9p2bbv5K4FAfFmbmz-DMSsu30uoIolWWa525l1tMG1rOt=w640-h400-e365-rj-sc0x00ffffff'
				}
				title={'test'}
				date={'10/11/12'}
			/>
			<TimelineItem
				imgUrl={
					'https://lh3.googleusercontent.com/BUsgXDCBpPMgRminNzBs7k9zJwnewUTtLrErJphSmud9p2bbv5K4FAfFmbmz-DMSsu30uoIolWWa525l1tMG1rOt=w640-h400-e365-rj-sc0x00ffffff'
				}
				title={'test'}
				date={'10/11/12'}
			/>
      <TimelineItem
				imgUrl={
					'https://lh3.googleusercontent.com/BUsgXDCBpPMgRminNzBs7k9zJwnewUTtLrErJphSmud9p2bbv5K4FAfFmbmz-DMSsu30uoIolWWa525l1tMG1rOt=w640-h400-e365-rj-sc0x00ffffff'
				}
				title={'test'}
				date={'10/11/12'}
			/>
      <TimelineItem
				imgUrl={
					'https://lh3.googleusercontent.com/BUsgXDCBpPMgRminNzBs7k9zJwnewUTtLrErJphSmud9p2bbv5K4FAfFmbmz-DMSsu30uoIolWWa525l1tMG1rOt=w640-h400-e365-rj-sc0x00ffffff'
				}
				title={'test'}
				date={'10/11/12'}
			/>
      <TimelineItem
				imgUrl={
					'https://lh3.googleusercontent.com/BUsgXDCBpPMgRminNzBs7k9zJwnewUTtLrErJphSmud9p2bbv5K4FAfFmbmz-DMSsu30uoIolWWa525l1tMG1rOt=w640-h400-e365-rj-sc0x00ffffff'
				}
				title={'test'}
				date={'10/11/12'}
			/>
		</ul>
	);
}
