const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const graph = input.map((i) => i.split('').map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const BFS = (a, b) => {
    let q = [[a, b]];

    while (q.length) {
        const [x, y] = q.shift();

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= N || ny < 0 || ny >= M) {
                continue;
            }

            if (graph[nx][ny] === 1) {
                graph[nx][ny] = graph[x][y] + 1;
                q.push([nx, ny]);
            }
        }
    }
};

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (graph[i][j] === 1) {
            BFS(i, j);
        }
    }
}

console.log(graph[N - 1][M - 1]);
