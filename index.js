
module.exports = function (input, options) {
  if (typeof input === 'string') input = input.split(/\s/g)

  options = options || {}
  var min = options.min || 2
    , max = Math.max(options.max || 2, min)
    , seperator = options.seperator || ' '
    , unigrams = options.unigrams !== false
    , output = []
    , length = input.length
    , i, j, end, token

  for (i = 0; i < length; i++) {
    if (unigrams) {
      output.push(input[i])
    }

    token = input[i]
    j = 1
    end = Math.min(length - i, max)
    while (j < end) {
      token = token + seperator + input[i+j]
      j++
      if (j >= min) {
        output.push(token)
      }
    }
  }

  return output
}
