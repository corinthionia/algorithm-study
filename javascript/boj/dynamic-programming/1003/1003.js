const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(path).toString().trim().split('\n').map(Number);

const T = input.shift();

// dp[0의개수][1의개수]
// 즉, 각 값들을 구할 때 필요한 0과 1의 개수를 저장
let dp = new Array(41).fill(0).map(() => [0, 0]);

for (let i = 0; i < T; i++) {
    const N = input.shift();

    dp[0] = [1, 0];
    dp[1] = [0, 1];

    for (let j = 2; j < N+1; j++) {
        dp[j][0] = dp[j-1][0] + dp[j-2][0];
        dp[j][1] = dp[j-1][1] + dp[j-2][1];
    }

    console.log(dp[N][0], dp[N][1]);
}
