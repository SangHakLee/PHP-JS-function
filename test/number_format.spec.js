const should = require('should')
const number_format = require('../lib/number_format')

describe(`/lib/number_format.js test spec`, () => {
  describe(`number_format()`, () => {
    it(`should be 'Function'`, () => {
      (number_format).should.be.Function()
    })
  })
})