[백준 11286 - 절댓값 힙](https://www.acmicpc.net/problem/11286)

### 문제
절댓값 힙은 다음과 같은 연산을 지원하는 자료구조이다.

배열에 정수 x (x ≠ 0)를 넣는다.
배열에서 절댓값이 가장 작은 값을 출력하고, 그 값을 배열에서 제거한다. 절댓값이 가장 작은 값이 여러개일 때는, 가장 작은 수를 출력하고, 그 값을 배열에서 제거한다.
프로그램은 처음에 비어있는 배열에서 시작하게 된다.

### 입력
첫째 줄에 연산의 개수 N(1≤N≤100,000)이 주어진다. 다음 N개의 줄에는 연산에 대한 정보를 나타내는 정수 x가 주어진다. 만약 x가 0이 아니라면 배열에 x라는 값을 넣는(추가하는) 연산이고, x가 0이라면 배열에서 절댓값이 가장 작은 값을 출력하고 그 값을 배열에서 제거하는 경우이다. 입력되는 정수는 -231보다 크고, 231보다 작다.

### 출력
입력에서 0이 주어진 회수만큼 답을 출력한다. 만약 배열이 비어 있는 경우인데 절댓값이 가장 작은 값을 출력하라고 한 경우에는 0을 출력하면 된다.

<br/>

---

<br/>

## Solution
- 최소힙 사용
- `시간초과` 뜸... -> 바로바로 출력하지 않고 `answer` 배열에 `push` 한 후 한꺼번에 출력함...

### 코드
```javascript
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const [N, ...nums] = require('fs').readFileSync(path).toString().trim().split('\n').map(Number);

// 최소 힙 구현
class MinHeap {
  constructor() {
    this.heap = [];
  }

  heappush(element) {
    this.heap.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];

    while (index > 0) {
      let parentindex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentindex];

      if (
        element[0] > parent[0] ||
        (element[0] === parent[0] && element[1] > parent[1])
      ) {
        break;
      }
        
      this.heap[parentindex] = element;
      this.heap[index] = parent;
      index = parentindex;
    }
  }

  heappop() {
    const min = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown();
    }

    return min[1];
  }

  sinkDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[index];

    while (true) {
      let leftChildindex = 2 * index + 1;
      let rightChildindex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildindex < length) {
        leftChild = this.heap[leftChildindex];
        if (
          leftChild[0] < element[0] ||
          (leftChild[0] === element[0] && leftChild[1] < element[1])
        ) {
          swap = leftChildindex;
        }
      }

      if (rightChildindex < length) {
        rightChild = this.heap[rightChildindex];
        if (swap === null) {
          if (
            rightChild[0] < element[0] ||
            (rightChild[0] === element[0] && rightChild[1] < element[1])
          ) {
            swap = rightChildindex;
          }
        } else {
          if (
            rightChild[0] < leftChild[0] ||
            (rightChild[0] === leftChild[0] && rightChild[1] < leftChild[1])
          ) {
            swap = rightChildindex;
          }
        }
      }

      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }

  size() {
    return this.heap.length;
  }
}

let hq = new MinHeap();
let answer = [];

for (let num of nums) {
    if (num !== 0) {
        hq.heappush([Math.abs(num), num]); // [절댓값, 원본값] 형태
    } else {
        if (hq.size()) {
            answer.push(hq.heappop());
        } else {
            answer.push(0);
        }
    }
}

console.log(answer.join('\n'));

```
