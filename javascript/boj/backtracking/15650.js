const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, M] = require('fs')
    .readFileSync(path)
    .toString()
    .trim()
    .split(' ')
    .map(Number);

const temp = [];

const dfs = (n) => {
    if (temp.length === M) {
        console.log(temp.join(' '));
        return;
    }

    for (let i = n; i < N + 1; i++) {
        if (!temp.includes(i)) {
            temp.push(i);
            dfs(i + 1);
            temp.pop();
        }
    }
};

dfs(1);
