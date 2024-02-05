// ES6

// 2015년도 이전 -> var
// (1) ES6 -> let(변수), const(상수)
const a = 1;
let b = 2;
b = 3;

// (2) arrow function
function add () {

}

var add = function () {

}

var add = () => {
    return 1;
}

var add = () => 1;

var add = x => 1;

// (3) 삼항연산자
// condition ? true : false
console.log(true ? '참' : '거짓');