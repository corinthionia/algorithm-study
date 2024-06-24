const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(path).toString().trim().split('\n').map(Number);

const N = input.shift();

class MinHeap {
    constructor() {
        this.heap = [];
    }

    // 부모 노드의 인덱스를 반환
    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    // 왼쪽 자식 노드의 인덱스를 반환
    leftChildIndex(index) {
        return index * 2 + 1;
    }

    // 오른쪽 자식 노드의 인덱스를 반환
    rightChildIndex(index) {
        return index * 2 + 2;
    }

    // 두 원소를 교환
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    // 새로운 원소를 추가하고 힙을 재구성
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    // 특정 인덱스의 노드를 최소 힙으로 재구성
    heapifyUp(index = this.heap.length - 1) {
        let currentIndex = index;
        let parentIndex = this.parentIndex(currentIndex);

        while (currentIndex > 0 && this.heap[currentIndex] < this.heap[parentIndex]) {
            this.swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = this.parentIndex(currentIndex);
        }
    }

    // 최소 원소를 삭제하고 반환
    deleteMin() {
        if (this.heap.length === 0) {
            return 0;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();

        return min;
    }

    // 특정 인덱스의 노드를 최소 힙으로 재구성
    heapifyDown(index = 0) {
        let currentIndex = index;
        let leftChildIndex, rightChildIndex, smallerChildIndex;

        while (currentIndex < this.heap.length) {
            leftChildIndex = this.leftChildIndex(currentIndex);
            rightChildIndex = this.rightChildIndex(currentIndex);
            smallerChildIndex = null;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[currentIndex]) {
                smallerChildIndex = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < (smallerChildIndex === null ? this.heap[currentIndex] : this.heap[smallerChildIndex])) {
                smallerChildIndex = rightChildIndex;
            }

            if (smallerChildIndex === null) {
                break;
            }

            this.swap(currentIndex, smallerChildIndex);
            currentIndex = smallerChildIndex;
        }
    }
}

const minHeap = new MinHeap();

for (let i = 0; i < N; i++) {
    if (input[i] === 0) {
        console.log(minHeap.deleteMin());
    } else {
        minHeap.insert(input[i]);
    }
}

