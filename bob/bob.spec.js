var Bob = require('./bob')

describe('Bob', function() {
  var bob = new Bob()

  it('stating something', function() {
    result = bob.hey('Tom-ayy-to, tom-aaayyy-to.')
    expect(result).toEqual('Whatever.')
  })
})