const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const N = Number(
    require('fs').readFileSync(path).toString().trim().split('\n')
);

const maxN = Number.MAX_SAFE_INTEGER;

const dp = new Array(N + 1).fill(maxN);
dp[3] = 1;
dp[5] = 1;

for (let i = 6; i < N + 1; i++) {
    if (i % 3 === 0) {
        dp[i] = dp[i - 3] + 1;
    }

    if (i % 5 === 0) {
        dp[i] = dp[i - 5] + 1;
    }

    if (dp[i - 3] !== maxN && dp[i - 5] !== maxN) {
        dp[i] = Math.min(dp[i - 3], dp[i - 5]) + 1;
    }
}

console.log(dp[N] === maxN ? -1 : dp[N]);
