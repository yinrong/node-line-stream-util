describe('main', function() {
  
  it('head', function(done) {

    var result = []
    fs.createReadStream('test/a.txt')
      .pipe(sutil.head(1))
      .pipe(sutil.split())
      .on('data', function(line) {
        result.push(line.toString())
      })
      .on('end', function() {
        assert.equal(result.length, 1)
        assert.equal(result[0], 'a')
        done()
      })
  })

})

var fs = require('fs')
var sutil = require('..')
var assert = require('assert')
