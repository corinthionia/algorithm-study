const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const T = Number(input.shift());

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function BFS(M, N, graph, a, b) {
    let q = [];
    q.push([a, b]);
    graph[a][b] = 0; // 방문처리
    
    while (q.length > 0) {
        const [x, y] = q.shift();

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

            if (graph[nx][ny] === 1) {
                q.push([nx, ny]);
                graph[nx][ny] = 0;
            }
        }
    }
}

for (let i = 0; i < T; i++) {
    const [N, M, K] = input.shift().split(' ').map(Number);
    let graph = Array.from(Array(N), () => new Array(M).fill(0));

    for (let j = 0; j < K; j++) {
        const [x, y] = input.shift().split(' ').map(Number);
        graph[x][y] = 1;
    }

    let cnt = 0;

    for (let a = 0; a < N; a++) {
        for (let b = 0; b < M; b++) {
            if (graph[a][b] === 1) {
                BFS(M, N, graph, a, b);
                cnt += 1;
            }
        }
    }

    console.log(cnt);
}