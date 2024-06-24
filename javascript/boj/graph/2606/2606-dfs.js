const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = Number(input.shift());
const M = Number(input.shift());

const graph = Array.from(Array(N+1), () => new Array(N+1).fill(0));
const visited = Array.from(Array(N+1), () => 0);

let cnt = 0;

for (let i = 0; i < M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a][b] = 1;
  graph[b][a] = 1;
}


function DFS(v) {
  visited[v] = 1;
  cnt += 1;

  for (let i = 1; i < graph.length; i++) {
    if (graph[v][i] === 1 && visited[i] === 0) {
      DFS(i);
    }
  }
}

DFS(1);

// 1번 컴퓨터는 제외
console.log(cnt-1);