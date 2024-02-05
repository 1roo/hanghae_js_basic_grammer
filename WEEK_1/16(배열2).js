// forEach, map, filter, find

let numbers = [4, 1, 3, 5, 4];

// (1)
// 매개변수 자리에 함수를 넣는 것: 콜백 함수
numbers.forEach(function(item){
    console.log("item: " + item);
});

// (2) map => 항상 원본 배열의 길이만큼 return된다.
let newNumbers = numbers.map(function(item){
    return item * 2;
})
console.log(newNumbers);


// (3) filter => 조건에 해당하는 것만 return된다.
let nums = [4, 1, 3, 5, 4];

let filterNums = nums.filter(function(item) {
    return item === 5;
});
console.log(filterNums);


// (4) find => 조건에 해당하는 제일 첫번째 요소만 return된다.
let num = [4, 1, 5, 4, 5];

num.find(function(item){
    return item > 3;
});
console.log(num);