[백준 11726 - 2×n 타일링](https://www.acmicpc.net/problem/11726)

### 문제
2×n 크기의 직사각형을 1×2, 2×1 타일로 채우는 방법의 수를 구하는 프로그램을 작성하시오.
아래 그림은 2×5 크기의 직사각형을 채운 한 가지 방법의 예이다.

### 입력
첫째 줄에 n이 주어진다. (1 ≤ n ≤ 1,000)

### 출력
첫째 줄에 2×n 크기의 직사각형을 채우는 방법의 수를 10,007로 나눈 나머지를 출력한다.

---

## Solution
### 방법
- 다이나믹 프로그래밍
- 점화식


### 코드
```javascript
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const N = +require('fs').readFileSync(path);

let dp = new Array(N + 1).fill(0);

dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= N; i++) {
    dp[i] = (dp[i-1] + dp[i-2]) % 10007
}

console.log(dp[N]);
```