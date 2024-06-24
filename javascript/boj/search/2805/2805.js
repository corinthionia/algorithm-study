const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const trees = input[1].split(' ').map(Number).sort((a, b) => a - b);

let start = 1;
let end = trees[N-1];

while (start <= end) {
    let sum = 0;
    let mid = Math.floor((start + end) / 2);

    trees.forEach((tree) => {
        if (mid < tree) {
            sum += tree - mid;
        }
    });

    if (sum < M) end = mid - 1;
    else start = mid + 1;
}

console.log(end);
