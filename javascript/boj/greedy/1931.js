const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = Number(input.shift());
const meetings = input.map((inp) => inp.split(' ').map(Number));

// 회의가 끝나는 시간을 기준으로 오름차순 정렬
// 끝나는 시간이 같을 경우 빨리 시작하는 순으로 정렬
meetings.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

let endTime = meetings[0][1];
let cnt = 0;

for (let i = 1; i < meetings.length; i++) {
    if (endTime <= meetings[i][0]) {
        endTime = meetings[i][1];
        cnt++;
    } else {
        continue;
    }
}

console.log(cnt + 1);
