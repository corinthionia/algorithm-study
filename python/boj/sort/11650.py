import sys
input = sys.stdin.readline

N = int(input())
lst = []

for i in range(N):
    x, y = map(int, input().split())
    lst.append((x, y))

lst.sort()

for i in range(N):
    print(lst[i][0], lst[i][1])