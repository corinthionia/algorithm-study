const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = Number(input.shift());
const graph = input.map((line) => line.split(' ').map(Number));

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        for (let k = 0; k < N; k++) {
            if (graph[j][i] && graph[i][k]) {
                graph[j][k] = 1;
            }
        }
    }
}

for (let row of graph) {
    console.log(...row);
}
