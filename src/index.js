module.exports = function solveSudoku(matrix) {
  
  var isCorrectValue = function (row, column, value) {
    // row and column check
    for (var m = 0; m < 9; m++) {
      if (matrix[row][m] === value || matrix[m][column] === value) return false;
    }

    // square check
    var startRowIndex = Math.floor(row / 3) * 3;  
    var startColumnIndex = Math.floor(column / 3) * 3;
    for (var l = startRowIndex; l < startRowIndex + 3; l++) {
      for (var n = startColumnIndex; n < startColumnIndex + 3; n++) {
        if (matrix[l][n] === value) return false;
      }
    }

    return true;
  }

  var isSolved = function(sudokuField) {
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        if (sudokuField[i][j] === 0) {
          for (var value = 1; value < 10; value++) {
            if ( isCorrectValue(i, j, value) ) {
              sudokuField[i][j] = value;
              if ( isSolved(sudokuField) ) {
                return true;
              } else {
                sudokuField[i][j] = 0;
              }
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  if (isSolved(matrix)) return matrix;
  return false;
}