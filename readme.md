# twitter-emojis

Search twitter, get a stream with responses (but only responses that include emojis).

## Install

```shell
npm install twitter-emojis --save
```

## Usage

```js
// stream is an object stream
var stream = require('twitter-emojis')({
  credentials: {
    consumer_key: ...,
    consumer_secret: ...,
    access_token: ...,
    access_token_secret: ...
  },
  // these are channels, as defined in twitter-stream-channels
  channels: {
    channel_name: [ 'search', 'terms' ],
    channel_name2: [ 'some', 'other', 'search', 'terms' ]
  }
});

stream.on('data', function (obj) {
  console.log(obj);
});
```

See demo.js for more information
