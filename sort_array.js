const numbers = [3, 10, 15, 20, 5, 9, 2, 6, 1, 7, 13];

numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log(numbers);
