from collections import deque

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def BFS(maps, start, target):
    N, M = len(maps), len(maps[0])
    visited = [[0] * M for _ in range(N)]
    
    a, b = start
    q = deque([(a, b, 0)])
    visited[a][b] = 1
    
    while q:
        x, y, time = q.popleft()
        
        if [x, y] == target:
            return time
        
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            
            if 0 <= nx < N and 0 <= ny < M and maps[nx][ny] != 'X' and not visited[nx][ny]:
                q.append((nx, ny, time+1))
                visited[nx][ny] = 1
    
    return -1
            

def solution(maps):
    N, M = len(maps), len(maps[0])
    S, L, E = [], [], []
    
    for i in range(N):
        for j in range(M):
            if maps[i][j] == 'S':
                S = [i, j]
            elif maps[i][j] == 'L':
                L = [i, j]
            elif maps[i][j] == 'E':
                E = [i, j]
    
    time1 = BFS(maps, S, L)
    time2 = BFS(maps, L, E)

    if time1 != -1 and time2 != -1:
        return time1 + time2
    else:
        return -1
    