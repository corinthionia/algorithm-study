[백준 11724 - 연결 요소의 개수](https://www.acmicpc.net/problem/11724)

### 문제
방향 없는 그래프가 주어졌을 때, 연결 요소 (Connected Component)의 개수를 구하는 프로그램을 작성하시오.

### 입력
첫째 줄에 정점의 개수 N과 간선의 개수 M이 주어진다. (1 ≤ N ≤ 1,000, 0 ≤ M ≤ N×(N-1)/2) 둘째 줄부터 M개의 줄에 간선의 양 끝점 u와 v가 주어진다. (1 ≤ u, v ≤ N, u ≠ v) 같은 간선은 한 번만 주어진다.

### 출력
첫째 줄에 연결 요소의 개수를 출력한다.

---

## Solution

### 코드
```javascript
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

let mat = new Array(N+1).fill(0).map(() => []);
let visited = new Array(N+1).fill(0);

for (let i = 1; i < M+1; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    mat[a].push(b);
    mat[b].push(a);
}

const DFS = (v) => {
    visited[v] = 1;

    for (let node of mat[v]) {
        if (!visited[node]) {
            DFS(node);
        }
    }
}

let cnt = 0;
 
for (let i = 1; i < N+1; i++) {
    if (!visited[i]) {
        DFS(i);
        cnt++;
    }
}

console.log(cnt);
```

### 시간 초과
처음에 N과 M을 입력받는 부분에서 아래와같이 `shift` 메소드를 활용했다.
```javascript
const [N, M] = input.shift().split(' ').map(Number);

...

for (let i = 0; i < M; i++) {
    const [a, b] = input.shift().split(' ').map(Number);
    ...
}
```

그런데 시간 초과가 발생했고, 찾아보니까 `shift` 메소드를 사용하면 시간초과가 날 수 있다고 한다 😇
그래서 `shift` 를 쓰지 않고 그냥 입력값들을 `input` 배열에 한꺼번에 저장한 다음, 인덱스를 수정해 주었더니 정상적으로 통과되었다.