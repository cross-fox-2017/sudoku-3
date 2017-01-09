"use strict"

var fs = require('fs')
var sudoku = require('sudoku-js');

var board_string = fs.readFileSync('set-04_peter-norvig_11-hardest-puzzles.txt').toString().split("\n")[0].trim()

class Sudoku3{
  constructor(board_string){
    this._board_string = board_string
    this._papan = []
    this._hasil = []
  }

  board() {
      let count = 0
      for (var i = 0; i < 9; i++) {
          var arrPapan = [];
          for (var j = 0; j < 9; j++) {
              arrPapan.push(Number(this._board_string[count]))
              count++;
          }
          this._papan.push(arrPapan)
      }
      return this._papan;
  }


}
