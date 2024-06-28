const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [input1, ...input2] = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, M] = input1.split(' ').map(Number);
const graph = input2.map((inp) => inp.split(' ').map(Number));
const visited = new Array(N).fill(-1).map(() => new Array(M).fill(-1));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const BFS = (a, b) => {
    const q = [[a, b]];
    visited[a][b] = 0;

    while (q.length) {
        const [x, y] = q.shift();

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

            if (visited[nx][ny] === -1) {
                if (graph[nx][ny] === 0) {
                    visited[nx][ny] = 0;
                }

                if (graph[nx][ny] === 1) {
                    visited[nx][ny] = visited[x][y] + 1;
                    q.push([nx, ny]);
                }
            }
        }
    }
};

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (graph[i][j] === 2 && visited[i][j] === -1) {
            BFS(i, j);
        }
    }
}

for (let i = 0; i < N; i++) {
    const temp = [];
    for (let j = 0; j < M; j++) {
        if (graph[i][j] === 0) {
            temp.push(0);
        } else {
            temp.push(visited[i][j]);
        }
    }
    console.log(temp.join(' '));
}
