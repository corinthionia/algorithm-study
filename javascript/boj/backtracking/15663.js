const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const nums = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

const result = [];
const visited = new Array(N).fill(0);

const backtracking = (idx) => {
    if (result.length === M) {
        console.log(result.join(' '));
        return;
    }

    let duplicate = 0;

    for (let j = 0; j < nums.length; j++) {
        if (!visited[j] && duplicate !== nums[j]) {
            visited[j] = 1;
            result.push(nums[j]);

            duplicate = nums[j];

            backtracking(j + 1);

            visited[j] = 0;
            result.pop();
        }
    }
};

backtracking(0, 0);
