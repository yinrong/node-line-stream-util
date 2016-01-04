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
  .pipe(sutil.split())
  .setEncoding('utf8')
  .on('data', console.log)
```


## get head lines

```js
var sutil = require('line-stream-util')
var fs = require('fs')

var upstream = fs.createReadStream('a.txt')

var count = 0

upstream.pipe(sutil.head(1, upstream))  // upstream will be unpiped automatically
        .pipe(sutil.split())
        .setEncoding('utf8')
        .on('data', function(line) {
          count++
          console.log(count + '.', line)
        })
```


