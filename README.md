line-stream-util
===================

## Install

```bash
npm i line-stream-util
```


## split lines with '\n'

```js
var sutil = require('line-stream-util')
var fs = require('fs')

fs.createReadStream('a.txt')
  .pipe(sutil.split())         // split lines
  .setEncoding('utf8')
  .on('data', console.log)
```


## get head lines

```js
var sutil = require('line-stream-util')
var fs = require('fs')

var count = 0

fs.createReadStream('test/a.txt')
  .pipe(sutil.head(1))            // get head lines
  .pipe(sutil.split())
  .setEncoding('utf8')
  .on('data', function(line) {
    count++
    console.log(count + '.', line)
  })
```


