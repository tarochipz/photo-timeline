import React from 'react';
import TimelineItem from './timelineItem.jsx';
import './timeline.css';

export default function Timeline() {
	const items = document.getElementsByTagName('li');
	const imgPath = 'https://raw.githubusercontent.com/tarochipz/photo-timeline/main/assets/images/';
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
				imgUrl={`${imgPath}nyc_2016.jpg`}
				title={'NYC'}
				caption={
					'That time I randomly asked you to come to NYC with me and Theresa. We went to a cool club above a hotel and Kevin got really sad because you danced with Theresa. Then we were being akward on the roof of the airbnb after.'
				}
				date={'3/26/2016'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}vegas_2016.jpg`}
				title={'White Castle in Vegas'}
				caption={
					'I came to SF with two gay guys and we all went to Vegas. I told Marina I liked you before the trip and she was really confused. I was awkward the whole trip, I think we made Marina uncomfortable lel.'
				}
				date={'9/24/2016'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}thailand_2016.jpg`}
				title={'First time in Thailand'}
				caption={
					'Had dinner with a 360 view of Bangkok. We heard crazy thunder right when we were done eating and everyone ran inside. You made two dinner reservations that night. I was full af and jetlagged and kept passing out everywhere we went. This was one of my best trips we did so many cool things - we fed elephants and you rode a scooter for the first time after I injured myself within the first 10 minutes of getting on one. I was so awkward I grabbed on to your backpack on the scooter.'
				}
				date={'10/30/2016'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}xmaseve_toronto_2016.jpg`}
				title={'Xmas eve clubbing in Toronto'}
				caption={
					'We went to random clubs with Edna and ended up in a sketchy after hours in Chinatown somewhere. Then you spent too much money ubering to my house xD'
				}
				date={'12/24/2016'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}sanbruno.jpg`}
				title={'San Bruno Caltrain Station'}
				caption={
					"I moved to SF and crashed at your place in San Bruno for a few weeks. You kept finding my fake eyelashes on your shoes. You asked me to be your gf but I didn't respond because I'm autistic."
				}
				date={'2/24/2017'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}march_2017.jpg`}
				title={'Dinner at Gitane'}
				caption={
					"After a few weeks I finally found my own place and moved to Lansing. We also finally started dating after I asked if you still wanted me to be your gf and you didn't respond, but then you pretended to forget something at my place and came back. Our friends had a group chat about this and were apparently really frustrated at how autistic we were. You made a nice dinner reservation at this french restaurant in an cute alley."
				}
				date={'3/18/2017'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}la_2017.jpeg`}
				title={'SF buddies trip to LA'}
				caption={
					'First trip with SF buddies to LA. We met up with my childhood friends at a club, then went to a strip club and made Marina really uncomfortable.'
				}
				date={'4/16/2017'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}anhoang.jpg`}
				title={'Anh Hoang'}
				caption={
					'We biked to Sausalito for the first time and then went to Anh Hoang after and ordered so many of these beef rolls. This might have been the first time we went to Anh Hoang too. I will never get sick of eating these beef rolls.'
				}
				date={'5/14/2017'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}edc_2017.jpg`}
				title={'First EDC'}
				caption={
					"Rolling at the first Eric Prydz set and seeing the crazy fireworks for the first time is one of my favorite memories of us. You were so happy and I couldn't stop looking at your face, we were being weird the whole time and scared all our friends. It was probably the first time I really enjoyed EDM music."
				}
				date={'6/19/2017'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}pie.jpg`}
				title={'Pecan Cheesecake Pie'}
				caption={
					'The first time we made this Pecan Cheesecake Pie because you really wanted to make a pie after you saw Bill Burr do it.'
				}
				date={'7/8/2017'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}barcelona_2017.jpg`}
				caption={
					'Dragged you to Europe to go to a wedding. We went to Barcelona and barhopped around these cute alleys and saw this cool park.'
				}
				title={'Park Guel in Barcelona'}
				date={'8/4/2017'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}france_2017.jpg`}
				title={"Fatmata's wedding"}
				caption={
					"Went on a mission to go to my friend's wedding. I was PMSing, it was uncomfortably hot and I got a bunch of bug bites from sleeping in the living room then got sick at the end of it. But you dealt with me complaining the whole time and made me feel better <3"
				}
				date={'8/5/2017'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}paris_2017.JPG`}
				title={'Paris'}
				caption={
					"Saw all the cool things in Paris, we spent a whole day at the Louvre and went to a really cute cafe called Kisune in a park inside the Palais Royale. We took a bunch of failed/really bad selfies with the Eiffel tower in the back. We went on a dinner cruise around the Eiffel tower and it was all sparkly at night. You took a really ugly picture of me during dinner and wouldn't delete it."
				}
				date={'8/7/2017'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}amsterdam_2017.jpg`}
				title={'Amsterdam'}
				caption={
					'We got really high in Amsterdam in a basement of a coffeeshop and watched some girls track race on the TV for a really long time for no reason. The food there was really good. I bought this pineapple sweater. We went to the red light district and saw a guy get rejected by a prostie and old brown aunties sucking on penis shaped lollipops at a sex show.'
				}
				date={'8/11/2017'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}prague_2017.JPG`}
				title={'Prague'}
				caption={
					'Our Airbnb cancelled on us when we got there but we figured it out and then ate too many commie potatoes. The castles and clubs were lit though. We went to a big club and then a random small club with strippers everywhere. We went to Hemingway which was on the list of top 50 bars in the world. But that absinthe bar we went back to two nights in a row was better, we tried almost everything on the menu.'
				}
				date={'8/13/2017'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}sandiego_2017.jpg`}
				title={'San Diego trip'}
				caption={
					"Went to San Diego for the first time with SF buddies. I think I was really stressed out that weekend I don't remember much but I got really mad at you and Bach at some point because you guys were being loud when I was trying to work. You came in to apologize and I was surprised because I didn't expect it but it made me feel happy that you did. I think we were looking for seals in this picture and they were really stinky."
				}
				date={'9/2/2017'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}sfhunt_2017.jpg`}
				title={'SF Hunt'}
				caption={
					'We did this SF scavenger hunt thing with SF buddies and found a lot of cool things in SF. We had no chance of winning because we were not prepared and everyone had bikes but I really liked exploring and walking around the entire city with you and our friends.'
				}
				date={'9/9/2017'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}oct2017.PNG`}
				title={'At a party'}
				caption={
					"I think we were at a party at Lisa's place here. We had so many fun nights going out in SF. You look rapey in this pic lmfao."
				}
				date={'10/8/2017'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}nov2017.jpg`}
				title={'Sleepy Rav'}
				caption={"I used to put my pusheens beside you before I go to work every morning I don't know why rofl"}
				date={'11/7/2017'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}holidayparty_2017.jpg`}
				title={'Medallia holiday party'}
				caption={
					'That time you trusted me to make a good life decision but I ended up taking a big paycut to leave LiveRamp for Medallia and was poor for half of 2018. At least the holiday party was cool?'
				}
				date={'12/13/2017'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}toronto_2017.jpg`}
				title={'Eric Prydz'}
				caption={
					"Pre-drinking at Theresa's place before going to see Eric Prydz @ Rebel in Toronto. We were waiting in the line for a long time and it was cold I wanted warm hugs but your cousin was there xD"
				}
				date={'12/29/2017'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}tahoe_2017.jpeg`}
				title={'Tahoe'}
				caption={
					"We went to Tahoe with SF buddies and derped around the city with Pablo and Sanjay while everyone else went skiing. There were too giant floofy dogs and a little corgi that jumped on Pablo's balls, Sanjay beat Jack in Poker, Bach broke his ACL because Julie told him to go over a big hill."
				}
				date={'1/28/2018'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}philz.jpeg`}
				title={'Philz'}
				caption={
					'We started going to Philz and other coffee shops on weekends to do work. This was at the Philz by Lansing.'
				}
				date={'2/11/2018'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}dinner_2018.jpeg`}
				title={'Fancy steak dinner'}
				caption={
					'We decided to have a fancy steak dinner with SF buddies. I think there was a reason for this but I do not remember what it is.'
				}
				date={'3/28/2018'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}apr2018.jpg`}
				title={'Fort Mason'}
				caption={
					"We walked around a lot this day. We had burmese food in the sunset area and then walked to Golden Gate park. Then we walked to Lyon street steps and down to the Palace of Fine arts, then to the Fort Mason / Chrissy Field area behind it. I was really happy because went out and walked around all day with me since you don't do that all the time."
				}
				date={'4/22/2018'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}vegas_2018.jpeg`}
				title={'Kbbq in Vegas before EDC'}
				caption={
					'We somehow convinced the rest of our friends to come to EDC. I think we missed Kygo because we all took too long eating dinner and getting ready. We found out I can actually walk much faster than you if I really wanted to :D'
				}
				date={'5/18/2018'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}edc_2018.jpg`}
				title={'Ferris wheel at EDC'}
				caption={'First time going on ferris wheel at EDC. I was really excited.'}
				date={'5/20/2018'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}sandieo_2018.JPG`}
				title={'San Diego'}
				caption={
					'Second trip to San Diego. Ate a lot of kebab shop, worked in a really nice coffee / flower shop and saw a lot of beaches and of coasts with water. The airbnb listing was very misleading and there was only one room, but we got it by default. We hung out in the living room really late one night while you told everyone about Q and conspiracies.'
				}
				date={'6/10/2018'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}moma_2018.jpg`}
				title={'Moma'}
				caption={
					'First time going to the SF Moma. I think we went with Kevin and I think were also really high. Your hair looks like a mushroom.'
				}
				date={'8/11/2018'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}candymuseum.JPG`}
				title={'Candy museum'}
				caption={
					'I dragged you to the candy museum for IG pics with Michelle and Kevin but it ended up being pretty fun. We tried to copy these emojis.'
				}
				date={'9/14/2018'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}pointreyes.jpg`}
				title={'Point Reyes'}
				caption={
					'We had a day trip before Sanjay moved to NYC. We were supposed to see Redwoods but missed it, then we missed Point Reyes and ended up at a random beach. This was a random stop in a small town near Point Reyes. I was talking to Kevin and a random guy flipped out because he heard me use the word retarded in a sentence. I was mad at how poorly planned the day was but it was still a good time hanging out with you and our friends.'
				}
				date={'9/23/2018'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}hk_2018.JPG`}
				title={'OZONE in Hong Kong'}
				caption={
					"We went to the tallest bar in the world in Hong Kong and met Jesse's friends. The view in the bathroom was sickkk. Our airbnb was made for tiny people and you barely fit in the bed and bathroom. We took a tram and hiked up Victoria peak but there was too much smog to see clearly. I got rekt by the air pollution. We also went to this party area that was really lit. I'm glad we got to see Hong Kong before crazy shit started happening there."
				}
				date={'10/6/2018'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}hkmountain_2018.jpg`}
				title={'Lantau Island in Hong Long'}
				caption={
					'Took a cable car up a big mountain at Lantau island. It was really pretty up there. We saw some wild goats and went inside a temple and ate vegetarian buddhist food.'
				}
				date={'10/7/2018'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}tokyo_2018.JPG`}
				title={'Tokyo'}
				caption={
					'Ate all the delicious sushi and went to a really good ramen bar with single seats in Tokyo. The best place was this standing sushi bar that we randomly walked into that served sushi on leaves. I asked for no wasabi and spicy mayo and the chef was really confused and offended. I think we were waiting for fluffy japanese pancakes here. This is a cute pic :D'
				}
				date={'10/13/2018'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}osaka_2018.jpg`}
				title={'osaka'}
				caption={
					'This was at a big castle in Osaka. We went to a building with a bunch of cool small bars, ate a lot of takoyaki, ate really good wagyu beef and we went to a cringy sex show.'
				}
				date={'10/18/2018'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}xmas_2018.JPG`}
				title={'Xmas party @ lansing'}
				caption={'We had lots of fun parties at Lansing.'}
				date={'12/7/2018'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}nye_2018.jpg`}
				title={'NYE in toronto'}
				caption={
					"We rented out a hotel downtown for NYE with SF buddies and some of my Toronto friends. Not sure why you're wearing a dragon ball Z shirt xD"
				}
				date={'12/31/2018'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}holidayparty_2019.jpg`}
				title={'IFTTT holiday party'}
				caption={
					'For some reason your company had a holiday party in January. It was at a really cool bar, one of your coworkers told us about chartruese. There were a lot of nerds there.'
				}
				date={'1/16/2019'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}views_2019.JPG`}
				title={'Tank Hill'}
				caption={
					"Not sure what we were doing before this. But Kevin randomly found a cool hill to watch sunset at. I don't think we ever came back here again, we should bike here some time."
				}
				date={'1/28/2019'}
			/>
      {/* <TimelineItem
				imgUrl={`${imgPath}views_2019.JPG`}
				title={'Tank Hill'}
				caption={
					""
				}
				date={'2//2019'}
			/>
      <TimelineItem
				imgUrl={`${imgPath}views_2019.JPG`}
				title={'Tank Hill'}
				caption={
					""
				}
				date={'3//2019'}
			/>
      <TimelineItem
				imgUrl={`${imgPath}views_2019.JPG`}
				title={'Tank Hill'}
				caption={
					""
				}
				date={'4//2019'}
			/> */}
			<TimelineItem
				imgUrl={`${imgPath}edc_2019.jpg`}
				title={'EDC 2019'}
				caption={
					"3rd EDC! We got so many compliments on our matching dragon ball Z shirts. This was probably the best EDC. Ironman was too strong and we kept buying all the bananas at the convenience store in the hotel. We also shot guns and ate at Gordon Ramsey's restaurant"
				}
				date={'5/17/2019'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}bigsur.jpg`}
				title={'Big Sur'}
				caption={
					'We went on so many nice hikes in SF. This was from a day trip to Big Sur with Pablo and Robyn.'
				}
				date={'6/8/2019'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}mammoth.jpg`}
				title={'Mammoth lakes'}
				caption={
					"Mammoth lakes trip with SF buddies. We saw a really cool salt lake, walked around a crater and went to a natural hot spring. I didn't get the memo about bringing a bathing suit."
				}
				date={'6/22/2019'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}liholiho.JPG`}
				title={'Liho Liho Yacht Club'}
				caption={'SF buddies dinner at Liho Liho Yacht club before Anthony moved to NYC.'}
				date={'7/26/2019'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}halloween_2019.jpg`}
				title={'Halloween Party'}
				caption={
					"Halloween party at Robyn's. Look at us not knowing that this is the last halloween party we would go to before Covid. You're wearing your Dragon Ball Z shirt in a lot of these photos so far."
				}
				date={'11/2/2019'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}singapore_2019.jpg`}
				title={'Singapore'}
				caption={
					"Crazy skyline outside the art science museum in Singapore. You weren't too excited about Singapore at first but ended up liking it a lot because I was right all along :D The airport was next level, we went to a cloud forest, had the best chicken sandwhich at McDonalds and had the best hand pulled noodles in a food court."
				}
				date={'11/9/2019'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}bobamuseum.jpg`}
				title={'Boba Museum'}
				caption={'Boba museum in Singapore. I know you secretly had fun xD'}
				date={'11/10/2019'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}gaa.jpg`}
				title={'Gaa in Bangkok'}
				caption={
					"Best Michelin star meal for Bach's birthday dinner. Kevin licked the plate and looked you straight in the eye while licking a little baby corn."
				}
				date={'11/15/2019'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}bangkok_2019.JPG`}
				title={'Ayutthaya'}
				caption={
					'Day trip to Ayutthaya and boat ride back to Bangkok. We bought and wore matching elephant pants. Bach disappeared for the day to hang out with Mari and her family.'
				}
				date={'11/18/2019'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}lebua.jpg`}
				title={'Another fancy dinner in Bangkok'}
				caption={
					'We tried to go back to this skybar we went to the first time we were in Thailand but ended up not finding the same place. But we had a really nice dinner with a cool view.'
				}
				date={'11/19/2019'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}holiday_2019.jpg`}
				title={'LR Holiday party'}
				caption={
					'LiveRamp holiday party at Emporium. I stole a bunch of coins at the end of this and still have them. We went to Audio after and had coke for the first time. Kevin got really drunk and tried to hit on a girl.'
				}
				date={'12/14/2019'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}toronto_2019.JPG`}
				title={'Toronto'}
				caption={'Visiting Sanjay and his broken foot in Toronto.'}
				date={'12/29/2019'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}moraga.JPG`}
				title={'Moraga Steps'}
				caption={
					'We went to my favorite spot in SF for day after valentines day. This was when I first got my camera. We went to a coffee shop after. I think this was the last time we went out normally before Covid.'
				}
				date={'2/15/2020'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}covid.JPG`}
				title={'Embarcadero Center'}
				caption={
					'We got food and walked around embarcadero center. Everything was empty. I took a lot of pictures of you.'
				}
				date={'4/25/2020'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}bike.jpg`}
				title={'First bike ride to GG park'}
				caption={'We bought bikes and this was our first bike ride to Golden Gate park.'}
				date={'5/3/2020'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}presidio.JPG`}
				title={'Presidio'}
				caption={'We biked to Presidio to hang out with Michelle before she moved to Seattle'}
				date={'7/7/2020'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}sausalito.JPG`}
				title={'Sausalito'}
				caption={
					'We went to Sausalito with Bach before he moved back to Vancouver. We ate fish and chips outside. A nice old man insisted on taking a photo of us.'
				}
				date={'7/19/2020'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}bonez.JPG`}
				title={'Bonez'}
				caption={'First rave during Covid with new friends.'}
				date={'9/4/2020'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}santabarb.jpg`}
				title={"Lizard's Mouth @ Santa Barbara"}
				caption={
					'We went on a road trip with Adam and Sitan and stopped at Santa Barbara. We went on a hike and listened to music on some rocks during sunset'
				}
				date={'10/17/2020'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}redrocks.jpg`}
				title={'Red Rocks Canyon'}
				caption={
					'Stopped by Red Rocks Canyon on road trip to Vegas. We were having sandwiches and you tried to climb up a rock with a sandwhich in one hand and slipped like a derp.'
				}
				date={'10/18/2020'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}christmas_2020.JPG`}
				title={'Christmas Eve'}
				caption={'We had hotpot for Christmas eve. This was the first holiday we spent together.'}
				date={'12/24/2020'}
			/>
			<TimelineItem
				imgUrl={`${imgPath}nye_2020.JPG`}
				title={'New Years Eve'}
				caption={'We had dinner and party at our new place for New Years Eve.'}
				date={'12/31/2020'}
			/>
		</ul>
	);
}
