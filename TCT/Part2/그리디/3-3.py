n, m = map(int, input().split())

lst = []

for i in range(n):
    inp = list(map(int, input().split()))
    lst.append(min(inp))

print(max(lst))