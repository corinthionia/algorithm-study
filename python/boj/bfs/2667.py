import sys
from collections import deque
input = sys.stdin.readline


n = int(input())

graph = [list(map(int, input().rstrip())) for _ in range(n)]

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

result = []

def bfs(graph, a, b):
    q = deque()
    q.append([a, b])
    graph[a][b] = 0 # 방문 처리
    cnt = 1

    while q:
        x, y = q.popleft()
        graph[x][y] = 0

        # 현재 위치의 상하좌우 탐색
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if nx < 0 or nx >= len(graph) or ny < 0 or ny >= len(graph):
                continue

            if graph[nx][ny] == 1:
                graph[nx][ny] = 0
                q.append([nx, ny])
                cnt += 1
    
    return cnt

for i in range(n):
    for j in range(n):
        if graph[i][j] == 1:
            cnt = bfs(graph, i, j)
            result.append(cnt)

result.sort()

print(len(result))

for i in result:
    print(i)

