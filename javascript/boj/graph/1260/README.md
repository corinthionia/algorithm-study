[백준 1463 - 1로 만들기](https://www.acmicpc.net/problem/1463)

### 문제
그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오. 단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, 더 이상 방문할 수 있는 점이 없는 경우 종료한다. 정점 번호는 1번부터 N번까지이다.

### 입력
첫째 줄에 정점의 개수 N(1 ≤ N ≤ 1,000), 간선의 개수 M(1 ≤ M ≤ 10,000), 탐색을 시작할 정점의 번호 V가 주어진다. 다음 M개의 줄에는 간선이 연결하는 두 정점의 번호가 주어진다. 어떤 두 정점 사이에 여러 개의 간선이 있을 수 있다. 입력으로 주어지는 간선은 양방향이다.

### 출력
첫째 줄에 DFS를 수행한 결과를, 그 다음 줄에는 BFS를 수행한 결과를 출력한다. V부터 방문된 점을 순서대로 출력하면 된다.

---

## Solution
### DFS
- 그래프에서 깊은 부분을 우선적으로 탐색하는 알고리즘 (최대한 멀리 있는 노드를 우선 탐색)
- **재귀 함수**를 이용하면 간결하게 구현할 수 있다.
- 주로 번호가 낮은 노드부터 처리하도록 요구한다.
- 스택 자료구조에 기초한다는 점에서 구현이 간단한데, 실제로는 스택을 사용하지 않아도 되며, 데이터가 N개인 경우 *O(N)*의 시간이 소요된다.

### BFS
- *O(N)*
- 가까운 노드부터 탐색하는 알고리즘
- 실제 수행 시간은 DFS보다 좋다.
- 큐 자료구조에 기초한다는 점에서 구현이 간단하다.


### 코드
```javascript
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
```

