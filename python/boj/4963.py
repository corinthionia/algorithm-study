from collections import deque

dx = [-1, 1, 0, 0, -1, -1, 1, 1]
dy = [0, 0, -1, 1, -1, 1, -1, 1]

def bfs(graph, x, y):
    graph[x][y] = 0
    q = deque()
    q.append([x, y])

    while q:
        a, b = q.popleft()

        for i in range(8):
            nx = a + dx[i]
            ny = b + dy[i]

            if nx < 0 or nx >= h or ny < 0 or ny >= w:
                continue
            
            if graph[nx][ny] == 1:
                graph[nx][ny] = 0
                q.append([nx, ny])

while True:
    w, h = map(int, input().split())

    if w == 0 and h == 0:
        break

    graph = []

    for i in range(h):
        graph.append(list(map(int, input().split())))

    cnt = 0

    for i in range(h):
        for j in range(w):
            if graph[i][j] == 1:
                bfs(graph, i, j)
                cnt += 1
    
    print(cnt)

   
