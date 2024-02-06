// 단축 속성명: property shorthand
const name = "nbc";
const newAge = "30";

// key - value가 같으면 생략 가능
const obj = { name: name, age: age};
const obj2 = { name, age };

// 전개 구문 = spread operator
// destructuring과 함께 가장 많이 사용되는 es6 문법 중 하나
let arr = [1, 2, 3];
console.log(arr);  //[1, 2, 3]
console.log(...arr); //1 2 3

let newArr = [...arr, 4]; //[1, 2, 3, 4]

// 객체
let user = {
    name: 'nbc',
    age: 30,
}

let user2 = {...user}; // user와 같다.

// 나머지 매개변수(rest parameter)
function exampleFunc (a, b, c, ...args) {
    console.log(a, b, c);
    console.log(...args);
}

exampleFunc(1, 2, 3, 4, 5)
// 1 2 3
// 4 5

// 만약 console.log(...args)가 그냥 arg라면
exampleFunc(1, 2, 3, 4, 5)
// 1 2 3
// [4, 5]

// 템플릿 리터럴(Template Literal)
const testValue = "안녕!";
console.log(`Hello World ${testValue}}`);
console.log(`
    Hello
        My name is JS
            Nice to meet you
`);