// Map
// JS -> 객체, 배열: 많고 다양하고 복잡한 프로그램을 만들어 옴
// 그럼에도 현실세계를 반영하기에는 어려웠다
// Map, Set같은 추가적인 자료구조가 등장

// Map, Set의 목적: 데이터의 구성, 검색, 사용을 효율적으로 처리 -> 기존의 객체 또는 배열보다 더 빠르고 효율적

// (1) Map
// - Key / Value
// - Key에 어떠한 데이터타입(유형)도 다 들어올 수 있다.
// - Map은 키가 정렬된 순서로 저장되기 때문이다.
// - 기능
//   -> 검색, 삭제, 제거, 여부 확인

const myMap = new Map();
myMap.set('key', 'value');

myMap.get('key')

// 반복 중요. -> method: keys, values, entries
const myMap2 = new Map();
myMap2.set('one', 1);
myMap2.set('two', 2);
myMap2.set('three', 3);

console.log(myMap2.keys());

for (const key of myMap2.keys()) {
    console.log(key);
}

console.log(myMap2.values());
for (const value of myMap2.values()) {
    console.log(value);
}


console.log(myMap2.entries()); // { ['one', 1], ['two', 2], ['three', 3]}
for (const entry of myMap2.entries()) {
    console.log(entry);
}

// map의 사이즈(길이)
console.log(myMap2.size); 
// key 기반 검색
console.log(myMap2.has("two1")); //false 