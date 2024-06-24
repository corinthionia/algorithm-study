const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const nums = require('fs').readFileSync(path).toString().trim().split('\n').map(Number);

const N = nums.shift();

nums.sort((a, b) => a - b);

const cut = Math.round(N * 0.15)
const cnt = nums.slice(cut, N - cut).reduce((acc, cur) => acc + cur, 0);

console.log(N === 0 ? 0 : Math.round(cnt / (N - cut * 2)));
