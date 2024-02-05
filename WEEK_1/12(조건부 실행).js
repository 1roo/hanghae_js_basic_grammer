// 조건부 실행
let x = 10;

// if (x > 0) {
//     console.log("x는 양수입니다.");
// }
(x > 0) && console.log("x는 양수입니다.");


// 삼항 연산자와 단축평가
// or조건(||)
let y; //y=undefined
let z = y || 20;

console.log(z);