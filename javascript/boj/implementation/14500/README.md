[백준 14500 - 테트로미노](https://www.acmicpc.net/problem/14500)

### 문제

폴리오미노란 크기가 1×1인 정사각형을 여러 개 이어서 붙인 도형이며, 다음과 같은 조건을 만족해야 한다.

정사각형은 서로 겹치면 안 된다.
도형은 모두 연결되어 있어야 한다.
정사각형의 변끼리 연결되어 있어야 한다. 즉, 꼭짓점과 꼭짓점만 맞닿아 있으면 안 된다.
정사각형 4개를 이어 붙인 폴리오미노는 테트로미노라고 하며, 다음과 같은 5가지가 있다.

아름이는 크기가 N×M인 종이 위에 테트로미노 하나를 놓으려고 한다. 종이는 1×1 크기의 칸으로 나누어져 있으며, 각각의 칸에는 정수가 하나 쓰여 있다.

테트로미노 하나를 적절히 놓아서 테트로미노가 놓인 칸에 쓰여 있는 수들의 합을 최대로 하는 프로그램을 작성하시오.

테트로미노는 반드시 한 정사각형이 정확히 하나의 칸을 포함하도록 놓아야 하며, 회전이나 대칭을 시켜도 된다.

### 입력

첫째 줄에 종이의 세로 크기 N과 가로 크기 M이 주어진다. (4 ≤ N, M ≤ 500)

둘째 줄부터 N개의 줄에 종이에 쓰여 있는 수가 주어진다. i번째 줄의 j번째 수는 위에서부터 i번째 칸, 왼쪽에서부터 j번째 칸에 쓰여 있는 수이다. 입력으로 주어지는 수는 1,000을 넘지 않는 자연수이다.

### 출력

첫째 줄에 테트로미노가 놓인 칸에 쓰인 수들의 합의 최댓값을 출력한다.

<br/>

---

<br/>

## Solution

### 코드

-   한 칸씩 확장해 가며 만약 주변에 더 큰 숫자가 있을 경우 그것을 포함
-   DFS 사용

```javascript
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const mat = input.map((i) => i.split(' ').map(Number));
let visited = new Array(N).fill(0).map(() => new Array(M).fill(0));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let max = 0;
mat.forEach((row) => {
    const maxInRow = Math.max(...row);
    if (maxInRow > max) {
        max = maxInRow;
    }
});

let answer = 0;

const DFS = (x, y, step, total) => {
    /**
     * [x, y]: 현재 탐색하고 있는 좌표
     * step: 현재 포함하고 있는 칸의 수 (1~4)
     * total: 현재 포함하고 있는 칸들의 합
     */

    if (total + max * (4 - step) <= answer) {
        return;
    }

    if (step === 4) {
        answer = Math.max(answer, total);
        return;
    }

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || nx >= N || ny < 0 || ny >= M) {
            continue;
        }

        if (!visited[nx][ny]) {
            /**
             * 테트로미노는 기본적으로 2개가 붙어 있고, 그후에 어느 방향으로 뻗느냐에 따라 모양이 결정된다!
             */
            if (step === 2) {
                visited[nx][ny] = 1;
                DFS(x, y, step + 1, total + mat[nx][ny]);
                visited[nx][ny] = 0;
            }

            visited[nx][ny] = 1;
            DFS(nx, ny, step + 1, total + mat[nx][ny]);
            visited[nx][ny] = 0;
        }
    }
};

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        visited[i][j] = 1;
        DFS(i, j, 1, mat[i][j]);
        visited[i][j] = 0;
    }
}

console.log(answer);
```
