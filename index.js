function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < 4; i++) {
    array.push(musicians[i]+" plays "+ instruments[i])
  }
  return array
}

function incrementVariable(){
  i = i + 1
}
function johnLennonFacts(facts) {
  var fancyFacts=[]
  i = 0 
  while (i < 5){
    fancyFacts.push(facts[1] + "!!!")
    incrementVariable()
  }
  return fancyFacts
}

// add solution here
