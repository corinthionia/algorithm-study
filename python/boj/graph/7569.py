# Python3는 시간초과
# PyPy3는 통과

import sys
input = sys.stdin.readline
from collections import deque

M, N, H = map(int, input().split())

box = []
tomatoes = deque([])

for i in range(H):
    layer = []
    for j in range(N):
        layer.append(list(map(int, input().split())))
        for k in range(M):
            if layer[j][k] == 1:
                tomatoes.append((i, j, k))
    box.append(layer)

# 위, 아래, 왼쪽, 오른쪽, 앞, 뒤
dx = [0, 0, -1, 1, 0, 0]
dy = [0, 0, 0, 0, -1, 1]
dz = [-1, 1, 0, 0, 0, 0]
    
while tomatoes:
    x, y, z = tomatoes.popleft()
        
    for i in range(6):
        nx = x + dx[i]
        ny = y + dy[i]
        nz = z + dz[i]
            
        if (0 <= nx < H and 0 <= ny < N and 0 <= nz < M) and box[nx][ny][nz] == 0:
            box[nx][ny][nz] = box[x][y][z] + 1
            tomatoes.append((nx, ny, nz))

answer = 0

for i in range(H):
    for j in range(N):
        for k in range(M):
            if box[i][j][k] == 0:
                print(-1)
                exit(0)
            else:
                answer = max(answer, max(box[i][j]))

print(answer - 1)