'use strict'

const {
  TWITTER_CONSUMER_KEY = '',
  TWITTER_CONSUMER_SECRET = '',
  TWITTER_ACCESS_TOKEN_KEY = '',
  TWITTER_ACCESS_TOKEN_SECRET = '',
  GITHUB_ENDPOINT = ''
} = process.env

const TWITTER_CONFIG = {
  CONSUMER_KEY: TWITTER_CONSUMER_KEY,
  CONSUMER_SECRET: TWITTER_CONSUMER_SECRET,
  ACCESS_TOKEN_KEY: TWITTER_ACCESS_TOKEN_KEY,
  ACCESS_TOKEN_SECRET: TWITTER_ACCESS_TOKEN_SECRET
}

const GITHUB_CONFIG = {
  ENDPOINT: GITHUB_ENDPOINT,
  NUMBER_RESULT: 10 // hardcoded as mentioned in task
}

const CONFIG = {
  searchText: 'Reactive' // hardcoded as mentioned in task
}

const REQUIRED_CONFIG = [
  'TWITTER_CONSUMER_KEY',
  'TWITTER_CONSUMER_SECRET',
  'TWITTER_ACCESS_TOKEN_KEY',
  'TWITTER_ACCESS_TOKEN_SECRET',
  'GITHUB_ENDPOINT'
]

REQUIRED_CONFIG.forEach(key => {
  if (process.env[key] === undefined) {
    console.error('[Error] Missing Config:', key)
    return process.exit(1)
  }
})

module.exports = { TWITTER_CONFIG, GITHUB_CONFIG, CONFIG }
