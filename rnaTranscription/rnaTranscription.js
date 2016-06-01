var DnaTranscriber = function () {}

DnaTranscriber.prototype.toRna = function(strand) {
  var compilement = { 'C' : 'G', 'G' : 'C', 'A' : 'U', 'T' : 'A'
  }
    function translate(transform){
      return compilement[transform]
    }
  return strand.split('').map(translate).join('')
}

module.exports = DnaTranscriber
