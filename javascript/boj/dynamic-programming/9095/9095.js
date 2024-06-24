const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const [T, ...nums] = require('fs').readFileSync(path).toString().trim().split('\n').map(Number);

let dp = [...Array(11)];
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i < 11; i++) {
    dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
}

for (let j = 0; j < T; j++) {
    console.log(dp[nums[j]]);
}
