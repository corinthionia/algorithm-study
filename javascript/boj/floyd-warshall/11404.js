const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, m, ...input] = require('fs').readFileSync(path).toString().trim().split('\n');

const N = Number(n);
const M = Number(m);
const arr = input.map((inp) => inp.split(' ').map(Number));

const INF = Number.MAX_SAFE_INTEGER;

const costs = new Array(N + 1).fill(INF).map(() => new Array(N + 1).fill(INF));

// 경로가 중복되어 입력될 수 있기 때문에 Math.min 사용
arr.forEach(([a, b, c]) => (costs[a][b] = Math.min(costs[a][b], c)));

for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j < N + 1; j++) {
        for (let k = 1; k < N + 1; k++) {
            // i를 중간노드 삼아 j와 k를 연결할 수 있다면 거리 업데이트
            if (costs[j][i] !== INF && costs[i][k] !== INF) {
                costs[j][k] = Math.min(costs[j][k], costs[j][i] + costs[i][k]);
            }
        }
    }
}

for (let i = 1; i < N + 1; i++) {
    const temp = [];
    for (let j = 1; j < N + 1; j++) {
        if (costs[i][j] === INF || i === j) {
            temp.push(0);
        } else {
            temp.push(costs[i][j]);
        }
    }
    console.log(temp.join(' '));
}
