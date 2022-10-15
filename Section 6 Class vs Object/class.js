'use strict';

// object-oriented programming
// class : template
// object : instance of a class
// Javascript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 자바스크립트에서는 ES6에서 클래스가 도입, 이 전에는 클래스를 정의하지 않고 바로 오브젝트를 생성 할 수 있었음. 오브젝트를 만들 때 펑션을 통해 템플릿을 만들 수 있음.

// 1. Class declarations

class Person {

    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name} : hello!`);
    }
}

// 오브젝트 생성

const ellie = new Person('ellie', 20);

// console.log(ellie.name);
// console.log(ellie.age);
// ellie.speak();

// 2. Getter & Setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }

}

const user1 = new User('Steve', 'Job', -1);
// console.log(user1.age);


// 3. Fields (public, private)
// Too soon!

class Experiment {
    publicField = 2;
    #privateField = 0;

    // Constructor를 사용 하지 않고 Fields를 정의할 수 있는데
    // 그냥 정의하면 public field
    // 해쉬기호를 사용하면 private field로 생성
    // 클래스 외부에서는 private 값을 읽을수도 변경할 수도 없음

}

const experiment = new Experiment();
// console.log(experiment.publicField);
// console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!

// 클래스 안에 있는 필드와 메소드를 새로운 오브젝트를 만들 때마다 그대로 복제되어서 값만 지정한 값으로 변경되어서 만들어진다
// 이러한 오브젝트에 상관없이, 데이터에 상관없이 클래스가 가지고 있는 고유한 값과 이러한 데이터에 상관없이 동일하게 반복적으로 사용되어 지는 메소드가 있을 수 있음. 이럴 경우 static 키워드를 사용하면 오브젝트에 상관없이 클래스 자체에 연결되어짐

class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);

// console.log(Article.publisher);
// 오브젝트에서 값에 접근할 수 없고 클래스를 통해 접근할 수 있음.

// Article.printPublisher();

// 오브젝트에 상관없이 공통적으로 클래스에 사용하는 경우라면 static을 사용하는게 효율적



// 상속 & 다향성
// 반복된 작업이 예상 될 경우

// 5. Inheritance
// a way for one class to extend another class.

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape { }
class Triangle extends Shape {
    // 필요한 부분만 재정의해서 사용 : override

    draw() {
        // super. 부모의 메소드 호출
        super.draw();
        console.log('❤️');
    }

    getArea() {
        return (this.width * this.height) / 2;
    }


}

const rectangle = new Rectangle(20, 20, 'blue');
// rectangle.draw();
// console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
// triangle.draw();
// console.log(triangle.getArea());


// 6. Class checking : instanceOf

// 왼쪽에 있는 오브젝트가 오른쪽에 있는 클래스의 인스턴스인지 아닌지 확인
// return true, false
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true, 부모 클래스
console.log(triangle instanceof Object); // true, 자바스크립트에서 만든 모든 오브젝트 클래스들은 자바스크립트의 오브젝트를 상속 한 것.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
// 자바스크립트 내부에 포함되어 있는 오브젝트들은 어떤 것 들이 있는지 확인할 수 있음


