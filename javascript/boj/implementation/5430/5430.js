const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const [T, ...tc] = require('fs').readFileSync(path).toString().trim().split('\n');

for (let i = 0; i < tc.length; i += 3) {
    const commands = tc[i].split('');
    let nums = JSON.parse(tc[i+2]);

    let isError = false;
    let isReversed = false;

    for (let command of commands) {
        if (command === 'R') {
            isReversed = !isReversed;
        } 

        if (command === 'D') {
            if (nums.length) {
                if (isReversed) nums.pop();
                else nums.shift();
            } else {
                isError = true;
            }
        } 
    }

    console.log(isError ? 'error' : (JSON.stringify(isReversed ? nums.reverse() : nums)));
}