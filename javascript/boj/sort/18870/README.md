[백준 18870 - 좌표 압축](https://www.acmicpc.net/problem/18870)

### 문제
수직선 위에 N개의 좌표 X1, X2, ..., XN이 있다. 이 좌표에 좌표 압축을 적용하려고 한다.

Xi를 좌표 압축한 결과 X'i의 값은 Xi > Xj를 만족하는 서로 다른 좌표 Xj의 개수와 같아야 한다.

X1, X2, ..., XN에 좌표 압축을 적용한 결과 X'1, X'2, ..., X'N를 출력해보자.

### 입력
첫째 줄에 N이 주어진다.

둘째 줄에는 공백 한 칸으로 구분된 X1, X2, ..., XN이 주어진다.

### 출력
첫째 줄에 X'1, X'2, ..., X'N을 공백 한 칸으로 구분해서 출력한다.

<br/>

---

<br/>

## Solution
- 처음에 입력받은 순서를 함께 저장

### 코드
```javascript
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = Number(input[0]);
const nums = input[1].split(' ').map((num, idx) => [idx, Number(num)]).sort((a, b) => a[1] - b[1]);

let ans = [[nums[0][0], 0]];

for (let i = 1; i < nums.length; i++) {
    if (nums[i][1] === nums[i-1][1]) {
        ans.push([nums[i][0], ans[ans.length-1][1]]);
    } else {
        ans.push([nums[i][0], ans[ans.length-1][1] + 1]);

    }
}

ans.sort((a, b) => a[0] - b[0]);
console.log(ans.map((a) => a[1]).join(' '));
```