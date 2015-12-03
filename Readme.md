# shingle

[![Version npm](https://img.shields.io/npm/v/shingle.svg?style=flat-square)](https://www.npmjs.com/package/shingle)[![npm Downloads](https://img.shields.io/npm/dm/shingle.svg?style=flat-square)](https://www.npmjs.com/package/shingle)[![Build Status](https://img.shields.io/travis/tellnes/shingle/master.svg?style=flat-square)](https://travis-ci.org/tellnes/shingle)[![Coverage Status](https://img.shields.io/coveralls/tellnes/shingle/master.svg?style=flat-square)](https://coveralls.io/r/tellnes/shingle?branch=master)[![Dependencies](https://img.shields.io/david/tellnes/shingle.svg?style=flat-square)](https://david-dm.org/tellnes/shingle)[![Tips](http://img.shields.io/gratipay/tellnes.png?style=flat-square)](https://gratipay.com/~tellnes/)

Shingle text

## Usage

```js
var shingle = require('shingle')

console.log( shingle('foo bar baz') )
// outputs [ 'foo', 'foo bar', 'bar', 'bar baz', 'baz' ]
```

Please see `test/simple.js` for more examples.

## Install

    npm install shingle

## License

MIT
