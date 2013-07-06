var tweet = require('./tweet');

setInterval( function(){
	console.log('checking...');
	if(! (new Date().getMinutes() % 15)) { //only tweet on the quarter hour
		var status = 'The time is ' + new Date().toLocaleTimeString();
		console.log('tweeting!');
		console.log(status);
		tweet(status);
	}
}, 1000 * 59); // check every min