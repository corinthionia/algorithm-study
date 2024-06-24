const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const graph = input.map((i) => i.split(' ').map(Number));
const visited = new Array(N).fill(0).map(() => new Array(M).fill(0));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const BFS = (a, b) => {
    cnt = 1;

    q = [[a, b]];
    visited[a][b] = 1;

    while (q.length) {
        const [x, y] = q.shift();

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

            if (graph[nx][ny] === 1 && visited[nx][ny] === 0) {
                cnt += 1;
                q.push([nx, ny]);
                visited[nx][ny] = 1;
            }
        }
    }

    return cnt;
};

let answer = [];

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (graph[i][j] === 1 && visited[i][j] === 0) {
            answer.push(BFS(i, j));
        }
    }
}

if (answer.length) {
    console.log(answer.length);
    console.log(Math.max(...answer));
} else {
    console.log(0);
    console.log(0);
}
