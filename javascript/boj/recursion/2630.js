const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = Number(input.shift());
const graph = input.map((inp) => inp.split(' ').map(Number));

let white = 0;
let blue = 0;

const solution = (x, y, length) => {
    let color = graph[x][y];

    for (let i = x; i < x + length; i++) {
        for (let j = y; j < y + length; j++) {
            // 전체 종이가 모두 같은 색으로 칠해져 있지 않으면 색종이를 나누기
            if (graph[i][j] !== color) {
                const half = Math.floor(length / 2);
                solution(x, y, half);
                solution(x, y + half, half);
                solution(x + half, y, half);
                solution(x + half, y + half, half);
                return;
            }
        }
    }

    if (color === 0) white++;
    else blue++;
};

solution(0, 0, N);
console.log(white);
console.log(blue);
