const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(path).toString().trim().split(' ').map(Number);

const n = input[0];
const k = input[1];
const MAX = 100000;

const time = new Array(MAX+1).fill(0);

const BFS = () => {
    q = [];
    q.push(n);

    while (q.length) {
        let x = q.shift();
        
        if (x === k) return time[x];

        for (let nx of [x-1, x+1, x*2]) {
            if (0 <= nx && nx <= MAX && !time[nx]) {
                time[nx] = time[x] + 1;
                q.push(nx);
            }
        }
    }
}

console.log(BFS());