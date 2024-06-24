const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...nums] = require('fs')
    .readFileSync(path)
    .toString()
    .trim()
    .split('\n');

const N = Number(n);
const visited = new Array(N).fill(0);

const tastes = nums.map((num) => num.split(' ').map(Number));

let answer = Number.MAX_SAFE_INTEGER;

const bt = (start, total_s, total_b) => {
    if (total_b !== 0) answer = Math.min(answer, Math.abs(total_s - total_b));

    for (let i = start; i < N; i++) {
        if (!visited[i]) {
            visited[i] = 1;
            bt(start + 1, total_s * tastes[i][0], total_b + tastes[i][1]);
            visited[i] = 0;
        }
    }
};

bt(0, 1, 0);
console.log(answer);
