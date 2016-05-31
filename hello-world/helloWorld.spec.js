var HelloWorld = require('./helloWorld.js')

describe('Hello World', function() {
  var helloWorld = new HelloWorld()

  it('says hello world with no name', function() {
    expect(helloWorld.hello('')).toEqual('Hello, World!')
  })

  it('says hello to BillyBoJangles', function() {
    expect(helloWorld.hello('BillyBoJangles')).toEqual('Hello, BillyBoJangles!')
  })

  it('says hello to Salty Larry', function() {
    expect(helloWorld.hello('Salty Larry')).toEqual('Hello, Salty Larry!')
  })
})
