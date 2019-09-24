// We have an Array 'numbers'. We need to find the MIN and MAX element in this array.
const numbers = [1,3,5,-1,8,0];
let min = Math.min.apply(null, numbers);
let max = Math.max.apply(null, [1,3,5,-1,8,0]);
console.log(numbers,min,max); // [ 1, 3, 5, -1, 8, 0 ], -1, 8

// We have an Array 'arr'. We need to find sum of all elements in this array.

// option 1
var arr = [1,2,3,4,5,6,7,8,9,10];
var result = arr.reduce(function(sum, current) {
    return sum + current;
}, 0);

console.log(result); // 55

// option 2
let summa = 0;
arr.forEach(function(number){
    summa += number;
});

console.log(summa); //55

// or use arrow function

let summ = 0;
arr.forEach(num => summ += num);
console.log(summ); //55