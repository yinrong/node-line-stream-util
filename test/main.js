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

  it('join', function(done) {

    var result = ''
    fs.createReadStream('test/a.txt')
      .pipe(sutil.split())
      .pipe(sutil.join())
      .on('data', function(data) {
        result += data.toString()
      })
      .on('end', function() {
        assert.equal(result, 'a\nb\nc\nd\n')
        done()
      })
  })

})

var fs = require('fs')
var sutil = require('..')
var assert = require('assert')
