'strict'

const config = require('../config')
const { TWITTER_CONFIG } = config
const twitter = require('twitter')

const getTweets = ( keyword ) => {
  if(!keyword) return Promise.resolve([])

  let client = new twitter({
    consumer_key: TWITTER_CONFIG.CONSUMER_KEY,
    consumer_secret: TWITTER_CONFIG.CONSUMER_SECRET,
    access_token_key: TWITTER_CONFIG.ACCESS_TOKEN_KEY,
    access_token_secret: TWITTER_CONFIG.ACCESS_TOKEN_SECRET
  })

  return client.get('search/tweets', { q: keyword })
}

module.exports = { getTweets }
