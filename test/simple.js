var test = require('tap').test
  , shingle = require('../')

test(function (t) {
  
  t.deepEqual(shingle('hello'), [ 'hello' ])
  t.deepEqual(shingle('hello world'), [ 'hello', 'hello world', 'world' ])
  t.deepEqual(shingle('foo bar baz'), [ 'foo', 'foo bar', 'bar', 'bar baz', 'baz' ])

  t.deepEqual(
      shingle('foo bar baz', { max: 3 })
    , [ 'foo', 'foo bar', 'foo bar baz', 'bar', 'bar baz', 'baz' ]
    )

  t.deepEqual(shingle('hello', { unigrams: false }), [ ])
  t.deepEqual(shingle('hello world', { unigrams: false }), [ 'hello world' ])
  t.deepEqual(shingle('foo bar baz', { unigrams: false }), [ 'foo bar', 'bar baz' ])

  t.deepEqual(shingle('foo bar baz', { min: 3, unigrams: false }), [ 'foo bar baz' ])

  t.deepEqual(shingle(['foo bar', 'baz']), [ 'foo bar', 'foo bar baz', 'baz' ])

  t.end()
})
