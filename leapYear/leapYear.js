var Year = function(number) {
  this.number = number
}

Year.prototype.leapYear = function() {
  if (this.number % 400 === 0) {
    return true
  }else if (this.number % 100 === 0) {
   return false
  }else if (this.number % 4 === 0) {
    return true
  }else{
    return false
  }
}

module.exports = Year
