const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [input0, ...input1] = require('fs').readFileSync(path).toString().trim().split('\n');

const [M, N] = input0.split(' ').map(Number);
const graph = input1.map((inp) => inp.split(' ').map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// 1일차부터 사용하기 위해 모든 토마토의 위치를 저장
const tomatoes = [];
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (graph[i][j] === 1) {
            tomatoes.push([i, j]);
        }
    }
}

const bfs = () => {
    // shift 메서드 사용하면 시간초과 발생 - index 이용
    let idx = 0;

    while (idx < tomatoes.length) {
        const [x, y] = tomatoes[idx];
        idx++;

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

            if (graph[nx][ny] === 0) {
                graph[nx][ny] = graph[x][y] + 1;
                tomatoes.push([nx, ny]);
            }
        }
    }
};

bfs();
let cnt = 0; // 토마토가 모두 익는 최소 일 수 저장

for (const row of graph) {
    for (const tomato of row) {
        // 토마토가 모두 익지 못하는 상황
        if (tomato === 0) {
            console.log(-1);
            return;
        }
    }
    cnt = Math.max(cnt, Math.max(...row));
}

// 0일차(초기상태) 토마토의 경우까지 포함되어 있으므로 -1
console.log(cnt - 1);
