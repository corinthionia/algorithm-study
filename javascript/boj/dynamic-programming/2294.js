const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

let [N, K] = input.shift().split(' ').map(Number);
const coins = input.map(Number);
coins.sort((a, b) => a - b); // 오름차순 정렬

const dp = new Array(K + 1).fill(10001);
dp[0] = 0;

coins.forEach((coin) => {
    for (let i = coin; i < K + 1; i++) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
});

console.log(dp[K] === 10001 ? -1 : dp[K]);
