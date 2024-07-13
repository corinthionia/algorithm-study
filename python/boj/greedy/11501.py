T = int(input())

for _ in range(T):
    N = int(input())
    stocks = list(map(int, input().split()))
    
    answer = 0
    max_price = 0
    
    for i in range(len(stocks)-1, -1, -1):
        if max_price < stocks[i]:
            max_price = stocks[i]
        else:
            answer += max_price - stocks[i]
    
    print(answer)