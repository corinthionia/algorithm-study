const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = Number(input[0]);
const dp = [0, 1];

for (let i = 2; i < N + 1; i++) {
    let temp = Number.MAX_SAFE_INTEGER;

    for (let j = 1; j < Math.floor(Math.sqrt(i)) + 1; j++) {
        temp = Math.min(temp, dp[i - j ** 2]);
    }

    dp.push(temp + 1);
}

console.log(dp[N]);
