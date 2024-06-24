const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = Number(input.shift());
const graph = input.map((inp) => inp.split(' ').map(Number));

let answer = Number.MAX_SAFE_INTEGER;
const visited = new Array(N).fill(0);

const BT = (depth, idx) => {
    if (depth === N / 2) {
        let team1 = 0;
        let team2 = 0;

        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                if (visited[i] && visited[j]) {
                    team1 += graph[i][j];
                } else if (!visited[i] && !visited[j]) {
                    team2 += graph[i][j];
                }
            }
        }
        answer = Math.min(answer, Math.abs(team1 - team2));
        return;
    }

    for (let i = idx; i < N; i++) {
        if (!visited[i]) {
            visited[i] = 1;
            BT(depth + 1, i + 1);
            visited[i] = 0;
        }
    }
};

BT(0, 0);
console.log(answer);
