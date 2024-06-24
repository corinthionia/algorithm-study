const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const N = +require('fs').readFileSync(path).toString().trim();

let dp = new Array(N+1).fill(0);

dp[1] = 1;
dp[2] = 3;
dp[3] = 5;

for (let i = 4; i < N+1; i++) {
    dp[i] = (dp[i-1] + 2 * dp[i-2]) % 10007;
}

console.log(dp[N]);