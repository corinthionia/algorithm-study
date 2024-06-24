import sys
input = sys.stdin.readline

T = int(input())

for _ in range(T):
    k = int(input())
    n = int(input())

    dp = [[i for i in range(0, n+1)]] 
    
    for i in range(1, k+1): 
        row = [0]

        for j in range(1, n+1): 
            row.append(row[-1] + dp[i-1][j]) 
        
        dp.append(row)
    
    print(dp[k][n])