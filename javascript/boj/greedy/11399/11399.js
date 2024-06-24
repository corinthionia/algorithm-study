const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// 시간 순으로 정렬
const line = input[1].split(' ').map(Number).sort((a, b) => a - b);

let answer = 0;

// 누적해서 계산
line.reduce((acc, cur) => {
    const sum = acc + cur;
    answer += sum;
    return sum;
}, 0);

console.log(answer);