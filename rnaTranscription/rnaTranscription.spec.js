var DnaTranscriber = require('./rnaTranscription')
var dnaTranscriber = new DnaTranscriber()

describe('toRna()', function() {

  it('transcribes Cytosine to Guanine.', function () {
    expect(dnaTranscriber.toRna('C')).toEqual('G')
  })

  it('transcribes Guanine to Cytosine.', function() {
    expect(dnaTranscriber.toRna('G')).toEqual('C')
  })

  it('transcribes Adenine to Uracil', function() {
    expect(dnaTranscriber.toRna('A')).toEqual('U')
  })

  it('transcribes Thymine to Adenine', function() {
    expect(dnaTranscriber.toRna('T')).toEqual('A')
  })

  it('transcribes all strands to their rna compliments', function() {
    expect(dnaTranscriber.toRna('CGATTAGC')).toEqual('GCUAAUCG')
  })

})

// Cytosine = Guanine
// Guanine = Cytosine
// Adenine = Uracil
// Thymine = Adenine
