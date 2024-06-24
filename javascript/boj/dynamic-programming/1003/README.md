[백준 1003 - 피보나치 함수](https://www.acmicpc.net/problem/1003)

### 문제
다음 소스는 N번째 피보나치 수를 구하는 C++ 함수이다.

```
int fibonacci(int n) {
    if (n == 0) {
        printf("0");
        return 0;
    } else if (n == 1) {
        printf("1");
        return 1;
    } else {
        return fibonacci(n‐1) + fibonacci(n‐2);
    }
}
```

fibonacci(3)을 호출하면 다음과 같은 일이 일어난다.

- fibonacci(3)은 fibonacci(2)와 fibonacci(1) (첫 번째 호출)을 호출한다.
- fibonacci(2)는 fibonacci(1) (두 번째 호출)과 fibonacci(0)을 호출한다.
- 두 번째 호출한 fibonacci(1)은 1을 출력하고 1을 리턴한다.
- fibonacci(0)은 0을 출력하고, 0을 리턴한다.
- fibonacci(2)는 fibonacci(1)과 fibonacci(0)의 결과를 얻고, 1을 리턴한다.
- 첫 번째 호출한 fibonacci(1)은 1을 출력하고, 1을 리턴한다.
- fibonacci(3)은 fibonacci(2)와 fibonacci(1)의 결과를 얻고, 2를 리턴한다.

1은 2번 출력되고, 0은 1번 출력된다. N이 주어졌을 때, fibonacci(N)을 호출했을 때, 0과 1이 각각 몇 번 출력되는지 구하는 프로그램을 작성하시오.

### 입력
첫째 줄에 테스트 케이스의 개수 T가 주어진다.
각 테스트 케이스는 한 줄로 이루어져 있고, N이 주어진다. N은 40보다 작거나 같은 자연수 또는 0이다.

### 출력
각 테스트 케이스마다 0이 출력되는 횟수와 1이 출력되는 횟수를 공백으로 구분해서 출력한다.

---

## Solution
### 방법
- DP를 이용한다 - 0과 1의 개수가 f(2)부터 점화식 형태를 띈다는 것을 확인할 수 있다.
- `[0의개수, 1의개수]` 형태의 배열로 각각의 개수를 카운팅한다


### 코드
```javascript
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(path).toString().trim().split('\n').map(Number);

const T = input.shift();

// dp[0의개수][1의개수]
// 즉, 각 값들을 구할 때 필요한 0과 1의 개수를 저장
let dp = new Array(41).fill(0).map(() => [0, 0]);

for (let i = 0; i < T; i++) {
    const N = input.shift();

    dp[0] = [1, 0];  // f(0)
    dp[1] = [0, 1];  // f(1)

    for (let j = 2; j < N+1; j++) {
        dp[j][0] = dp[j-1][0] + dp[j-2][0];
        dp[j][1] = dp[j-1][1] + dp[j-2][1];
    }

    console.log(dp[N][0], dp[N][1]);
}

```

### 삽질 ⛏️
문제를 풀다가 테스트 케이스를 실행해 봤는데, 매 실행 시마다 결과가 다르게 나왔다. 코드를 변경하지도 않았고, 잘못 작성된 부분도 없어서 고민을 하다가 배열 선언하는 부분에서 에러가 나는 것 같았다.

기존에 작성했던 코드는 아래와 같다.
```javascript
let dp = new Array(41).fill([0, 0]);
```
위의 코드를 아래와같이 수정했더니 해결되었다.
```javascript
let dp = new Array(41).fill(0).map(() => [0, 0]);
```
기존에 작성했던 코드에서는, 배열을 초기화할 때 모든 원소가 하나의 같은 배열을 참조하고 있었다 😇

메서드에 전달한 값이 숫자와 같은 원시값이라면 값 자체가 복사되기 때문에 이러한 문제가 발생하지 않지만, 객체(배열 역시 객체)인 경우 참조에 의한 복사가 일어나게 되어 위와 같은 문제가 발생한 것이었따