// 일급객체로서의 함수 2
const person = {
    name: 'John',
    age: 31,
    isMarried: true,
    // sayHello: function () {
    //     // console.log("hello, my name is " + this.name);
    //     console.log(`hello, my name is ${this.name}`);
    // }
    sayHello: () => {
        console.log(`hello, my name is ${this.name}`); 
        // => hello, my name is undefined (화살표 함수는 this를 바인딩하지 않는다)
    },
};

person.sayHello();


// 배열의 요소로 함수를 할당

const myArr = [
    function (a, b) {
        return a + b;
    }, function (a, b) {
        return a - b;
    },
]

console.log(myArr[0](1, 3)); //1+3 = 4
console.log(myArr[1](10, 7)); //10-7 = 3\


function multiplyBy(num) {
    return function (x) {
        return x * num;
    };
}

function add(x, y) {
    return x + y;
}

const multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo(10));  //20
const multiplyByThree = multiplyBy(3);
console.log(multiplyByThree(3));  //9