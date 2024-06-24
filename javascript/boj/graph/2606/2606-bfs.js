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

function BFS(v) {
  const queue = [];
  queue.push(v);

  visited[v] = 1;
  cnt += 1;

  while (queue.length !== 0) {
    let dequeue = queue.shift();

    for (let i = 1; i < graph.length; i++) {
      if (graph[dequeue][i] === 1 && visited[i] === 0) {
        visited[i] = 1;
        queue.push(i);
        cnt += 1;
      }
    }
  }
}

BFS(1);

// 1번 컴퓨터는 제외
console.log(cnt-1);