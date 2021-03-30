  
// cote
const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let mass = [];
for (let i = 0; i < matrix.length; i++) {
  let small_array = matrix[i];
  for (let j = 0; j < small_array.length; j++) {
    if ( small_array[j] == '^^'){
        mass.push(1);
    }
  }
}
let itog = mass.reduce(function(a, b) {
  return a + b;
});
}
