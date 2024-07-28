import math
import sys
input = sys.stdin.readline

N = int(input())
dp = [0] * (N+1)

for i in range(1, N+1):
    if math.sqrt(i) % 1 == 0:  # 제곱수일 경우
        dp[i] = 1
    else:  # 제곱수가 아닐 경우
        min_value = 1e9
        for j in range(1, math.floor(math.sqrt(i)) + 1):
            min_value = min(min_value, dp[i - j**2])
        dp[i] = min_value + 1

print(dp[N])