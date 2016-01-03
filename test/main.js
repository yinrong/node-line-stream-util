describe('main', function() {
  
  it('head', function(done) {
    var upstream = fs.createReadStream('test/a.txt')

    var result = []
    upstream.pipe(sutil.head(1, upstream))  // upstream will be unpiped automatically
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
