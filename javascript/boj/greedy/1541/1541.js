const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const str = require('fs').readFileSync(path).toString().trim().split('-');

let ans = 0;

str.forEach((tok, idx) => {
    let toks = tok.split('+').map(Number);
    let sumOfToks = toks.reduce((acc, cur) => acc + cur, 0);

    if (idx === 0) {
        ans += sumOfToks;
    } else {
        ans -= sumOfToks;
    }
});

console.log(ans);