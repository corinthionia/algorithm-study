T = int(input())

for _ in range(T):
    N = int(input())
    stocks = list(map(int, input().split()))

    stk = []
    answer = 0
    
    for i in range(0, N):
        if len(stk) == 0:
            stk.append(stocks[i])

        if stk[-1] < stocks[i]:
            answer += (stocks[i] * len(stk)) - sum(stk)
            stk.clear()
        else:
            stk.append(stocks[i])
            
    print(answer)
            