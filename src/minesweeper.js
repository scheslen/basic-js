const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let aRes= [];
  kMax=matrix.length;
  lMax=matrix[0].length;

  for (let i=0; i<kMax; i++){
    aRes[i]=[];
    for (let j=0; j<lMax; j++)
    aRes[i][j] = 0;
  }

  let qM=0;
  for (let k=0; k<kMax; k++){
    for (let l=0; l<lMax; l++){
      qM=0;
      if (k>0 && l>0 && matrix[k-1][l-1]=== true) qM++ ;
      if (k>0 && matrix[k-1][l]=== true) qM++ ;
      if (k>0 && l<lMax && matrix[k-1][l+1]=== true) qM++ ;

      if (l>0 && matrix[k][l-1]=== true) qM++ ;
      if (l<lMax && matrix[k][l+1]=== true) qM++ ;

      if (k<kMax-1 && l>0 && matrix[k+1][l-1]=== true) qM++ ;
      if (k<kMax-1 && matrix[k+1][l]=== true) qM++ ;
      if (k<kMax-1 && l<lMax && matrix[k+1][l+1]=== true) qM++ ;

      aRes[k][l] = qM;
  }
}

  return aRes;
}

// function minesweeper(/* matrix */) {
//   // Remove line below and write your code here
//   throw new NotImplementedError('Not implemented');
// }

module.exports = {
  minesweeper
};
