function printHello() {
    console.log('Hello');
}

// printHello();

function log(message) {
    console.log(message);
}

// log('Hello@');
// log(12345);
// 타입이 중요한 경우에 위 상황은 문제가 될 수 있다.


function changeName(Obj) {
    Obj.name = 'coder';
}
const ellie = { name: 'ellie' };
// changeName(ellie);
// console.log(ellie);


// 3. Default parameters (Added in Es6)

function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
// showMessage('Hi');
// showMessage('Hi', 'Dohyeong');

// 4. Rest Parameters
function printAll(...args) {

    // 배열 출력 방법 1
    // for (let i = 0; i < args.length; i++) {
    //     console.log(args[i]);
    // }

    // 배열 출력 방법 2
    // for (const arg of args) {
    //     console.log(arg);
    // }

    // 배열 출력 방법 3
    args.forEach((arg) => console.log(arg));

}
// printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'Hello';
    }
}

printMessage();

// Scope
// 밖에서는 안이 보이지 않고
// 안에서만 밖을 볼 수 있다.


// 6. Return a value
function sum(a, b) {
    return a + b;
}

const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic

    // 조건이 맞지 않는 경우는 빠르게 리턴하는 게 좋은 코드 작성 방법이다.
}

// First-class function
// function are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined (hoisted)

// 호이스팅
// 함수 선언 전 함수를 실행해도 오류가 발생하지 않음 -> 자바스크립트 엔진이 선언된 것을 제일 위로 올려주기 때문

// a function expression is created when the execution reached it.

const print = function () { // anonymous function
    console.log('print');
};

// 함수의 종류
// 1. named function
// 2. anonymous function

print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function () {
    console.log('Yes!');
}

// named function
// better debugging in debugger's stack traces
// recursions 재귀, 함수 안에서 자기 자신을 부르는 것
const printNo = function print() {
    console.log('No!');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous

// const simplePrint = function () {
//     console.log('simplePrint!');
// };

const simplePrint = () => console.log('SimplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something
    return a * b;

    // 블록 사용시 return 키워드 사용해야 함
};

// IIFE : Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();
// 함수호출을 작성 하지 않고 선언과 동시에 호출




