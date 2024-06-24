const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(path).toString().trim().split('\n').map(Number);

const T = input.shift();

for (let i = 0; i < T; i++) {
    const N = input.shift();

    let dp = new Array(N+1).fill(0);

    dp[1] = 1;
    dp[2] = 1;
    dp[3] = 1;

    for (let j = 4; j < N+1; j++) {
        dp[j] = dp[j-3] + dp[j-2];
    }

    console.log(dp[N]);
}