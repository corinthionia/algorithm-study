function solution(enrolls, referrals, sellers, amounts) {
    const answer = {};
    const relations = {};

    enrolls.forEach((enroll, idx) => {
        answer[enroll] = 0;
        relations[enroll] = referrals[idx];
    });

    sellers.forEach((seller, idx) => {
        let curr = seller;
        let revenue = amounts[idx] * 100;

        while (true) {
            if (curr === '-') break;

            const temp = Math.floor(revenue * 0.1);

            if (temp < 1) {
                answer[curr] += revenue;
                break;
            }

            answer[curr] += revenue - temp;
            revenue = temp;
            curr = relations[curr];
        }
    });

    return Object.values(answer);
}
