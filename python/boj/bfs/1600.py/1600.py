import sys
input = sys.stdin.readline

from collections import deque

K = int(input())
W, H = map(int, input().split())

graph = [list(map(int, input().split())) for _ in range(H)]
recorded = [[[0] * (K+1) for _ in range(W)] for _ in range(H)]

if graph[0][0] == 1 or graph[H-1][W-1] == 1:
    print(-1)
    exit(0)

# 말의 이동 방향
horse_dx = [1, 2, -1, -2, 2, -2, 1, -1]
horse_dy = [2, 1, 2, 1, -1, -1, -2, -2]

# 원숭이의 이동 방향
monkey_dx = [0, 1, -1, 0]
monkey_dy = [1, 0, 0, -1]

def BFS():
    q = deque([[0, 0, K]])
    
    while q:
        x, y, k = q.popleft()
        
        if x == H-1 and y == W-1:
            return recorded[x][y][k]
        
        # 말의 움직임
        if k:
            for i in range(8):
                nx = x + horse_dx[i]
                ny = y + horse_dy[i]
                
                if 0 <= nx < H and 0 <= ny < W and graph[nx][ny] == 0 and not recorded[nx][ny][k-1]:
                    recorded[nx][ny][k-1] = recorded[x][y][k] + 1
                    q.append([nx, ny, k-1])
               
        # 원숭이의 움직임         
        for i in range(4):
            nx = x + monkey_dx[i]
            ny = y + monkey_dy[i]
            
            if 0 <= nx < H and 0 <= ny < W and graph[nx][ny] == 0 and not recorded[nx][ny][k]:
                recorded[nx][ny][k] = recorded[x][y][k] + 1
                q.append([nx, ny, k])
    
    return -1


print(BFS())