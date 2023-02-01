n, m = map(int, input().split())
lst = list(map(int, input().split()))

arr = [0] * 11

for i in lst:
    arr[i] += 1

res = 0

for j in range(1, m+1):
    n -= arr[j]
    res += arr[j] * n

print(res)