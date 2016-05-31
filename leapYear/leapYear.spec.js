var Year = require('./leapYear.js')

describe('Leap Year', function() {

  it('is not very common', function(){
    var year = new Year(2015)
    expect(year.leapYear()).toBe(false)
   })

  it('is confirmed every 4 years to adjust 1 day', function() {
    var year = new Year(2016)
    expect(year.leapYear()).toBe(true)
  })

  it('is skipped every 100 years to remove an additional day', function(){
    var year = new Year(1900)
    expect(year.leapYear()).toBe(false)
  })

  it('is reintroduced every 400 years', function(){
    var year = new Year(2000)
    expect(year.leapYear()).toBe(true)
  })
})
