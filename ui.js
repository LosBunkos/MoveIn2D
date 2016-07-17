keyToDirection = {
  w : 'up',
  a : 'left',
  s : 'down',
  d : 'right'
}

$(document).keypress(function(event){
  move = String.fromCharCode(event.which); 
  go(keyToDirection[move]);
});

