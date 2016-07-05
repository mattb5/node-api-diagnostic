// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//

'use strict';

const fs = require('fs');

let inFile = process.argv[2];
let outFile = process.argv[3];

const sumLines = (filename, callback) => {
// const sumLines = (filename) => {

  fs.readFile(filename, { encoding: 'utf8' }, (error, data) => {
    if (error) {
      console.error(error);
    }


    // console.log(data);
    let ints = data.split("\n")
    // console.log(ints);
    ints.pop();
    // console.log(ints);

    let intsI = [];

    for(let i = 0; i < ints.length; i++)
      {
        intsI.push(parseInt(i));
      }

    let firstParam = null;
    for(let i = 0; i < ints.length; i++)
      {
        if isNaN(i){
          firstParam = new Error('line not a number');
        }
      }
    // console.log(intsI);

    let sum = 0;

    intsI.forEach(num => {
      sum = sum + num;
      })
    // console.log(sum);

    callback(null, sum);
  });
};

sumLines ('./data/integers.txt');

module.exports = {
  sumLines,
};
