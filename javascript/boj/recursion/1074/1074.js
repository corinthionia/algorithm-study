const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
let [N, r, c] = require('fs').readFileSync(path).toString().trim().split(' ').map(Number);

let cnt = 0;

while (N !== 0) {
    N -= 1;
    let size = 2 ** N;

    if (r < size && c < size) {
        cnt += 0;
    } else if (r < size && c >= size) {
        cnt += size * size;
        c -= size;
    } else if (r >= size && c < size) {
        cnt += size * size * 2;
        r -= size;
    } else {
        cnt += size * size * 3;
        r -= size;
        c -= size;
    }
}

console.log(cnt);