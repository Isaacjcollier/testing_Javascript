var Hello = function(){}

Hello.prototype.hello = function(name){
  if( name === ''){
    return 'Hello, World!'
  }else{
    return 'Hello, ' + name + '!'
}
}

module.exports = Hello
