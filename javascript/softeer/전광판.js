const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let cases = [];

const nums = [
    '1110111',
    '0010010',
    '1011101',
    '1011011',
    '0111010',
    '1101011',
    '1101111',
    '1110010',
    '1111111',
    '1111011',
];

const solution = (i) => {
    let cnt = 0;

    let start = cases[i * 2 + 1].padStart(5, '*');
    let end = cases[i * 2 + 2].padStart(5, '*');

    for (let j = 0; j < 5; j++) {
        if (start[j] === end[j]) continue;

        if (start[j] === '*') cnt += nums[end[j]].split('').filter((e) => e === '1').length;
        if (end[j] === '*') cnt += nums[start[j]].split('').filter((e) => e === '1').length;

        if (start[j] !== '*' && end[j] !== '*') {
            nums[start[j]].split('').map((e, i) => {
                if (e !== nums[end[j]][i]) cnt += 1;
            });
        }
    }

    console.log(cnt);
};

rl.on('line', (line) => {
    cases = [...cases, ...line.split(' ')];
});

rl.on('close', () => {
    for (let i = 0; i < cases[0]; i++) {
        solution(i);
    }
    process.exit();
});
