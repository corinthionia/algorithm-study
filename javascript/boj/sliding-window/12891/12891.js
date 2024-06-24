const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [sp, str, num] = require('fs').readFileSync(path).toString().trim().split('\n');

const [S, P] = sp.split('').map(Number);
const obj = {"A": 0, "C": 0, "G": 0, "T": 0};


