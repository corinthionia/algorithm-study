const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [L, C] = input[0].split(' ').map(Number);
const chars = input[1].split(' ').sort((a, b) => a.charCodeAt() - b.charCodeAt());

const result = [];

const checkIsVowel = (char) => {
    return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
};

const backtracking = (idx, vowel_cnt, consonant_cnt) => {
    if (result.length === L && 0 < vowel_cnt && 1 < consonant_cnt) {
        console.log(result.join(''));
    }

    for (let i = idx; i < C; i++) {
        const isVowel = checkIsVowel(chars[i]);

        result.push(chars[i]);
        backtracking(i + 1, vowel_cnt + (isVowel ? 1 : 0), consonant_cnt + (isVowel ? 0 : 1));
        result.pop();
    }
};

backtracking(0, 0, 0);
