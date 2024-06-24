const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const [N, ...nums] = require('fs').readFileSync(path).toString().trim().split('\n');

let graph = nums.map((i) => i.split('').map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let result = [];

function bfs(graph, a, b) {
    let q = [];
    q.push([a, b]);

    graph[a][b] = 0 ; // 방문처리
    let cnt = 1;

    while (q.length > 0) {
        const [x, y] = q.shift();
        graph[x][y] = 0;

        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];

            if (nx < 0 || nx >= graph.length || ny < 0 || ny >= graph.length) continue;

            if (graph[nx][ny] == 1) {
                graph[nx][ny] = 0;
                q.push([nx, ny]);
                cnt += 1;
            }
                
        }   
    }

    return cnt;
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (graph[i][j] === 1) {
            cnt = bfs(graph, i, j);
            result.push(cnt);
        }
    }
}

console.log(result.length);
result.sort((a, b) => a - b).map((r) => console.log(r));