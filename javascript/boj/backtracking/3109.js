const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [a, ...b] = require('fs').readFileSync(path).toString().trim().split('\n');

const [R, C] = a.split(' ').map(Number);
const board = b.map((i) => i.split(''));

// 오른쪽으로 나아가기 위해 필요한 방향 정보: ↗ → ↘
// 방향 탐색 순서 중요!! 순서에 따라 답이 달라진다
// 최대한 아래쪽으로 내려가지 않고 위쪽으로 붙어서 가는 게 유리하기 때문
const dx = [-1, 0, 1];
const dy = [1, 1, 1];

let cnt = 0;

// 좌표 (x, y)
// 유망한지 여부를 return
const dfs = (x, y) => {
    // 파이프가 빵집(맨 오른쪽 열)까지 닿으면
    if (y === C - 1) {
        // 유망함 (promising)
        return true;
    }

    for (let i = 0; i < 3; i++) {
        // 현재의 위치에서 다음 방향 탐색
        const nx = x + dx[i];
        const ny = y + dy[i];

        // (nx, ny)가 범위를 벗어나면 continue
        if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;

        // 파이프를 연결할 수 있으면
        if (board[nx][ny] === '.') {
            board[nx][ny] = 'x'; // 방문 표시

            // 유망하다면 (파이프가 더 뻗어나갈 수 있다면)
            if (dfs(nx, ny)) {
                return true;
            }
        }
    }

    return false;
};

for (let i = 0; i < R; i++) {
    // 근처 빵집(첫 번째 열)에서 출발
    if (dfs(i, 0)) {
        cnt++;
    }
}

console.log(cnt);
