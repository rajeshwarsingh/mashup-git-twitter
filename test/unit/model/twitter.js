'use strict'

const { getTweets } =  require('../../../models/twitter')
describe('search twitter', () => {
  it('returns empty array if no search criteria provided', async () => {
    let data = await getTweets('')
    expect(data).to.be.an('array')
    expect(data).to.eql([])
  })

  it('returns an array of ojects with the specified keys', async () => {
    let data = await getTweets('yhara/reac')
    expect(data).to.be.an('object')
    expect(Object.keys(data)).to.include.members(['statuses', 'search_metadata'])
  })
})
