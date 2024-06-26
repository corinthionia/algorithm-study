const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, S] = input.shift().split(' ').map(Number);
const seq = input[0].split(' ').map(Number);

let answer = 0;

const subseq = []; // 부분수열

const backtracking = (idx) => {
    // 현재 만들어진 수열의 합 (subseq 배열 속 원소들의 합)
    const sum = subseq.reduce((a, c) => a + c, 0);

    // 문제 조건 - 크기가 양수인 부분 수열
    if (sum === S && subseq.length > 0) {
        answer++;
    }

    for (let i = idx; i < N; i++) {
        // seq[i]를 부분 수열에 포함시키기
        subseq.push(seq[i]);

        backtracking(i + 1);

        // seq[i]를 부분 수열에서 제거하기
        subseq.pop();
    }
};

backtracking(0);
console.log(answer);
