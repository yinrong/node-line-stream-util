var stream = require('stream')
var util = require('util')


module.exports = function(count) {
  return new Head(count)
}

function Head(count) {
  this._count_max = count
  this._count = 0
  stream.Transform.call(this)

  var that = this
  this.on('pipe', function(upstream) {
    that._upstream = upstream
  })
}

util.inherits(Head, stream.Transform)

Head.prototype._transform = function(line, enc, callback) {
  if (this._count > this._count_max) {
    return callback()
  }
  var end
  for (var i = 0; i < line.length; i++) {
    if (line[i] !== 10) {
      continue
    }
    this._count++
    if (this._count === this._count_max) {
      this.end()
      if (this._upstream) {
        this._upstream.unpipe()
      }
      end = i + 1
      i = line.length
    }
  } // end for
  this.push(line.slice(0, end))
  callback()
}


