'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits[0]); // 사과
// console.log(fruits[2]); // undefined
// console.log(fruits[fruits.length - 1]); // 바나나

// 3. Looping over an array
// print all fruits

// for (let fruit of fruits) {
//     console.log(fruit);
// }

// fruits.forEach(function (fruit, index, array) {
//     console.log(fruit, index, array);
// })

// fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push : add an item to the end
fruits.push('딸기', '복숭아');
// console.log(fruits); // 사과, 바나나, 딸기, 복숭아

// pop : remove an item from the end
fruits.pop();
// console.log(fruits); // 사과, 바나나, 딸기
fruits.pop();
// console.log(fruits); // 사과, 바나나

// unshift : add an item to the beginning
fruits.unshift('딸기', '레몬');
// console.log(fruits); // 딸기, 레몬, 사과, 바나나

// shift : remove an item from the beginning
fruits.shift();
// console.log(fruits); // 레몬, 사과, 바나나
fruits.shift();
// console.log(fruits); // 사과, 바나나

// note! shift, unshift are slower than pop, push
// 배열의 길이가 길면 길수록 연산 속도가 늘어난다.

// splice : remove an item by index position
fruits.push('딸기', '복숭아', '레몬');
// console.log(fruits); // 사과 바나나 딸기 복숭아 레몬
// fruits.splice(1); // 지정한 인덱스부터 모두 삭제
// console.log(fruits); // 사과

fruits.splice(1, 1);
// console.log(fruits) // 사과 딸기 복숭아 레몬

fruits.splice(1, 1, '사과', '수박');
// console.log(fruits); // 사과 사과 수박 복숭아 레몬

// combine two arrays
const fruits2 = ['참외', '키위'];
const newFruits = fruits.concat(fruits2);
// console.log(newFruits); // 사과 사과 수박 복숭아 레몬 참외 키위

// 5. Searching
// find the index
// console.log(fruits);
// console.log(fruits.indexOf('사과')); // 1
// console.log(fruits.includes('코코넛')); // 해당하는 값이 없는 경우 false;
// console.log(fruits.indexOf('코코넛')); // 해당하는 값이 없는 경우 -1

// 6. lastIndexOf
fruits.push('사과');
// console.log(fruits.lastIndexOf('사과')); // 5

