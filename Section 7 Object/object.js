// 오브젝트는 무엇이고 어떻게 쓰면 좋을지 알아 보자

// Objects
// one of the JavaScript's data types.
// a collection of related data and / or functionality.
// Nearly all objects in JavaScript are instances of Object
// Object = {key : value};
// Object = {property : value};

const name = 'ellie';
const age = 4;
// print(name, age);

// const print = (name, age) => console.log(name, age);
// print('dohyeong', 35);



// 오브젝트 생성 방법
// 1. Literals and properties

const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

// 클래스가 없이 오브젝트 생성
const ellie = { name: 'ellie', age: 4 };
// print(ellie);
// 자바스크립트는 javascript dynamic clipe language
// Runtime시 데이터타입이 결정됨

// 추가적으로 속성을 추가할 수 있음
// with Javascript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
// console.log(ellie.hasJob);

// 속성 삭제 가능
// can delete properties later
delete ellie.hasJob;

// 2. Computed properties
// key should be always string

// console.log(ellie.name);
// console.log(ellie['name']);
ellie['hasJob'] = true;
// console.log(ellie.hasJob);

// Computed properties를 사용하는 경우 -> 정확하게 어떤 키가 필요한지 모를 때

function printValue(obj, key) {
    // console.log(obj.key);
    console.log(obj[key]);
}

// printValue(ellie, 'name');
// printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };


const person4 = new Person('ellie', 30);
// console.log(person4);


// 오브젝트를 생성하는 함수는 대문자로 시작
// return을 사용하지 않고 this.을 사용
// 호출할 때도 클래스에서 오브젝트를 만드는것 처럼 ex) new Person 과 같이 호출한다.

// 4. Constructor function
function Person(name, age) {
    // this = {}; 생략됨
    this.name
    this.age
    // return this; 생략됨
}

// 5. in operator : property existence check (key in obj)
// 해당하는 오브젝트 안에 키가 있는지 없는지 확인
// 정의되지 않은 key 사용시 false 리턴

// console.log('name' in ellie); // true
// console.log('random' in ellie); // false
// console.log(ellie.random); // undefined

// 6. for.. in vs for .. of

// for(key in obj)
// for (key in ellie) {
//     console.log(key);
// }

// for(value of iterable)
const array = [1, 2, 4, 5];

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// for (value of array) {
//     console.log(value);
// }

// 7. Fun cloning
// object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
// user2.name = 'coder';
// console.log(user);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
// console.log(user3);

// Object.assign
const user4 = Object.assign({}, user)
// console.log(user4);

// another Example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
// Object.assign 시 동일한 프로퍼티가 있다면 뒤에서 할당된 파라미터의 프로퍼티 값이 앞에서 주어졌던 프로퍼티 값을 덮어 씌움

// console.log(mixed.color); // blue
// console.log(mixed.size); // big







