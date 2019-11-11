'use strict'

const config = require('../config')
const { GITHUB_CONFIG } = config

const axios = require('axios')

const getGithubRepos = function (keyword){
  if(!keyword) return Promise.resolve([])
  return axios.get(`${GITHUB_CONFIG.ENDPOINT}/search/repositories`,{params:{ q: keyword, sort: 'updated', order: 'asc' }})
}

module.exports = getGithubRepos
