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