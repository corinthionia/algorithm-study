const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...seq] = require('fs').readFileSync(path).toString().trim().split('\n').map(Number);

const answer = [];
const stk = [];
let top = 1;

for (let i = 0; i < n; i++) {
    while (top <= seq[i]) {
        stk.push(top);
        answer.push('+');
        top++;
    }

    if (stk[stk.length-1] == seq[i]) {
        stk.pop();
        answer.push('-');
    } else {
        console.log('NO');
        return;
    }
}

for (const ans of answer) {
    console.log(ans);
}