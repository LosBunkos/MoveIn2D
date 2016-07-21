keyToDirection = {
  w : 'up',
  a : 'left',
  s : 'down',
  d : 'right'
}

updateScreen = function(x, y) {
  $('div .cell').css('background-color', 'red');
  $('div #' + y + x).css('background-color', 'blue');
}

generateBoard = function(board) {
  for(var i = 0; i < board.length; i++) {
    $('#board').append('<div class="row">');
    for(var j = 0; j < board[i].length; j++) {
      $('#board').append('<div class="cell" style="width: '
         + 100/board[i].length + '%" id="' + i + j + '"></div>');
    }
  }
$('#44').css('background-color', 'blue');
}

updateScreen(1,1);

$(document).keypress(function(event){
  move = String.fromCharCode(event.which); 
  console.log(move);
  go(keyToDirection[move], 1, Board, updateScreen);
});



