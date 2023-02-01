import sys
input = sys.stdin.readline

n, m = map(int, input().split())
lst = list(map(int, input().split()))
prefix_sum = [0]

temp = 0

for i in lst:
    temp += i
    prefix_sum.append(temp)
 
for i in range(m):
    a, b = map(int, input().split())
    print(prefix_sum[b] - prefix_sum[a-1])
