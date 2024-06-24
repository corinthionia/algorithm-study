from collections import deque

q = deque()
ans = []

N, K = map(int, input().split())

for i in range(1, N+1):
    q.append(i)

while q:
    for _ in range(K-1):
        q.append(q.popleft())
    ans.append(q.popleft())

print("<", end="")
print(', '.join(map(str, ans)), end='')
print(">")