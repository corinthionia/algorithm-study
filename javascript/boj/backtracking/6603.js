const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

for (let i = 0; i < input.length - 1; i++) {
    const [N, ...S] = input[i].split(' ').map(Number);
    const result = [];

    const backtracking = (depth, idx) => {
        if (depth === 6) {
            console.log(result.join(' '));
            return;
        }

        for (let j = idx; j < S.length; j++) {
            result.push(S[j]);
            backtracking(depth + 1, j + 1);
            result.pop();
        }
    };

    backtracking(0, 0);
    console.log('');
}
