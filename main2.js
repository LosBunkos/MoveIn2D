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

  // Init board, with [(0,0) (default) OR (x,y)] = 1
  this init = function(x, y) { 
    if(typeof x === 'undefined' || typeof y === 'undefined') {
      console.log('Notice - x: was ' + x + '- now 0');
      console.log('Notice - y: was ' + y + '- now 0');
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

  // @amount{OPTIONAL}: default 1.
  this.go = function(direction, amount) {
    if(typeof amount === 'undefined') {
      var amount = 1;
    }
    var directions = {
      'up'   : {x: 0, y: -1 * amount},
      'down' : {x: 0, y:  1 * amount},
      'left' : {x: -1 * amount, y: 0},
      'right': {x:  1 * amount, y: 0}
    }

    if(typeof directions[direction] === 'undefined') {
      console.log("Error - Can't go " + direction);
      return false;
    } else {
      this._safelyGo(directions[direction]);
    }
  }
}






