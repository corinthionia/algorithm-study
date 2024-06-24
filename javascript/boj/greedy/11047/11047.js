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
