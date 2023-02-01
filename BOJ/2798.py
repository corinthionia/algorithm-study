n, m = map(int, input().split())
arr = list(map(int, input().split()))
max = 0

for i in range(len(arr)-2):
    for j in range(i+1, len(arr)-1):
        for k in range(j+1, len(arr)):
            sum = arr[i] + arr[j] + arr[k]
            if (max <= sum and sum <= m):
                max = sum
            else:
                continue

print(max)