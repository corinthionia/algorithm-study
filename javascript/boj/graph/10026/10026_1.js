const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = Number(input.shift());
const graph_a = input.map((inp) => inp.split(''));
const graph_b = input.map((inp) => inp.split(''));


const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let cnt_a = 0; // 적록색약인 아닌 경우
let cnt_b = 0; // 적록색약이 경우

// 적록색약이 아닌 경우에 대해 계산
const BFS_A = (a, b) => {
    const color = graph_a[a][b];

    let q = [];
    q.push([a, b]);

    while (q.length) {
        const [x, y] = q.shift();
        graph_a[x][y] = ''; // 방문처리

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;

            if (graph_a[nx][ny] === color) {
                graph_a[nx][ny] = '';
                q.push([nx, ny]);
            }
        }
    } 
}

// 적록색약인 경우에 대해 계산
const BFS_B = (a, b) => {
    const color = graph_b[a][b] === 'G' ? 'R' : graph_b[a][b];

    let q = [];
    q.push([a, b]);

    while (q.length) {
        const [x, y] = q.shift();
        graph_b[x][y] = ''; // 방문처리

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;

            if (color === 'R' && graph_b[nx][ny] === 'G') {
                graph_b[nx][ny] = '';
                q.push([nx, ny]);
                continue;
            }

            if (graph_b[nx][ny] === color) {
                graph_b[nx][ny] = '';
                q.push([nx, ny]);
            }
        }
    } 
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (graph_a[i][j]) {
            BFS_A(i, j);
            cnt_a++;
        }
    }
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (graph_b[i][j]) {
            BFS_B(i, j);
            cnt_b++;
        }
    }
}

console.log(cnt_a, cnt_b);