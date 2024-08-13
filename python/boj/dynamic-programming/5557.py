N = int(input())
nums = list(map(int, input().split()))

target = nums.pop()
n = N - 1

answer = 0

dp = [([0] * 21) for _ in range(n)]
dp[0][nums[0]] = 1  # dp[사용한 숫자의 인덱스][합]

for i in range(1, n):
    for j in range(21):
        if 0 <= j - nums[i]:
            dp[i][j-nums[i]] += dp[i-1][j]
        if j + nums[i] <= 20:
            dp[i][j+nums[i]] += dp[i-1][j]

print(dp[n-1][target])
