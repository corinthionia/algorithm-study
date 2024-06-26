const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const board = input.map((inp) => inp.split(''));

const answer = [];

for (let i = 0; i < N - 7; i++) {
    for (let j = 0; j < M - 7; j++) {
        let cnt_w = 0;
        let cnt_b = 0;

        for (let a = i; a < i + 8; a++) {
            for (let b = j; b < j + 8; b++) {
                if ((a + b) % 2 === 0) {
                    if (board[a][b] !== 'W') cnt_w++;
                    else cnt_b++;
                } else {
                    if (board[a][b] !== 'W') cnt_b++;
                    else cnt_w++;
                }
            }
        }

        answer.push(cnt_w);
        answer.push(cnt_b);
    }
}

console.log(Math.min(...answer));
