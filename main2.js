var Board = function(width,height) {
  if(typeof height === 'undefined') { // allows 'new Board(5)'
    var height = weight;
  }

  // Methods
  this.generate = function() {
    var tempBoard = [];
    for (var i = 0; i < this.height; i++) {
      var tempRow = [];
      for (var j = 0; j < this.width; j++) {
        tempRow.push(0);
      }
      tempBoard.push(tempRow);
    }
    return tempBoard;
  }

  // Properties
  this.width = width;
  this.height = height;
  this.board = generate();
}