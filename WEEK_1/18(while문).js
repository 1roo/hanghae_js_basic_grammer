// while
let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

// while문을 활용해 3 초과 100 미만의 숫자 중 5의 배수만 출력
let j = 3;
while(j < 100) {
    if(i % 5 === 0 && j >= 5) {
        console.log(j + "는 5의 배수");
    }
    j++;
}


// do ~ while
let k = 0;

do {
    console.log(k);
    k++;
} while (k < 10);


for(let a=0; a<10; a++) {
    if (a === 5) {
        break; //그 자리에서 끝냄
    }
    console.log(a);
}

for(let b=0; b<10; b++) {
    if (b === 5) {
        continue; //건너뛰고 다음 순서로 감
    }
    console.log(a);
}