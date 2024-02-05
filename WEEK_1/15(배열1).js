// 배열

// 1. 생성
// 1-1. 기본 생성
let fruits = ["사과", "배", "바나나"];

// 1-2. 크기 지정
let number = new Array(5);
console.log(fruits.length);
console.log(number.length);

// 2. 요소 접근
console.log(fruits[0]);

// 3. 배열 메소드
// 3-1. push
let fruits2 = ["사과", "배", "바나나"];
fruits2.push("오렌지");
console.log(fruits2);  //["사과", "배", "바나나", "오렌지"]

// 3-2. pop
let fruits3 = ["사과", "배", "바나나"];
fruits3.pop();
console.log(fruits3);  //["사과", "배"]

// 3-3. shift
let fruits4 = ["사과", "배", "바나나"];
fruits4.shift();
console.log(fruits4);  //["배", "바나나"]

// 3-4. unshift
let fruits5 = ["사과", "배", "바나나"];
fruits5.unshift("포도");
console.log(fruits5);  //["포도", "사과", "배", "바나나"]

// 3-5. splice
fruits5.splice(1, 1, "포도"); //1번 인덱스에서 1개를 포도로 대체
console.log(fruits5);  //["포도", "포도", "배", "바나나"]

// 3-6. slice
let fruits6 = ["사과", "배", "바나나"];
let splicedFruits6 = fruits6.slice(1, 2); //A부터 B전까지
console.log(splicedFruits6);  //["바나나"]