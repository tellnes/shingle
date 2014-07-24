# shingle

[![Build Status](https://travis-ci.org/tellnes/shingle.svg?branch=master)](https://travis-ci.org/tellnes/shingle)
[![Coverage Status](https://coveralls.io/repos/tellnes/shingle/badge.png?branch=master)](https://coveralls.io/r/tellnes/shingle?branch=master)
[![Dependency Status](https://david-dm.org/tellnes/shingle.svg)](https://david-dm.org/tellnes/shingle)
[![Tips](http://img.shields.io/gittip/tellnes.png)](https://www.gittip.com/tellnes/)

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
