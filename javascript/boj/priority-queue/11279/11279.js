const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(path).toString().trim().split('\n').map(Number);

const N = input.shift();

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    leftChildIndex(index) {
        return index * 2 + 1;
    }

    rightChildIndex(index) {
        return index * 2 + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp(index = this.heap.length - 1) {
        let currentIndex = index;
        let parentIndex = this.parentIndex(currentIndex);

        while (currentIndex > 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
            this.swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = this.parentIndex(currentIndex);
        }
    }

    deleteMax() {
        if (this.heap.length === 0) {
            return 0;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();

        return max;
    }

    heapifyDown(index = 0) {
        let currentIndex = index;
        let leftChildIndex, rightChildIndex, largerChildIndex;

        while (currentIndex < this.heap.length) {
            leftChildIndex = this.leftChildIndex(currentIndex);
            rightChildIndex = this.rightChildIndex(currentIndex);
            largerChildIndex = null;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[currentIndex]) {
                largerChildIndex = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > (largerChildIndex === null ? this.heap[currentIndex] : this.heap[largerChildIndex])) {
                largerChildIndex = rightChildIndex;
            }

            if (largerChildIndex === null) {
                break;
            }

            this.swap(currentIndex, largerChildIndex);
            currentIndex = largerChildIndex;
        }
    }
}

const maxHeap = new MaxHeap();

for (i = 0; i < N; i++) {
    if (input[i] === 0) {
        console.log(maxHeap.deleteMax());
    } else {
        maxHeap.insert(input[i]);
    }
}