module.exports = function getZerosCount(number) {
  // your implementation
  var zeros = 0;
  var iMax = Math.floor(Math.log(number) / Math.log(5));
  for (var i = 1; i <= iMax; i++) {
    zeros += Math.floor(number / Math.pow(5, i));
  }
  return zeros
}
