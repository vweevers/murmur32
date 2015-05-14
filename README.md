# murmur32

> native murmurhash3 32bit with browser fallback

[![npm status](http://img.shields.io/npm/v/murmur32.svg?style=flat-square)](https://www.npmjs.org/package/murmur32) [![Dependency status](https://img.shields.io/david/vweevers/murmur32.svg?style=flat-square)](https://david-dm.org/vweevers/murmur32)

## api

Pass a string and optional seed (unsigned int), get a 32bit integer hash.

```js
var murmur = require('murmur32')
var hash = murmur('rabba rabba rabba', seed)
```

## install

With [npm](https://npmjs.org) do:

```
npm install murmur32
```

and [browserify](http://browserify.org/) for the browser.

## license

[MIT](http://opensource.org/licenses/MIT) © [Vincent Weevers](http://vincentweevers.nl)
