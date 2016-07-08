var stream = require('stream')
var util = require('util')


module.exports = function(count) {
  return new RemoveHead(count)
}

function RemoveHead(count) {
  this._count_max = count
  this._count = 0
  stream.Transform.call(this)
}

util.inherits(RemoveHead, stream.Transform)

RemoveHead.prototype._transform = function(line, enc, callback) {
  for (var i = 0; i < line.length; i++) {
    if (line[i] !== 10) {
      continue
    }
    this._count++
    if (this._count < this._count_max) {
      continue
    }
    // done skipping
    this.push(line.slice(i + 1))
    this._transform = passThrough
    return callback()
  }
}

function passThrough(line, enc, callback) {
  this.push(line)
  callback()
}


