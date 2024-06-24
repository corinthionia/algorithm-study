const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [M, N, H] = input.shift().split(' ').map(Number);
let graph = [];
let q = []; 

for (let i = 0; i < H; i++) {
    let layer = [];

    for (let j = 0; j < N; j++) {
        layer.push(input[j].split(' ').map(Number));

        for (let k = 0; k < M; k++) {
            if (layer[j][k] === 1) {
                q.push([i, j, k]);
            }
        }
    }

    graph.push(layer);
}

const dx = [-1, 1, 0, 0, 0, 0];
const dy = [0, 0, -1, 1, 0, 0];
const dz = [0, 0, 0, 0, -1, 1];

while (q.length) {
    const [x, y, z] = q.shift();

    for (let i = 0; i < 6; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        const nz = z + dz[i];

        if (nx < 0 || nx >= H || ny < 0 || ny >= N || nz < 0 || nz >= M) {
            continue;
        }

        if (graph[nx][ny][nz] === 0 && visited[nx][ny][nz] === 0) {
            q.push([nx, ny, nz]);
            graph[nx][ny][nz] = graph[x][y][z] + 1;
        }
    }
}

let answer = 0;

for (let a = 0; a < H; a++) {
    for (let b = 0; b < N; b++) {
        for (let c = 0; c < M; c++) {
            if (graph[a][b][c] === 0) {
                console.log(-1);
                return;
            } else {
                answer = max(answer, max(graph[a][b]));
            }
        }
    }
}

console.log(answer-1);