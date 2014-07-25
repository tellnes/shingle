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

  t.deepEqual(shingle('foo bar baz', { distance: 2 }), [ 'foo', 'foo bar', 'foo baz', 'bar', 'bar baz', 'baz' ])

  t.deepEqual(
      shingle('foo bar baz haz', { distance: 2 })
    , [ 'foo', 'foo bar', 'foo baz', 'bar', 'bar baz', 'bar haz', 'baz', 'baz haz', 'haz' ]
    )

  t.deepEqual(
      shingle('A B C D', { max: 3, distance: 2 })
    , [ 'A', 'A B', 'A B C', 'A C', 'A C D'
      , 'B', 'B C', 'B C D', 'B D'
      , 'C', 'C D'
      , 'D'
      ]
    )

  t.deepEqual(
      shingle('A B C D', { max: 2, distance: 3 })
    , [ 'A', 'A B', 'A C', 'A D'
      , 'B', 'B C', 'B D'
      , 'C', 'C D'
      , 'D'
      ]
    )

  t.deepEqual(
      shingle('A B C D', { max: 3, distance: 3 })
    , [ 'A', 'A B', 'A B C', 'A C', 'A C D', 'A D'
      , 'B', 'B C', 'B C D', 'B D'
      , 'C', 'C D'
      , 'D'
      ]
    )

  t.deepEqual(
      shingle('A B C D E', { max: 3, distance: 3 })
    , [ 'A', 'A B', 'A B C', 'A C', 'A C D', 'A D', 'A D E'
      , 'B', 'B C', 'B C D', 'B D', 'B D E', 'B E'
      , 'C', 'C D', 'C D E', 'C E'
      , 'D', 'D E'
      , 'E'
      ]
    )

  t.deepEqual(
      shingle('A B C D E', { max: 3, distance: 4 })
    , [ 'A', 'A B', 'A B C', 'A C', 'A C D', 'A D', 'A D E', 'A E'
      , 'B', 'B C', 'B C D', 'B D', 'B D E', 'B E'
      , 'C', 'C D', 'C D E', 'C E'
      , 'D', 'D E'
      , 'E'
      ]
    )

  t.end()
})
