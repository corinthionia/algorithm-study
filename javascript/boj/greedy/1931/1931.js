const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = Number(input.shift());
const meetings = input.map((i) => i.split(' ').map(Number));

meetings.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);

let end = 0;
let cnt = 0;

meetings.forEach((meeting) => {
    if (end <= meeting[0]) {
        end = meeting[1];
        cnt += 1;
    }
});

console.log(cnt);