// 미완
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, K] = input.shift().split(' ').map(Number);

let answer = new Array(N).fill('?');
answer[0] = input[input.length-1].slice(2);

let cur = 0;

for (let i = input.length-1; i > 0; i--) {
    const S = Number(input[i][0]);
    cur = (cur + S) % N;

    const letter = input[i-1].slice(2);

    if (answer.includes(letter)) {
        if (answer[cur] === letter) {
            continue;
        } else {
            console.log('!');
            return;
        }
    } else {
        if (answer[cur] === '?') {
            answer[cur] = input[i-1].slice(2);
        } else {
            console.log('!');
            return;
        }
    }
}

console.log(answer.join(''));