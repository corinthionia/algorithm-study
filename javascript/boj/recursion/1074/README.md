[백준 1074 - Z](https://www.acmicpc.net/problem/1074)

### 문제
한수는 크기가 2N × 2N인 2차원 배열을 Z모양으로 탐색하려고 한다. 예를 들어, 2×2배열을 왼쪽 위칸, 오른쪽 위칸, 왼쪽 아래칸, 오른쪽 아래칸 순서대로 방문하면 Z모양이다.
N > 1인 경우, 배열을 크기가 2N-1 × 2N-1로 4등분 한 후에 재귀적으로 순서대로 방문한다.

다음 예는 22 × 22 크기의 배열을 방문한 순서이다.

N이 주어졌을 때, r행 c열을 몇 번째로 방문하는지 출력하는 프로그램을 작성하시오.

다음은 N=3일 때의 예이다.

### 입력
첫째 줄에 정수 N, r, c가 주어진다.

### 출력
r행 c열을 몇 번째로 방문했는지 출력한다.

<br/>

---

<br/>

## Solution

### 코드
```javascript
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
let [N, r, c] = require('fs').readFileSync(path).toString().trim().split(' ').map(Number);

let cnt = 0;

while (N !== 0) {
    N -= 1;
    let size = 2 ** N;

    if (r < size && c < size) {
        cnt += 0;
    } else if (r < size && c >= size) {
        cnt += size * size;
        c -= size;
    } else if (r >= size && c < size) {
        cnt += size * size * 2;
        r -= size;
    } else {
        cnt += size * size * 3;
        r -= size;
        c -= size;
    }
}

console.log(cnt);
```