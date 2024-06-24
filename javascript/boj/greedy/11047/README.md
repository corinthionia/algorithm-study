[백준 11047 - 동전 0](https://www.acmicpc.net/problem/11047)

### 문제
준규가 가지고 있는 동전은 총 N종류이고, 각각의 동전을 매우 많이 가지고 있다.

동전을 적절히 사용해서 그 가치의 합을 K로 만들려고 한다. 이때 필요한 동전 개수의 최솟값을 구하는 프로그램을 작성하시오.

### 입력
첫째 줄에 N과 K가 주어진다. (1 ≤ N ≤ 10, 1 ≤ K ≤ 100,000,000)

둘째 줄부터 N개의 줄에 동전의 가치 Ai가 오름차순으로 주어진다. (1 ≤ Ai ≤ 1,000,000, A1 = 1, i ≥ 2인 경우에 Ai는 Ai-1의 배수)

### 출력
첫째 줄에 K원을 만드는데 필요한 동전 개수의 최솟값을 출력한다.

---

## Solution
### 방법
- 동전을 최소로 사용하려면, 그 가치가 가장 큰 동전부터 사용하는 것이 좋다.
- JavaScript에서는 몫을 구하기 위한 별도의 연산자가 존재하지 않기 때문에, `parseInt` 또는 `Math.floor` 을 사용해야 한다.



### 코드
```javascript
const [n, ...nums] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/).map(Number);

let cnt = 0;
let price = nums.shift(); // 문제에서의 k

nums.sort((a, b) => b - a); // 내림차순으로 정렬

for (let i = 0; i < nums.length; i++) {
    // Math.floor 를 사용한 이유는 몫을 구하기 위함
    if (Math.floor(price / nums[i]) === 0) continue;
    else {
        cnt += Math.floor(price / nums[i]);
        price %= nums[i];
    }
}

console.log(cnt);

```

