const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = require('fs').readFileSync(path).toString().trim().split('\n');

const N = Number(n);
const graph = input.map((inp) => inp.split(' ').map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// 주어진 건물에서 가장
let height = 0;
for (const row of graph) {
    height = Math.max(height, ...row);
}

const bfs = (a, b, h, visited) => {
    const q = [[a, b]];
    visited[a][b] = 1;

    while (q.length) {
        const [x, y] = q.shift();

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;

            // 물에 잠기지 않는 영역 구하기
            if (h < graph[nx][ny] && !visited[nx][ny]) {
                q.push([nx, ny]);
                visited[nx][ny] = 1;
            }
        }
    }
};

// 비가 내리지 않는 경우 - 안전 영역의 크기는 1
// 처음에 0으로 초기화해서 틀렸음
let answer = 1;

for (let h = height; h > 0; h--) {
    const visited = new Array(N).fill(0).map(() => new Array(N).fill(0));
    let cnt = 0;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (!visited[i][j] && h < graph[i][j]) {
                bfs(i, j, h, visited);
                cnt++;
            }
        }
    }

    answer = Math.max(answer, cnt);
}

console.log(answer);
