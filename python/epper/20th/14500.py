import sys
from collections import deque

input = sys.stdin.readline

n, m = map(int, input().split())

graph = [list(map(int, input().split())) for _ in range(n)]
visited = [[False] * m for _ in range(n)]

max_val = max(map(max, graph))

d = [(-1, 0), (1, 0), (0, -1), (0, 1)]

answer = 0

def dfs(x, y, step, total):
    global answer

    if total + max_val * (4 - step) <= answer:
        return
    
    if step == 4:
        answer = max(answer, total)
        return
    
    for dx, dy in d:
        nx = x + dx
        ny = y + dy

        if 0 <= nx < n and 0 <= ny < m and not visited[nx][ny]:
            if step == 2:
                visited[nx][ny] = True
                dfs(x, y, step+1, total+graph[nx][ny])
                visited[nx][ny] = False
            
            visited[nx][ny] = True
            dfs(nx, ny, step+1, total+graph[nx][ny])
            visited[nx][ny] = False
    
for i in range(n):
    for j in range(m):
        visited[i][j] = True
        dfs(i, j, 1, graph[i][j])
        visited[i][j] = False

print(answer)