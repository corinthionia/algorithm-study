[백준 1764 - 듣보잡](https://www.acmicpc.net/problem/1764)

### 문제
김진영이 듣도 못한 사람의 명단과, 보도 못한 사람의 명단이 주어질 때, 듣도 보도 못한 사람의 명단을 구하는 프로그램을 작성하시오.

### 입력
첫째 줄에 듣도 못한 사람의 수 N, 보도 못한 사람의 수 M이 주어진다. 이어서 둘째 줄부터 N개의 줄에 걸쳐 듣도 못한 사람의 이름과, N+2째 줄부터 보도 못한 사람의 이름이 순서대로 주어진다. 이름은 띄어쓰기 없이 알파벳 소문자로만 이루어지며, 그 길이는 20 이하이다. N, M은 500,000 이하의 자연수이다.

듣도 못한 사람의 명단에는 중복되는 이름이 없으며, 보도 못한 사람의 명단도 마찬가지이다.

### 출력
듣보잡의 수와 그 명단을 사전순으로 출력한다.

<br/>

---

<br/>

## Solution
- `Set`와 교집합 이용

### 코드
```javascript
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);

let set1 = new Set();
let set2 = new Set();

for (let i = 0; i < N; i++) {
    set1.add(input[i]);
}

for (let j = N; j < N+M-1; j++) {
    set2.add(input[j]);
}

const res =  [...new Set([...set1].filter((value) => set2.has(value)))].sort();

console.log(res.length);
res.map((r) => console.log(r));
```