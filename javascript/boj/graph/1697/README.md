[백준 1697 - 숨바꼭질](https://www.acmicpc.net/problem/1697)

### 문제
수빈이는 동생과 숨바꼭질을 하고 있다. 수빈이는 현재 점 N(0 ≤ N ≤ 100,000)에 있고, 동생은 점 K(0 ≤ K ≤ 100,000)에 있다. 수빈이는 걷거나 순간이동을 할 수 있다. 만약, 수빈이의 위치가 X일 때 걷는다면 1초 후에 X-1 또는 X+1로 이동하게 된다. 순간이동을 하는 경우에는 1초 후에 2*X의 위치로 이동하게 된다.

수빈이와 동생의 위치가 주어졌을 때, 수빈이가 동생을 찾을 수 있는 가장 빠른 시간이 몇 초 후인지 구하는 프로그램을 작성하시오.

### 입력
첫 번째 줄에 수빈이가 있는 위치 N과 동생이 있는 위치 K가 주어진다. N과 K는 정수이다.

### 출력
수빈이가 동생을 찾는 가장 빠른 시간을 출력한다.

---

## Solution
### 방법
- BFS 사용 - 처음 위치에서 갈 수 있는 모든 방향에 대해 도달할 수 있는 횟수를 구한다.
- n으로부터 각 위치로 이동하는 데까지 걸리는 시간은 `time` 배열에 저장한다.
  - 예를 들어, n=5, dest=19 일 때, 걸리는 시간을 알고 싶다면 `time[19]` 를 확인하면 된다.


### 코드
```javascript
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(path).toString().trim().split(' ').map(Number);

const n = input[0];
const k = input[1];
const MAX = 100000;

const time = new Array(MAX+1).fill(0);

const BFS = () => {
    q = [];
    q.push(n);

    while (q.length) {
        let x = q.shift();
        
        if (x === k) return time[x];

        for (let nx of [x-1, x+1, x*2]) {
            if (0 <= nx && nx <= MAX && !time[nx]) {
                time[nx] = time[x] + 1;
                q.push(nx);
            }
        }
    }
}

console.log(BFS());
```