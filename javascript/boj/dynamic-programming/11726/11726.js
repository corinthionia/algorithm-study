const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const N = +require('fs').readFileSync(path);

let dp = new Array(N + 1).fill(0);

dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= N; i++) {
    dp[i] = (dp[i-1] + dp[i-2]) % 10007
}

console.log(dp[N]);