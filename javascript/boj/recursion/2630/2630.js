const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = Number(input.shift());
const graph = input.map((i) => i.split(' ').map(Number));

let blue = 0;
let white = 0;

const solution = (x, y, length) => {
    let color = graph[x][y];

    for (let i = x; i < x+length; i++) {
        for (let j = y; j < y+length; j++) {
            if (graph[i][j] !== color) {
                solution(x, y, Math.floor(length / 2));
                solution(x, y + Math.floor(length / 2), Math.floor(length / 2));
                solution(x + Math.floor(length / 2), y, Math.floor(length / 2));
                solution(x + Math.floor(length / 2), y + Math.floor(length / 2), Math.floor(length / 2));
                return;
            }
        }
    }

    if (color === 0) {
        white += 1;
    } else {
        blue += 1;
    }
}

solution(0, 0, N);
console.log(white);
console.log(blue);