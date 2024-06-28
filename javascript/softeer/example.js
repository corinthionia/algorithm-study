const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let answer = '';

//input
rl.on('line', (input) => {
    answer = input.split('-').map((i) => i[0]);
});

// output
rl.on('close', () => {
    console.log(answer.join(''));
    process.exit();
});
