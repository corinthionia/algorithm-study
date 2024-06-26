const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...nums] = require('fs').readFileSync(path).toString().trim().split('\n');

const N = Number(n);
const cost = [[0, 0, 0], ...nums.map((num) => num.split(' ').map(Number))];

for (let i = 1; i < N + 1; i++) {
    cost[i][0] = Math.min(cost[i - 1][1], cost[i - 1][2]) + cost[i][0];
    cost[i][1] = Math.min(cost[i - 1][0], cost[i - 1][2]) + cost[i][1];
    cost[i][2] = Math.min(cost[i - 1][0], cost[i - 1][1]) + cost[i][2];
}

console.log(Math.min(cost[N][0], cost[N][1], cost[N][2]));
