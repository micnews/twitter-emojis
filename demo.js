'use strict';

if (!process.env.CONSUMER_KEY || !process.env.CONSUMER_SECRET || !process.env.ACCESS_TOKEN || !process.env.ACCESS_TOKEN_SECRET) {
  console.log('Get your twitter application credentials');
  console.log('usage:');
  console.log('CONSUMER_KEY=... CONSUMER_SECRET=... ACCESS_TOKEN=... ACCESS_TOKEN_SECRET...');
  process.exit();
}

var chalk = require('chalk');
var credentials = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
};

var emojis = require('./index')({
  credentials: credentials,
  channels: {
    languages: [ 'javascript', 'php', 'java', 'python', 'perl' ],
    'js-frameworks': [ 'angularjs', 'jquery', 'backbone', 'emberjs' ],
    web: [ 'javascript', 'nodejs', 'html5', 'css', 'angularjs' ]
  }
});

emojis.on('data', function (obj) {
  console.log(chalk.white(obj.tweet.text), obj.emojis, obj.key);
});
