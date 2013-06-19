MBTA Alerts
===========

### The Bot That Tweets

The MBTA puts out an RSS feed that an enterprising developer (and frustrated MBTA commuter) started scraping and turning into tweets.

Similarly, this app queries the [MBTA's new realtime API](http://realtime.mbta.com/portal), and will tweet out the short descriptions, with the hashtag #[mbta](https://twitter.com/search?q=%23mbta&src=typd).


### The Story

[FredHQ][fredhq], the creator of [@mbta_alerts][alerts], [almost suspended][almost] the account due to a number of obstacles, but Code for Boston offered to take it over. Fred provided [thorough documentation of his processes][prodoc], which led to the development of this app.

[fredhq]: https://twitter.com/fredhq
[alerts]: https://twitter.com/mbta_alerts
[almost]: https://gist.github.com/fredhq/34781ea7c60c1388e16e
[prodoc]: https://gist.github.com/fredhq/eaf7a6ebb1ac88c6cc69

The old RSS feed used short descriptions which were tweetable, but upgrades to the [current feed](http://realtime.mbta.com/alertsrss/rssfeed4) caused technical problems for the bot.

### Tech stack

MBTA Alerts version 2.0 uses:

+ [Node.js][node] v0.10.12
+ [NPM]
+ [Redis][red] as a database

[node]: http://www.nodejs.org/
[red]: http://redis.io/


### Getting Set Up for Development

Make sure you have `npm`, Node.js >= 0.10.0, and `git`. NPM should be included when you install node, but it isn't on some systems. 

Install all required modules

```
$ npm install
```

To determine if you have Redis, run `redis-server -v`.

Install redis if you have not done so previously.

```
$ wget http://redis.googlecode.com/files/redis-2.6.13.tar.gz
$ tar xzf redis-2.6.13.tar.gz
$ cd redis-2.6.13
$ make
```

We use [Foreman](https://github.com/ddollar/foreman) to run the webserver and Redis at the same time, using the processes defined in `Procfile`. Run `foreman start` and use `^C` to end.
