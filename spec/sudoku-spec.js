import { Sudoku } from './../src/js/sudoku.js';

describe('Sudoku', function() {

  var randomSudoku = new Sudoku(1);
  randomSudoku.createRandom();
  console.log(randomSudoku);

  it('should test whether Sudoku has 81 numbers', function() {
    expect(randomSudoku.array.length).toEqual(81);
  })


  it('should test whether Sudoku has only integers 1-9', function() {
    expect(randomSudoku.numberChecker()).toEqual(true);
  })

  it('should test whether each Sudoku row has only one 1-9', function() {
    expect(randomSudoku.checkRow()).toEqual(true);
  })

  it('should test where the first Sudoku column has only one 1', function () {
    expect(randomSudoku.testColumn()).toEqual(true);
  })

  

})
