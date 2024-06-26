const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

let N = Number(input.shift());
const ropes = input.map(Number);
ropes.sort((a, b) => b - a);

let answer = [];

ropes.forEach((rope, idx) => {
    answer.push(rope * (idx + 1));
});

console.log(Math.max(...answer));
