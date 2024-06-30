const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, S] = input.shift().split(' ').map(Number);
const seq = input[0].split(' ').map(Number);

let left = 0;
let right = 0;

let sum = 0;
let answer = Number.MAX_SAFE_INTEGER;

while (1) {
    if (S <= sum) {
        answer = Math.min(answer, right - left);
        sum -= seq[left++];
    } else if (right === N) {
        break;
    } else {
        sum += seq[right++];
    }
}

if (answer === Number.MAX_SAFE_INTEGER) console.log(0);
else console.log(answer);
