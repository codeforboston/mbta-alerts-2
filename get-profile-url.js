var OAuth = require('oauth').OAuth;
var keys = {
	consumer_key: process.env['CONSUMER_KEY'],
	consumer_secret: process.env['CONSUMER_SECRET'],
	access_token: process.env['ACCESS_TOKEN'],
	access_secret: process.env['ACCESS_SECRET']
};

var twitterer = new OAuth(
	"https:/api.twitter.com/oath/request_token",
	"https://api.twitter.com/oauth/access_token",
	keys.consumer_key,
	keys.consumer_secret,
	"1.0",
	null,
	"HMAC-SHA1"
	);

module.exports = verify;

function verify(next){
	twitterer.get("https://api.twitter.com/1.1/account/verify_credentials.json",
		keys.access_token, keys.access_secret,
		function (error, data) {
			if(error){
				console.log('Error: Something is wrong.\n'+JSON.stringify(error)+'\n');
			}else{
        var screen_name = JSON.parse(data).screen_name;
        next(null, 'http://twitter.com/'+screen_name);
			}
		});
}