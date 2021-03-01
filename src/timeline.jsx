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
			<TimelineItem imgUrl={'../assets/images/nyc_2016.jpg'} title={'NYC!'} date={'3/26/2016'} />
			<TimelineItem imgUrl={'../assets/images/vegas_2016.jpg'} title={'First Vegas trip'} date={'9/24/2016'} />
			<TimelineItem
				imgUrl={'../assets/images/thailand_2016.jpg'}
				title={'Rooftop bar first time in Thailand'}
				date={'10/30/2016'}
			/>
			<TimelineItem
				imgUrl={'../assets/images/xmaseve_toronto_2016.jpg'}
				title={'Xmas eve clubbing in Toronto'}
				date={'12/24/2016'}
			/>
			<TimelineItem imgUrl={'../assets/images/march_2017.jpg'} title={'Dinner at Gitane'} date={'3/18/2017'} />
			<TimelineItem
				imgUrl={'../assets/images/la_2017.jpeg'}
				title={'First SF buddies trip to LA'}
				date={'4/16/2017'}
			/>
			<TimelineItem
				imgUrl={'../assets/images/edc_2017.jpg'}
				title={'First EDC with SF buddies'}
				date={'6/19/2017'}
			/>
			<TimelineItem
				imgUrl={'../assets/images/barcelona_2017.jpg'}
				title={'Park Guel in Barcelona'}
				date={'8/4/2017'}
			/>
			<TimelineItem imgUrl={'../assets/images/france_2017.jpg'} title={'Wedding in France'} date={'8/5/2017'} />
			<TimelineItem
				imgUrl={'../assets/images/paris_2017.jpg'}
				title={'Bad selfies with Eiffel tower'}
				date={'8/7/2017'}
			/>
			<TimelineItem imgUrl={'../assets/images/amsterdam_2017.jpg'} title={'Amsterdam'} date={'8/11/2017'} />
			<TimelineItem imgUrl={'../assets/images/prague_2017.jpg'} title={'Prague'} date={'8/13/2017'} />
			<TimelineItem imgUrl={'../assets/images/sandiego_2017.jpg'} title={'San Diego trip'} date={'9/2/2017'} />
			<TimelineItem
				imgUrl={'../assets/images/sfhunt_2017.jpg'}
				title={'SF Hunt with SF buddies'}
				date={'9/9/2017'}
			/>
			<TimelineItem
				imgUrl={'../assets/images/holidayparty_2017.jpg'}
				title={'Medallia holiday party'}
				date={'12/13/2017'}
			/>
			<TimelineItem
				imgUrl={'../assets/images/toronto_2017.jpg'}
				title={'Seeing Eric Prydz @ Rebel in Toronto'}
				date={'12/29/2017'}
			/>
			<TimelineItem
				imgUrl={'../assets/images/tahoe_2017.jpeg'}
				title={'Tahoe trip w/ SF buddies'}
				date={'1/28/2018'}
			/>
			<TimelineItem
				imgUrl={'../assets/images/dinner_2018.jpeg'}
				title={'Fancy SF buddies steak dinner'}
				date={'3/28/2018'}
			/>
			<TimelineItem
				imgUrl={'../assets/images/vegas_2018.jpeg'}
				title={'Second EDC with more friends'}
				date={'5/18/2018'}
			/>
			<TimelineItem
				imgUrl={'../assets/images/edc_2018.jpg'}
				title={'Waiting in line for first time on ferris wheel at EDC'}
				date={'5/20/2018'}
			/>
			<TimelineItem
				imgUrl={'../assets/images/sandiego_2018.JPG'}
				title={'Second trip to San Diego'}
				date={'6/10/2018'}
			/>
			<TimelineItem imgUrl={'../assets/images/moma_2018.HEIC'} title={'Moma'} date={'8/11/2018'} />
			<TimelineItem imgUrl={'../assets/images/candymuseum.JPG'} title={'Candy museum'} date={'9/14/2018'} />
			<TimelineItem
				imgUrl={'../assets/images/pointreyes.HEIC'}
				title={'Attempted to go to point reyes'}
				date={'9/23/2018'}
			/>
			<TimelineItem
				imgUrl={'../assets/images/hk_2018.JPG'}
				title={'Tallest bar in the world in HK'}
				date={'10/6/2018'}
			/>
			<TimelineItem
				imgUrl={'../assets/images/hkmountain_2018.HEIC'}
				title={'Cable car up a mountain in HK'}
				date={'10/7/2018'}
			/>
			<TimelineItem
				imgUrl={'../assets/images/digitalartmuseum.HEIC'}
				title={'Cable car up a mountain in HK'}
				date={'10/11/2018'}
			/>
			<TimelineItem imgUrl={'../assets/images/tokyo_2018.JPG'} title={'tokyo'} date={'10/13/2018'} />
			<TimelineItem imgUrl={'../assets/images/tokyo_2018.JPG'} title={'tokyo'} date={'10/13/2018'} />
			<TimelineItem imgUrl={'../assets/images/osaka_2018.JPG'} title={'osaka'} date={'10/18/2018'} />
			<TimelineItem imgUrl={'../assets/images/xmas_2018.JPG'} title={'Xmas party @ lansing'} date={'12/7/2018'} />
			<TimelineItem imgUrl={'../assets/images/nye_2018.JPG'} title={'NYE in toronto'} date={'12/31/2018'} />
			<TimelineItem
				imgUrl={'../assets/images/holidayparty_2019.JPG'}
				title={'IFTTT delayed holiday party'}
				date={'1/16/2019'}
			/>
      <TimelineItem
				imgUrl={'../assets/images/views_2019.JPG'}
				title={'Kevin found a random sick spot'}
				date={'1/28/2019'}
			/>
      <TimelineItem
				imgUrl={'../assets/images/edc_2019.JPG'}
				title={'EDC 2019'}
				date={'5/17/2019'}
			/>
		</ul>
	);
}
