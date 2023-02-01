n = int(input())

coin = [500, 100, 50, 10, 5, 1]
rem = 1000 - n
cnt = 0

for i in range(len(coin)):
    cnt += (rem // coin[i])
    rem %= coin[i]

print(cnt)