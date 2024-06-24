const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const mat = input.map((i) => i.split(' ').map(Number));
let visited = new Array(N).fill(0).map(() => new Array(M).fill(0));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let max = 0;
mat.forEach((row) => {
    const maxInRow = Math.max(...row);
    if (maxInRow > max) {
        max = maxInRow;
    }
});

let answer = 0;

const DFS = (x, y, step, total) => {
    if (total + max * (4 - step) <= answer) {
        return;
    }

    if (step === 4) {
        answer = Math.max(answer, total);
        return;
    }

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || nx >= N || ny < 0 || ny >= M) {
            continue;
        }

        if (!visited[nx][ny]) {
            if (step === 2) {
                visited[nx][ny] = 1;
                DFS(x, y, step + 1, total + mat[nx][ny]);
                visited[nx][ny] = 0;
            }

            visited[nx][ny] = 1;
            DFS(nx, ny, step + 1, total + mat[nx][ny]);
            visited[nx][ny] = 0;
        }
    }
};

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        visited[i][j] = 1;
        DFS(i, j, 1, mat[i][j]);
        visited[i][j] = 0;
    }
}

console.log(answer);
