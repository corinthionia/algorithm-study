n = list(map(int, input()))
lst = sorted(n, reverse=True)

if sum(n) % 3 != 0:
    print(-1)
else:
    if lst[-1] != 0:
        print(-1)
    else:
        for tok in lst:
            print(tok, end="")
    
print(1)