"use strict"

var fs = require('fs')
var sudoku = require('sudoku-js');

var board_string = fs.readFileSync('set-04_peter-norvig_11-hardest-puzzles.txt').toString().split("\n")[0].trim()
