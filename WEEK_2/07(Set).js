// Set
// 고유한 값을 저장하는 자료구조
// 값만 저장하고 키를 저장하지 않는다.
// 값이 중복되지 않는 유일한 요소로만 구성된다.

// 값 추가, 검색, 값 삭제, 모든 값 제거, 존재 여부 확인

const mySet = new Set();
mySet.add('value1');
mySet.add('value2');
mySet.add('value2');

console.log(mySet.size); //2
console.log(mySet.has("value4")); //false


// Ierator (반복)
const mySet2 = new Set();
mySet2.add('value1');
mySet2.add('value2');
mySet2.add('value3');
mySet2.add('value5');
mySet2.add('value8');

for (const value of mySet2.values()) {
    console.log(value);
}