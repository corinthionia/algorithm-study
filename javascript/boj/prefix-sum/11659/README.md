[백준 11659 - 구간 합 구하기 4](https://www.acmicpc.net/problem/11659)

### 문제
수 N개가 주어졌을 때, i번째 수부터 j번째 수까지 합을 구하는 프로그램을 작성하시오.

### 입력
첫째 줄에 수의 개수 N과 합을 구해야 하는 횟수 M이 주어진다. 둘째 줄에는 N개의 수가 주어진다. 수는 1,000보다 작거나 같은 자연수이다. 셋째 줄부터 M개의 줄에는 합을 구해야 하는 구간 i와 j가 주어진다.

### 출력
총 M개의 줄에 입력으로 주어진 i번째 수부터 j번째 수까지 합을 출력한다.

<br/>

---

<br/>

## Solution
- 쉬운 줄 알았으나, 시간초과/메모리초과 발생...
- 누적합(Prefix sum) 알고리즘을 이용하여 해결
- 0번 인덱스부터 각 인덱스까지의 합을 저장한 배열을 추가

### 코드
```javascript
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);

const prefixSum = new Array(N+1).fill(0);
const res = [];

nums.forEach((n, i) => {
  prefixSum[i+1] = prefixSum[i] + n;
});


input.slice(2).forEach(tc => {
  const [a, b] = tc.split(' ').map(Number);
  res.push(prefixSum[b]-prefixSum[a-1]);
});

console.log(res.join('\n'));
```
