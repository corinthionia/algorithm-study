n = int(input())
arr = list(map(int, input().split()))

sum = 0
arr.sort()

for i in range(n):
    sum += arr[i] * (n - i)

print(sum)