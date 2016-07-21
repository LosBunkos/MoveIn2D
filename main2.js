var Board = function(width, height) {
  if(typeof height === 'undefined') { // allows 'new Board(5)'
    var height = weight;
  }

  // Properties
  this.width = width;
  this.height = height;
  this.board = [];
  this.x = 0;
  this.y = 0;

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
      console.log('Notice - x: was ' + x + '- now 0 (init())');
      console.log('Notice - y: was ' + y + '- now 0 (init())');
      var x = 0;
      var y = 0;
    }
    this.board = this._generate(); // 'this' Might be problematic here (?)
    this.board[y][x] = 1;
    this.x = x;
    this.y = y;
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
      console.log("Error - Can't go " + direction + '. (go())');
      return false;
    } else {
      if(this._safelyGo(directions[direction])) {
        console.log('Notice: Went ' + direction + '. (go(_safelyGo()))')
      }
    }
  }

  this._safelyGo = function(obj) {
    var currX = this.board.x;
    var currY = this.board.y;
    var dx = obj.x;
    var dy = obj.y;
    var newX = currX + dx;
    var newY = currY + dy;
    var maxX = this.width - 1; // Max defined array index
    var maxY = this.width - 1; // ^
    var err = false;

    // Check for array overflows
    if(currX + d.x > maxX) {
      console.log('Error - X overflow (_safelyGo())');
      err = true;
    }
    if(currY + d.y > maxY) {
      console.log('Error - Y overflow (_safelyGo())');
      err = true;
    }
    // if everything ok, proceed with moving the 1.
    if(!err) {
      console.log('Notice: went success (_safelyGo())');
      this.x = newX;
      this.y = newY;
      board[currY][currX] = 0;
      board[newY][newX] = 1;
    }

    return !err;
  }


}






