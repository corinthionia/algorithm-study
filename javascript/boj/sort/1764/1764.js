const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);

let set1 = new Set();
let set2 = new Set();

for (let i = 0; i < N; i++) {
    set1.add(input[i]);
}

for (let j = N; j < N+M-1; j++) {
    set2.add(input[j]);
}

const res =  [...new Set([...set1].filter((value) => set2.has(value)))].sort();

console.log(res.length);
res.map((r) => console.log(r));