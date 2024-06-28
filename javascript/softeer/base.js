const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//input
rl.on('line', (input) => {});

// output
rl.on('close', () => {
    process.exit();
});
