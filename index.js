
module.exports = function (input, options) {
  if (typeof input === 'string') input = input.split(/\s/g)

  options = options || {}
  var min = options.min || 2
    , max = Math.max(options.max || 2, min)
    , distance = options.distance || 1
    , seperator = options.seperator || ' '
    , unigrams = options.unigrams !== false
    , output = []
    , length = input.length
    , i, d, j, end, token

  for (i = 0; i < length; i++) {
    if (unigrams) {
      output.push(input[i])
    }

    d = 0
    while (++d <= distance) {
      j = d
      end = Math.min(length - i, Math.max(max + d - 1, d + 1))
      token = input[i]
      while (j < end) {
        token = token + seperator + input[i+j]
        j++
        if (j >= min) {
          output.push(token)
        }
      }
    }

  }

  return output
}
