// 문(if, else if, switch)

// 조건문 - if, else if, else, switch
// 1. if문
let x = 10;

// if (true 또는 false가 나올 수 있는 조건) {
// }

// 1-1
if(x > 0) {
    console.log("x는 양수입니다.");
}

// 1-2
let y = "Hello World";

// y의 길이가 5보다 크거나 같으면 길이를 출력
if(y.length >= 5) {
    console.log(y.length);
}

// 2. if-else문
let a = 10;
if (a > 0) {
    console.log("a는 양수입니다.");
} else {
    console.log("a는 음수입니다.");
}

// 3. if-else if-else문
let b = 10;

if (b < 0) {
    console.log("1");
} else if (b >= 0 && b < 10) {
    console.log("2");
} else {
    console.log("3");
}


// 4. switch
// 변수의 값에 따라 여러 개의 경우(case)중 하나를 선택
// default
let fruit = "사과";

switch (fruit) {
    case "사과":
        console.log("사과입니다.");
        break;
    case "바나나":
        console.log("바나나입니다.");
        break;
    case "키위":
        console.log("키위입니다.");
        break;
    default:
        console.log("아무것도 아닙니다.");
        break;
}