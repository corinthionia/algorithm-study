import sys
input = sys.stdin.readline

T = int(input())

dp = [[0, 0] for _ in range(41)]

for _ in range(T):
    n = int(input())

    dp[0][0] = 0
    dp[0][1] = 1

    dp[1][0] = 1
    dp[1][1] = 0

    for i in range(2, n+1):
        dp[i][0] = dp[i-1][0] + dp[i-2][0]
        dp[i][1] = dp[i-1][1] + dp[i-2][1]
    
    print(dp[n][1], dp[n][0])