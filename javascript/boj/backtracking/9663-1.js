const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const N = require('fs')
    .readFileSync(path)
    .toString()
    .trim()
    .split('\n')
    .map(Number)[0];

let col = new Array(N).fill(0);

const isPromising = (i) => {
    for (let k = 0; k < i; k++) {
        if (col[i] === col[k] || Math.abs(col[i] - col[k]) === i - k) {
            return false;
        }
    }

    return true;
};

const n_queens = (i) => {
    if (i === N) {
        return 1;
    }

    let cnt = 0;

    for (let j = 0; j < N; j++) {
        col[i] = j;

        if (isPromising(i)) {
            cnt += n_queens(i + 1);
        }
    }

    return cnt;
};

console.log(n_queens(0));
