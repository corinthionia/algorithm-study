from collections import deque

T = int(input())

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def bfs(graph, x, y):
    q = deque()
    q.append([x, y])
    graph[x][y] = 0

    while q:
        a, b = q.popleft()

        for i in range(4):
            nx = a + dx[i]
            ny = b + dy[i]

            if nx < 0 or nx >= n or ny < 0 or ny >= m:
                continue

            if graph[nx][ny] == 1:
                q.append([nx, ny])
                graph[nx][ny] = 0

for _ in range(T):
    n, m, k = map(int, input().split())
    graph = [[0]*(m) for _ in range(n)]

    cnt = 0

    for _ in range(k):
        x, y = map(int, input().split())
        graph[x][y] = 1

    for i in range(n):
         for j in range(m):
              if graph[i][j] == 1:
                   bfs(graph, i, j)
                   cnt += 1
    
    print(cnt)
    
    


