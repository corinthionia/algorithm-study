const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [M, N] = input[0].split(' ').map(Number);
let graph = input.slice(1).map((i) => i.split(' ').map(Number));

let q = [];

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (graph[i][j] === 1) {
            q.push([i, j]);
        }
    }
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const BFS = () => {
    let head = 0;

    while (q.length > head) {
        const [x, y] = q[head];
        head++;

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

            // 아직 익지 않았다면
            if (graph[nx][ny] === 0) {
                graph[nx][ny] = graph[x][y] + 1;
                q.push([nx, ny]);
            }
        }
    }
};

BFS();
let cnt = 0;

for (const row of graph) {
    for (const tomato of row) {
        if (tomato === 0) {
            console.log(-1);
            return;
        }
    }
    cnt = Math.max(cnt, Math.max(...row));
}

console.log(cnt - 1);
