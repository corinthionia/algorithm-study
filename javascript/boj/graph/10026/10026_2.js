const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = Number(input.shift());
let graph = input.map((inp) => inp.split(''));
let visited_a = new Array(N).fill(0).map(() => new Array(N).fill(0));
let visited_b = new Array(N).fill(0).map(() => new Array(N).fill(0));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const BFS = (a, b, visited) => {
    visited[a][b] = 1;

    let q = [];
    q.push([a, b]);

    while (q.length) {
        const [x, y] = q.shift();
        visited[x][y] = 1;

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;

            if (visited[nx][ny] === 0 && graph[x][y] === graph[nx][ny]) {
                visited[nx][ny] = 1;
                q.push([nx, ny]);
            }
        }
    } 
}

let a = 0; // 적록색약이 아닌 경우
let b = 0; // 적록색약인 경우

// 적록색약이 아닌 경우
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (visited_a[i][j] === 0) {
            BFS(i, j, visited_a);
            a++;
        }
    }
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (graph[i][j] === 'G') {
            graph[i][j] = 'R';
        }
    }
}

// 적록색약인 경우
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (visited_b[i][j] === 0) {
            BFS(i, j, visited_b);
            b++;
        }
    }
}

console.log(a, b);