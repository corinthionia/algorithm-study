[백준 10026 - 적록색약](https://www.acmicpc.net/problem/1764)

### 문제
적록색약은 빨간색과 초록색의 차이를 거의 느끼지 못한다. 따라서, 적록색약인 사람이 보는 그림은 아닌 사람이 보는 그림과는 좀 다를 수 있다.

크기가 N×N인 그리드의 각 칸에 R(빨강), G(초록), B(파랑) 중 하나를 색칠한 그림이 있다. 그림은 몇 개의 구역으로 나뉘어져 있는데, 구역은 같은 색으로 이루어져 있다. 또, 같은 색상이 상하좌우로 인접해 있는 경우에 두 글자는 같은 구역에 속한다. (색상의 차이를 거의 느끼지 못하는 경우도 같은 색상이라 한다)

예를 들어, 그림이 아래와 같은 경우에

```
RRRBB
GGBBB
BBBRR
BBRRR
RRRRR
```

적록색약이 아닌 사람이 봤을 때 구역의 수는 총 4개이다. (빨강 2, 파랑 1, 초록 1) 하지만, 적록색약인 사람은 구역을 3개 볼 수 있다. (빨강-초록 2, 파랑 1)
그림이 입력으로 주어졌을 때, 적록색약인 사람이 봤을 때와 아닌 사람이 봤을 때 구역의 수를 구하는 프로그램을 작성하시오.

### 입력
첫째 줄에 N이 주어진다. (1 ≤ N ≤ 100)
둘째 줄부터 N개 줄에는 그림이 주어진다.

### 출력
적록색약이 아닌 사람이 봤을 때의 구역의 개수와 적록색약인 사람이 봤을 때의 구역의 수를 공백으로 구분해 출력한다.

<br/>

---

<br/>

## Solution 2
- Sol1에서는 적록색약인 사람과 아닌 사람에 대해 각각 BFS 함수를 따로 작성했는데, Sol2에서는 하나의 BFS 함수만 사용하도록 구현
- 적록색약이 아닌 경우부터 BFS를 이용하여 구역의 개수를 센 뒤, 그래프의 'G'를 모두 'R'로 변환하는 작업 수행

### 코드
```javascript
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
```