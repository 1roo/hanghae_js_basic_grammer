// 스코프, 전역변수, 지역변수, 화살표함수

// 전역변수 -> 어디에서든지 참조할 수 있음
let x = 10;

function printX() {
    console.log(x);
}

console.log(x);
printX(); 


//지역변수 -> 선언된 해당 함수 내에서만 참조할 수 있음
function printY() {
    let x = 10;
    console.log(x);
}

printY();


// 블록 스코프
if (true) {
    let x = 10;
    console.log(x);
}

console.log(x);  // ReferenceError: x is not defined