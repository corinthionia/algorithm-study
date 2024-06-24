const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const graph = input.map((inp) => inp.split('').map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const BFS = (a, b) => {
    let q = [];
    q.push([a, b]);

    while (q.length) {
        const [x, y] = q.shift();

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

            if (graph[nx][ny] === 1) {
                q.push([nx, ny]);
                graph[nx][ny] = graph[x][y] + 1;
            }
        }
    }

    return graph[N-1][M-1];
}

console.log(BFS(0, 0));
