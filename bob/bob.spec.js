var Bob = require('./bob')

describe('Bob', function() {
  var bob = new Bob()

  it('stating something', function() {
    var result = bob.hey('Tom-ayy-to, tom-aaayyy-to.')
    expect(result).toEqual('Whatever.')
  })
  
  it('shouting', function() {
  var result = bob.hey('WATCH OUT!');
  expect(result).toEqual('Whoa, chill out!');
});

it('asking a question', function() {
  var result = bob.hey('Does this cryogenic chamber make me look fat?');
  expect(result).toEqual('Sure.');
})
})
