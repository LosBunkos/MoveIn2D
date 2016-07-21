board = new Board(9);
board.init();

divTemplate = function(x, y) {
  return "<div data-x='" + x +
            "' data-y='" + y + 
            "'class='square'>" +
         "</div>";
}

renderBoard = function() {
  var tempBoard = ''; // For performance
  $('#board').empty();
  for (var i = 0; i < board.height; i++) {
    for (var j = 0; j < board.width; j++) {
      tempBoard += divTemplate(j, i);     
    }
  }

  $('#board').append(tempBoard);
  $('[data-x="' + board.x + '"][data-y="' + board.y + '"]').css('background-color', "black");
  $('.square').css('width',((100 / board.width) + '%'));
  $('.square').css('height',((100 / board.height) + '%'));

}

handleClicks = function() {
  var keyToDirection = {
    'w' : 'up',
    's' : 'down',
    'a' : 'left',
    'd' : 'right'
  }

  var move;
  $(document).keypress(function(e) {
    move = String.fromCharCode(e.which);
    console.log('Notice: got keystroke: ' + move);
    board.go(keyToDirection[move]);
    renderBoard();
  });
}


renderBoard();
handleClicks();


