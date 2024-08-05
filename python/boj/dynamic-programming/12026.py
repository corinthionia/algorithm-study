N = int(input())
blocks = input()

dp = [1e9] * (N)  # 각 칸에 도달하기 위해 필요한 에너지 기록
dp[0] = 0

for i in range(N):    
    for j in range(i+1, N):
        if (blocks[i] == 'B' and blocks[j] == 'O') or (blocks[i] == 'O' and blocks[j] == 'J') or (blocks[i] == 'J' and blocks[j] == 'B'):
            dp[j] = min(dp[i] + (j-i)**2, dp[j])

if dp[N-1] == 1e9:
    print(-1)
else:
    print(dp[N-1])