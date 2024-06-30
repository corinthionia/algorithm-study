const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let answer = 0;

// input
// input이 한 줄씩 들어옴
rl.on('line', (input) => {
    const [start, end] = input.split(' ');
    const [sh, sm] = start.split(':').map(Number);
    const [eh, em] = end.split(':').map(Number);
    answer += eh * 60 + em - (sh * 60 + sm);
});

// output
rl.on('close', () => {
    console.log(answer);
    process.exit();
});
