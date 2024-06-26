const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [R, C] = input.shift().split(' ').map(Number);
const board = input.map((inp) => inp.split(''));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// includes 메서드 사용하면 시간이 오래 걸릴 것 같아 visited 배열 사용
// 지나온 알파벳들 기록
const visited = new Array(26).fill(0);

// visited 배열 탐색에 사용될 index 구하기 - 'A'는 0, 'Z'는 25 가 됨
const getAlphabetIdx = (char) => char.charCodeAt() - 65;

// 이미 지나온 알파벳인지 확인
const isPassedAlphabet = (char) => visited[getAlphabetIdx(char)] === 1;

let answer = 0;

const backtracking = (x, y, cnt) => {
    answer = Math.max(answer, cnt);

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;

        const char = board[nx][ny];

        // 지나온 알파벳이 아니라면 (지나갈 수 있다면) 백트래킹
        if (!isPassedAlphabet(char)) {
            visited[getAlphabetIdx(char)] = 1;
            backtracking(nx, ny, cnt + 1);
            visited[getAlphabetIdx(char)] = 0;
        }
    }
};

// 1행 1열부터 시작
visited[getAlphabetIdx(board[0][0])] = 1; // 처음에 이거 안 해서 계속 답 안 나왔음...
backtracking(0, 0, 1);

console.log(answer);
