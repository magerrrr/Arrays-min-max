// We have an Array 'numbers'. We need to find the MIN and MAX element in this array.
const numbers = [1,3,5,-1,8,0];
let min = Math.min.apply(null, numbers);
let max = Math.max.apply(null, [1,3,5,-1,8,0]);
console.log(numbers,min,max);