const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const N = Number(
    require('fs').readFileSync(path).toString().trim().split('\n')
);

let answer = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < Math.floor(N / 5) + 1; i++) {
    for (let j = 0; j < Math.floor(N / 3) + 1; j++) {
        if (5 * i + 3 * j === N) {
            answer = Math.min(answer, i + j);
        }
    }
}

console.log(answer === Number.MAX_SAFE_INTEGER ? -1 : answer);
