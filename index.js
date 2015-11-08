'use strict';

var TwitterStreamChannels = require('twitter-stream-channels');
var getEmojis = require('get-emojis');
var PassThrough = require('stream').PassThrough;

module.exports = function (opts) {
  var stream = new PassThrough({
    objectMode: true
  });
  var client = new TwitterStreamChannels(opts.credentials);
  var streamChannels = client.streamChannels({ track: opts.channels });

  Object.keys(opts.channels).forEach(function (channel) {
    streamChannels.on('channels/' + channel, function (tweet) {
      var emojis = getEmojis(tweet.text);
      if (emojis.length > 0) {
        stream.push({
          channel: channel,
          key: tweet['$keywords'],
          emojis: emojis,
          tweet: tweet
        });
      }
    });
  });

  return stream;
};
