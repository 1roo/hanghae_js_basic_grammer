// for, while => ~동안: 반복문

// for (초기값; 조건식; 증감식) {
// }

for(let i=0; i<10; i++) {
    console.log(i);
}

// 배열과 for문은 짝꿍
const arr = ["one", "two", "three", "four", "five"];
for (let i = 0; i < arr.length; i++) {
    console.log(i);
    console.log(arr[i]);
}


// ex: 0~10 중에서 2의 배수만 출력
for (let i=0; i<11; i++) {
    if(i >=2 && i % 2 === 0) {
        console.log(i+"는 2의 배수");
    }
}


// for ~ in문
// 객체의 속성을 출력하는 문법
let person = {
    name: "John",
    age: 30,
    gender: "male",
}

// person[key]
for (let key in person) {
    console.log(key + ": " + person[key]);
}