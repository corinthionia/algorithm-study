const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, S] = input.shift().split(' ').map(Number);
const seq = input[0].split(' ').map(Number);

let cnt = 0;
const arr = [];
const visited = new Array(N).fill(0);

const backtracking = (idx) => {
    if (arr.reduce((a, c) => a + c, 0) === S && arr.length > 0) {
        cnt++;
    }

    for (let i = idx; i < N; i++) {
        if (!visited[i]) {
            arr.push(seq[i]);
            visited[i] = 1;

            backtracking(i);

            arr.pop();
            visited[i] = 0;
        }
    }
};

backtracking(0);
console.log(cnt);
