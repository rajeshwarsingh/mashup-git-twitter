'use strict'

const getGithubRepos = require('../../../models/github')

describe('search github', function() {
  it('returns an array of projects', async () => {
    let {data} = await getGithubRepos('Reactive')
    // console.log("check here****",data)
    expect(data.items).to.be.an('array')
  })

  it('returns projec an object', async () => {
    let {data} = await getGithubRepos('Reactive')
    expect(data.items[0]).to.be.an('object')
  })

  it('returns an array of ojects with the specified keys', async () => {
    let {data} = await getGithubRepos('Reactive')
    expect(Object.keys(data.items[0])).to.include.members(['name', 'html_url', 'full_name']);
  })
})
