const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const N = require('fs')
    .readFileSync(path)
    .toString()
    .trim()
    .split('\n')
    .map(Number)[0];

let cnt = 0;
const cols = new Array(N).fill(0); // 각 열에서 퀸이 놓인 index를 표시

const isPromising = (x) => {
    for (let i = 0; i < x; i++) {
        // 같은 행이나 대각선에 퀸이 있는 경우 유망하지 않음(false)
        if (
            cols[x] === cols[i] ||
            Math.abs(cols[x] - cols[i]) === Math.abs(x - i)
        ) {
            return false;
        }
    }
    return true;
};

const backtracking = (node) => {
    if (node === N) {
        cnt++;
        return;
    }

    for (let i = 0; i < N; i++) {
        cols[node] = i;

        if (isPromising(node)) {
            backtracking(node + 1);
        }
    }
};

backtracking(0);
console.log(cnt);
