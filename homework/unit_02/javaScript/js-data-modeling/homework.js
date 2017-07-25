// 1. Ultra E-mail App
// This app provides easy access to all your e-mail service providers in one app. The app will let you select one of your email addresses and view your e-mails for that address.
Data Types:
1. Specific User
	- list of diff accounts 
	- date account opened
	- default account
	- account info
2. Specific email account
	- specific address 
	- unread mail count
	- username and password
	- last access date

var userData = {
	userId: userAccount123,
	accountAddresses: ['example@gmail.com', 'example@yahoo.com', 'example@hotmail.com'],
	accountCreated: "Jan 1, 2009",
	defaultAccount: "example@gmail.com",
	userName: 'steve123',
	password: 'password',
}

var gmailAccount = {
	lastAccessDate: "July 24, 2017",
	unreadMailTotal: 15;
	accountAddress: 'example@gmail.com',
	gmailPassword: 'password'
}

Example: When userAccount123 logs into Ultra Email, it will default to his gmail account which will read that there are 15 unread emails since his last login on the 24th of June.

// 2. Radio on the Internet app

// This app hosts a ton of radio stations, each featuring their own playlists of songs. The radio stations can be listed by genre or popularity.
Data types:
1. list of all channels
	- most listened to channels
	- genres
	- times listened to
2. specific channels
	- genre and number of subscribers
	- last live broadcast date
	- playlist Data

var channelList = {
	top5Channels: [{channelName: Scarface radio', genre: 'Southern rap', rank: 1}, {channelName: 'Devin the Dude radio', genre: 'smooth hip hop', rank: 2}, {channelName: 'Royce da 5 9 radio', genre: 'lyrical hip hop, rank: 3}, {channelName: 'UGK radio', genre: 'country rap tunes', rank: 4}, {channelName: 'Geto Boys radio', genre: 'dirty south hip hop', rank: 5}],
	topGenres: ['rap', 'country', 'rock', 'jazz']
}

var getoBoysRadio = {
	lastLiveStream: 'July 25, 2017 1600',
	liveStatus: false,
	mostPlayedSong: 'Mind Playin Tricks',
	genre: 'dirth south hip hop',
	numberOfSubscribers: 450
}

Example: A user wants to listen to one of the top channels and can see 'Geto Boys radio' as an option. He can access the most requested song and see if the station is currently live or not.

// 3. Rock Concert App

// This app will be a tool for managing all of your favorite bands' concerts; it will keep track of their tour dates, ticket purchasing, and next recommended show.
Data types:
1. user data
	- what are the users favorite bands
	- user specific account data
	- last show attended
	- total number of shows attended
	- preferred method of communication
2. specific favorited band data
	- last show
	- next show
	- number of users favorited

var user = {
	userName: 'bill123',
	password: 'password',
	favoritedBands: ['Rolling Stones', 'Prhyme', 'Slaughterhouse'],
	numberOfShowsAttended: 15;
	preferredaccount: {type: text, account: 5555555555},
}

var slaughterhouse = {
	lastShow: 'Jan 15 2017',
	venueOfLastShow: 'MSG',
	nextShow: 'July 31, 2017',
	venueOfNextShow: 'United Center',
	numberOfUsersFollowing: 400
}

Example: User follows Slaughterhouse and gets a txt update on his cellphone of their next show in Chicago on the 31st of July.

// 4. Coffee To-Go App

// This app will allow customers to browse a list of coffeeshops nearby, order drinks off of their menu, add those drinks to a shopping cart, and save that cart as a past order once the purchase is complete.
Data types:
1. specific store data
	- menu items and prices
	- location
	- hours
	- reviews
2. ordering data
	- checkout cart
	- order history

var starbucks = {
	menuItems: [{item: coffee, price: 2}, {item: tea, price: 3}, {item: flavored soda, price: 3.5}],
	location: '12 Third Street, NY, NY 10009',
	opensAt: 0900,
	closesAt: 2100,
	reviews: [{user: 'user123', comment: 'overpriced - wouldn\'t return'}, {user: 'bill123', comment: 'my favorite spot in town'}] 
}

var userAppData = {
	itemsInCheckoutCart: [],
	orderHistory: [{item: 'small coffee', price: 2}, {item: 'green tea', price: 3}, {item: 'raspberry flavored soda', price: 3.5}],
}

Example: user bill123 wants to reorder the raspberry flavored soda he got last time he was at Starbucks. He accesses his order history thru the root menu of the app and sees the final order placed in his order history to select it again.
// 5. Team Tracker App

// This app shows you all the latest stats from your favorite sports teams. You can view individual player stats and full team stats.
Data types:
1. team data
	- full roster
	- team name 
	- location
	- next game
	- last game
2. specific player
	- individual stats
	- personal details
	- injury status 

var Juventus = {
	teamName: 'Juventus Football Club',
	fullRoster: ['Gianluigi Buffon', 'Giorgio Chiellini', 'Mehdi Benatia', 'Andrea Barzagli', 'Mattia De Sciglio'],
	lastGame: 'Jun 5, 2015 vs. Real Madrid',
	nextGame: 'TBD',
}

var gianluigiBuffon = {
	fullName: 'Gianluigi Buffon',
	position: 'goalkeeper',
	birthplace: 'Carrara, Italy',
	dateOfBirth: 'Jan 28, 1978',
	injured: false,
	appearances: 488,
	goalsScored: 0
}

Example: User can check out the starting lineup from the last Juventus game again Real Madrid and click into the player Buffon to find out more about his personal details.