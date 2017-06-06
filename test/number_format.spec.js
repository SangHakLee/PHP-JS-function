const should = require('should')
const number_format = require('../lib/number_format')

describe(`/lib/number_format.js test spec`, () => {
  describe(`number_format()`, () => {
    it(`should be 'Function'`, () => {
      (number_format).should.be.Function()
    })

    it(`number_format(1234.56) should return '1,235'`, () => {
      const result = number_format(1234.56)
      result.should.eql('1,235')
    })

    it(`number_format(67000, 5, ',', '.') should return '67.000,00000'`, () => {
      const result = number_format(67000, 5, ',', '.')
      result.should.eql('67.000,00000')
    })
  })
})