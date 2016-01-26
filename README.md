line-stream-util
===================

## Install

```bash
npm i line-stream-util
```

## Requires
```js
var sutil = require('line-stream-util')
var fs = require('fs')
```

## split lines with '\n'

```js
fs.createReadStream('a.txt')
  .pipe(sutil.split()) // split lines
  .setEncoding('utf8')
  .on('data', console.log)
```

## join lines with '\n'

```js
fs.createReadStream('a.txt')
  .pipe(sutil.split())
  .pipe(sutil.join()) // join lines
  .pipe(fs.createWriteStream('b.txt'))
```



## get head lines

```js
fs.createReadStream('test/a.txt')
  .pipe(sutil.head(1)) // get head lines
  .pipe(sutil.split())
  .setEncoding('utf8')
  .on('data', console.log)
```


