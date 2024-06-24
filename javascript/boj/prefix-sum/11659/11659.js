const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);

const prefixSum = new Array(N+1).fill(0);
const res = [];

nums.forEach((n, i) => {
  prefixSum[i+1] = prefixSum[i] + n;
});


input.slice(2).forEach(tc => {
  const [a, b] = tc.split(' ').map(Number);
  res.push(prefixSum[b]-prefixSum[a-1]);
});

console.log(res.join('\n'));