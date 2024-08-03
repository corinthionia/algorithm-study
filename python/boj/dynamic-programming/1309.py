N = int(input())
dp = [0] * (N + 1)

if N == 1:
    # 이렇게 안 하면 런타임 에러 발생
    print(3)
else:
    # 각 단계(n)마다 최대 n마리의 사자를 가둘 수 있음!
    dp[1] = 3 # 1 + 2 
    dp[2] = 7 # 1 + 4 + 2 
    # dp[3] = 17 # 1 + 6 + 8 + 2

    for i in range(3, N+1):
        dp[i] = (2 * dp[i-1] + dp[i-2]) % 9901

    print(dp[N])