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

