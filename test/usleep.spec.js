const should = require('should')
const co = require('co')
const moment = require('moment')
const usleep = require('../lib/usleep')

describe(`/lib/usleep.js test spec`, () => {
  describe(`usleep()`, function() {
	it(`should be 'Function'`, () => {
	  (usleep).should.be.Function()
	})

	it(`2 seconds sleep`, function(done) {
        this.timeout(100000);
		let i = 0;
		co(function* () {
			while (true) {
				console.log('moment', moment().format('YYYY-MM-DD hh:mm:ss'));
				yield usleep(2000000);
				i++;
				if ( i > 5 ) {
					done();
				}
			}
		});
	})
  })
})
