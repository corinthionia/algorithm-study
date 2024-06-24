const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const N = require('fs')
    .readFileSync(path)
    .toString()
    .trim()
    .split('\n')
    .map(Number)[0];

const promising = (i, col) => {
    let k = 1;
    let flag = true;
    
    while (k < i && flag) {
        if (col[i] === col[k] || Math.abs(col[i] - col[k]) === i - k) {
            flag = false;
        }
        k += 1
    }

    return flag;
}

const n_queens = (i, col) => {
    let cnt = 0;
    let n = col.length - 1;

    if (promising(i, col)) {
        if (i === n) {
            return 1;
        } else {
            for (let j = 1; j < n+1; j++) {
                col[i+1] = j;
                cnt += n_queens(i+1, col);
            }
        }
    }

    return cnt;
}

let col = new Array(N+1).fill(0);

console.log(n_queens(0, col));