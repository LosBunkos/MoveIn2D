var Board = function(width, height) {
  if(typeof height === 'undefined') { // allows 'new Board(5)'
    var height = weight;
  }

  // Properties
  this.width = width;
  this.height = height;
  this.board = [];

  // Methods
  this._generate = function() {
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

  // Init board, [(0,0) (default) OR (x,y)] = 1
  this init = function(x, y) { 
    if(typeof x === 'undefined' || typeof y === 'undefined') {
      console.log('x: was ' + x + '- now 0');
      console.log('y: was ' + y + '- now 0');
      var x = 0;
      var y = 0;
    }
    this.board = this._generate(); // 'this' Might be problematic here (?)
    this.board[y][x] = 1;
  }

  this.findOne = function() {
    for (var i = 0; i < this.height; i++) {
      getIndex = this.board[height].indexOf(1);
      if (getIndex > -1) {
        return {x : getIndex, y : i};
      }
    }
  }
  

}

