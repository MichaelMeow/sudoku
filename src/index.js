import './scss/styles.scss';
import { Sudoku } from './js/sudoku.js';
import $ from 'jquery';


Sudoku.prototype.tableBuilder = function() {
  $(".sudoku-table").empty();
  for (var i = 0; i < this.array.length; i++) {
    $(".sudoku-table").append('<div class="numberBox">' + this.array[i] + '</div>');
  }
};

$(document).ready(function() {
  var currentSudoku = new Sudoku(1);
  currentSudoku.createRandom();
  currentSudoku.tableBuilder();
  debugger;
  currentSudoku.checkColumn(1);
  currentSudoku.tableBuilder();
  console.log(currentSudoku);
});
