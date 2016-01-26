var stream = require('stream')
var util = require('util')


module.exports = function() {
  return new Join()
}

function Join(count) {
  stream.Transform.call(this)
}

util.inherits(Join, stream.Transform)

Join.prototype._transform = function(line, enc, callback) {
  this.push(line)
  this.push('\n')
  callback()
}


