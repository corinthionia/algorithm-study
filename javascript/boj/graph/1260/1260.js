const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m, v] = input[0].split(" ").map(Number);
const graph = Array.from(Array(n + 1), () => new Array(n + 1).fill(0));

// 연결된 정점 입력
for (let i = 1; i <= m; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  graph[a][b] = 1;
  graph[b][a] = 1;
}

const d_visited = new Array(n + 1).fill(false);
const d_answer = [];

function DFS(v) {
  d_visited[v] = true;
  d_answer.push(v);

  for (let i = 1; i < graph.length; i++) {
    if (graph[v][i] === 1 && d_visited[i] === false) {
      DFS(i);
    }
  }
}


const b_visited = new Array(n + 1).fill(false);
const b_answer = [];

function BFS(v) {
  const queue = [];

  b_visited[v] = true;
  b_answer.push(v);
  queue.push(v);

  while (queue.length !== 0) {
    let dequeue = queue.shift();

    for (let i = 1; i < graph.length; i++) {
      if (graph[dequeue][i] === 1 && b_visited[i] === false) {
        b_visited[i] = true;
        queue.push(i);
        b_answer.push(i);
      }
    }
  }
}

DFS(v);
BFS(v);

console.log(d_answer.join(" "));
console.log(b_answer.join(" "));