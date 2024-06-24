const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

let mat = new Array(N+1).fill(0).map(() => []);
let visited = new Array(N+1).fill(0);

for (let i = 1; i < M+1; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    mat[a].push(b);
    mat[b].push(a);
}

const DFS = (v) => {
    visited[v] = 1;

    for (let node of mat[v]) {
        if (!visited[node]) {
            DFS(node);
        }
    }
}

let cnt = 0;
 
for (let i = 1; i < N+1; i++) {
    if (!visited[i]) {
        DFS(i);
        cnt++;
    }
}

console.log(cnt);