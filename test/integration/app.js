'use strict'

const run = require('../../app')

describe('Integration Test', function() {
  it('returns an array of projects', async () => {
    let data = await run()
    expect(data).to.be.an('array')
  })

  it('returns an array of length 10', async () => {
    let data = await run()
    expect(data).to.have.lengthOf(10)
  })

  it('returns an array of ojects with the specified keys', async () => {
    let data = await run()
    expect(data[0]).to.have.keys(['name', 'html_url', 'full_name', 'tweets'])
  })
})
