export function Sudoku(puzzleNumber) {
  this.array = [];
  this.coordinateArray = [];
  this.number = puzzleNumber;
}


Sudoku.prototype.createRandom = function(){
  var rowArray = [1,2,3,4,5,6,7,8,9];


  for (var i = 0; i < 9; i++) {
    shuffle(rowArray);
    for (var j = 0; j < 9; j++) {
      this.coordinateArray.push([i, j, rowArray[j]]);
      this.array.push(rowArray[j]);
    }
  }
};

Sudoku.prototype.checkRow = function() {
  for (var k = 1; k < 10; k++) {
    for (var j = 1; j < 10; j++) {
      var counter = 0;
      for (var i = ((k-1)*9);  i <= ((k*9)-1); i++) {
        if (this.array[i] == j) {
          counter ++;
        }
      }
      if (counter == 1) {
        counter = 0;
      } else {
        return false;
      }
    }
  }
  return true;
};

Sudoku.prototype.checkColumn = function(column) {
  var simpleArray = this.array;
  console.log(simpleArray);
  var counterArray = [0,0,0,0,0,0,0,0,0,0];
  for (var i= (column-1); i <= (71+column); i += 9) {
    var checkCounterNumber = simpleArray[i];
    if (counterArray[checkCounterNumber] == 0){
      counterArray[checkCounterNumber] ++;
    } else {
      counterArray[checkCounterNumber] ++;
      var k = 0;
      while(counterArray[checkCounterNumber] == 2 && k < 9-column){
        if (counterArray[simpleArray[i+k]] == 0){
          counterArray[checkCounterNumber] --;
          var swapNumber = simpleArray[i];
          simpleArray[i] = simpleArray[i+k];
          simpleArray[i+k] =  swapNumber;
          counterArray[simpleArray[i]] ++;
        }
        k++;
      }
    }
  }

};
Sudoku.prototype.testColumn = function(column) {
  var simpleArray = this.array;
  var counterArray = [0,0,0,0,0,0,0,0,0,0];
  for (var i= (column-1); i <= (71+column); i += 9) {
    var checkCounterNumber = simpleArray[i];
    counterArray[checkCounterNumber] ++;
    if (counterArray[checkCounterNumber] == 2) {
      return false;
    }
  }
  return true;
};


Sudoku.prototype.checkBox = function() {

};

Sudoku.prototype.numberChecker = function() {
  for (var i = 0; i < this.array.length; i++) {
    if (Number.isInteger(this.array[i]) == false){
      return false;
    }
  }
  return true;
};


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
