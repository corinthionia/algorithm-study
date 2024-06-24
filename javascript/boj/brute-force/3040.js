const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const nums = require('fs')
    .readFileSync(path)
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const sum = nums.reduce((a, c) => a + c, 0);

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (sum - nums[i] - nums[j] === 100) {
            nums.forEach((n, idx) => {
                if (idx !== i && idx !== j) {
                    console.log(n);
                }
            });
        }
    }
}
