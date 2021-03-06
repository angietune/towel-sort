
// You should implement your task here.

module.exports = function towelSort (matrix) {
  //console.log(matrix + ' - input');
  let arr = [];
  if (matrix == undefined) return arr;
  for (let i = 0; i < matrix.length; i++) {
      if ((i + 1) % 2 === 0) {
        arr = arr.concat(matrix[i].reverse());
      } else {
      arr = arr.concat(matrix[i]);
    }
  }
  //console.log(arr + ' - output');
  return arr;
}
