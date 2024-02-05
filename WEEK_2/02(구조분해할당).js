// 구조분해할당: destructuring
// de = not
// structure = 구조
// 배열이나 객체의 속성

// (1) 배열의 경우
let [value1, value2] = [1, "new"];
console.log(value1);
console.log(value2);
let arr = ["value1", "value2", "value3"];
let [a, b, c, d] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d);  //undefined
let [a2, b2, c2, d2=4] = arr2; // value4 자리에 값이 있다면 d2에 value4가 들어감

// (2) 객체인 경우
let user = {
    name: "nbc",
    age: 30,
};

// 구조분해할당
let {name, age} = {
    name: "nbc",
    age: 30,
}

console.log(name);
console.log(age);

// 새로운 이름으로 할당
let {
    name: newName,
    age: newAge
} = user
console.log(newName);
console.log(newAge);

let {name2, age2, birthday= "today"} = user;
console.log(name2);
console.log(age2);
console.log(birthday);  // birthday가 비어있으면 today, 초기값도 없고 birthday값도 없으면 undefined