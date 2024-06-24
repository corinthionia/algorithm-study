const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const graph = input.map((line) => line.split(' ').map(Number));

const houses = [];
const chickens = [];
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (graph[i][j] === 1) houses.push([i, j]);
        else if (graph[i][j] === 2) chickens.push([i, j]);
    }
}

const visited = new Array(chickens.length).fill(0);
let answer = Infinity;

const getMinDist = () => {
    let sum = 0;

    houses.forEach(([hx, hy]) => {
        let min = Infinity;

        chickens.forEach((_, idx) => {
            if (visited[idx]) {
                const [cx, cy] = chickens[idx];
                min = Math.min(min, Math.abs(hx - cx) + Math.abs(hy - cy));
            }
        });

        sum += min;
    });

    return sum;
};

const DFS = (idx, cnt) => {
    if (cnt === M) {
        answer = Math.min(answer, getMinDist());
        return;
    } else {
        for (let i = idx; i < chickens.length; i++) {
            if (visited[i]) continue;

            visited[i] = 1;
            DFS(i, cnt + 1);
            visited[i] = 0;
        }
    }
};

DFS(0, 0);
console.log(answer);
