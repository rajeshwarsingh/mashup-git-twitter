'use strict'

const getGithubRepos = require('./models/github')
const { getTweets } = require('./models/twitter')

const mapTweets = async (projects) => {
  let promises = projects.map(async project => {
    let tweets = []
    tweets = await getTweets(project.full_name)
    project.tweets = tweets
    return project
  })
  return Promise.all(promises)
}

const run = () => {
  console.log("Result is fetching, Please wait for few second...")
  return getGithubRepos('Reactive').then(results => {
    if(results.length === 0) return []
    return results.data.items.slice(0, 10).map(i => ({name:i.name,full_name:i.full_name,html_url:i.html_url}))
  })
  .then(projects => {
    return mapTweets(projects)
  })
  .then(data=>{
    console.log(JSON.stringify(data));
    return Promise.resolve(data) // Needed in Integration testing
  })
  .catch(err => {
    console.log('err :',err)
    return err
  })
}

module.exports = run
