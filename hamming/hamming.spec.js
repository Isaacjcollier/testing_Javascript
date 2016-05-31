var Hamming = require('./hamming.js')

describe('Hamming', function () {
  var hamming = new Hamming('')

  it('no difference between identical strings', function(){
    expect(hamming.compute('A', 'A')).toEqual(0)
  })

  it('tells the difference between strands', function(){
    expect(hamming.compute('A', 'G')).toBe(1)
  })

  it('tells the difference between bigger strands', function() {
    expect(hamming.compute('ASDQWERTY', 'ASDFASDFY')).toEqual(5)
  })

  it('small distance', function() {
    expect(hamming.compute('AG','GA')).toEqual(2)
  })

  it('small distance in larger strands', function() {
    expect(hamming.compute('ASDFASDF', 'ASDFQWDF')).toEqual(2)
  })

  it('hamming distance in a very long strand', function () {
    expect(hamming.compute('QWERTTQWERTYQWER', 'ASDWEQRWERTYQWER')).toEqual(7)
  })

  it('throws an error when strands do not equal the same length',  function () {
    expect( function() { hamming.compute('ASDFASDFASDF', 'QWERTY') }).toThrow(
      new Error('THESE STRANDS DO NOT EQUAL SAME LENGTH!')
    )
  })
})
