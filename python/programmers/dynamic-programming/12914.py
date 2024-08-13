def solution(n):
    if n < 3:
        return n
    
    dp = [0] * (n+1)

    dp[2] = 2
    dp[3] = 3
    
    for i in range(4, n+1):
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567
    
    return dp[n]