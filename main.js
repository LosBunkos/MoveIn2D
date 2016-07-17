/*
Create a 2D array that looks like this:
[
    [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 1 ]
]
and create four functions:

goUp()
goDown()
goLeft()
goRight()

which moves the "1" around in the table one space at a time

Bonus:

--Make this work for a 2D array of any dimensions (not just 4x4)
--Allow the move functions to take in a parameter to move the 1 more than one spot at a time
--Combine all the move functions to be one `Move(direction, numSteps)` function
--Create a condition that doesn't allow going outside of the table bounds

**Ultra Bonus**:    Visualize the table on an html page (format as you please), 
and move the 1 around using keystrokes (W: up, A: left, S: down, D: right)
*/

var newBoard = function(y, x) {
  if (typeof x === 'undefined') {
    x = y;
  }

  var temp = [];
  var temp2 = [];
  for (var i = 0; i < y; i++) {
    temp = [];
    for (var j = 0; j < x; j++) {
      temp.push(0);
    }
    temp2.push(temp);
  }
  temp2[y-1][x-1] = 1;
  return temp2;
}

Board = newBoard(4,4);

var findOne = function(board) {
  for(var i = 0; i < board.length; i++) {
    for(var j = 0; j < board[i].length; j++) {
      if(board[i][j]) {
        return { x : j, y : i };
      }
    }
  }
  console.log("Couldn't find 1!");
  return false;
}

var safelyMoveTo = function (board, curr, dy, dx) { 
  newX = curr.x + dx;
  newY = curr.y + dy;
  if (typeof board[newY][newX] === 'undefined') {
    console.log('invalid move: {' + newX + ',' + newY + '}');
    board[curr.y][curr.x] = 1;
    return false;
  } else {
    board[newY][newX] = 1;
    console.log("Moved to: {" + newX + ',' + newY + '}');
  }
}

var go = function(direction, amount, board) {
  if (typeof amount === 'undefined') {
    console.log('setting amount to default (1)')
    var amount = 1;
  } 

  // debugger;
  if(findOne(board)) {
    curr = findOne(board);
    board[curr.y][curr.x] = 0;
    if (direction === 'up') {
      safelyMoveTo(board, curr, - 1 * amount, 0);
    } else if (direction === 'down') {
        safelyMoveTo(board, curr, amount, 0);
    } else if (direction === 'left') {
        safelyMoveTo(board, curr, 0, -1 * amount);
    } else if (direction === 'right') {
        safelyMoveTo(board, curr, 0, amount);
    } else {
       console.log("Can't go there! ("+ direction + ").");
       board[curr.y][curr.x] = 1; 
       return false;     
    }
  } else {
    console.log("Invalid Board!")
    return false;
  }
}


// Tests for a 4x4 board
go("up", 1, Board);
go("down", 1, Board);
go('left', 4, Board);
go('right', 1, Board)
locationAfter = {x : 3, y : 3};

if(findOne(Board).x === locationAfter.x &&
   findOne(Board).y === locationAfter.y) {
  console.log('Tests succeeded!');
} else {
  console.log('Tests failed!');
}

