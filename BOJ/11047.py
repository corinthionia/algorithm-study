n, k = map(int, input().split())

coin = []
cnt = 0

for i in range(n):
    coin.append(int(input()))

for j in range(n):
    if (k // coin[-(j+1)] == 0):
        continue
    else:
        cnt += (k // coin[-(j+1)])
        k %= coin[-(j+1)]

print(cnt)