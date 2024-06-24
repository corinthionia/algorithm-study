const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(path).toString().trim().split('\n').map(Number);

const N = input.shift();
let stairs = [0, ...input];

let dp = new Array(N+1).fill(0);

dp[1] = stairs[1];
dp[2] = stairs[1] + stairs[2];
dp[3] = Math.max(stairs[1] + stairs[3], stairs[2] + stairs[3]);

for (let i = 4; i < N+1; i++) {
    dp[i] = Math.max(dp[i-3] + stairs[i-1] + stairs[i], dp[i-2] + stairs[i]);
}

console.log(dp[N]);
