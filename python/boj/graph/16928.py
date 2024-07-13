import sys
input = sys.stdin.readline

from collections import deque

N, M = map(int, input().split())
board = [0 for _ in range(101)]
visited = [0 for _ in range(101)]

ladders = dict()
for _ in range(N):
    k, v = map(int, input().split())
    ladders[k] = v
    board[k] = 'l'

snakes = dict()
for _ in range(M):
    k, v = map(int, input().split())
    snakes[k] = v
    board[k] = 's'

def BFS():
    q = deque([1])
    visited[1] = 1
        
    while q:
        x = q.popleft()
 
        # 주사위 던지기
        for i in range(1, 7):
            nx = x + i
            
            if 1 <= nx <= 100 and not visited[nx]:
                # 사다리 타기
                if board[nx] == 'l':
                    nx = ladders[nx]
                    
                # 뱀 타기
                if board[nx] == 's':
                    nx = snakes[nx]
                
                if not visited[nx]:
                    q.append(nx)
                    visited[nx] = 1
                    board[nx] = board[x] + 1       

BFS()        
print(board[100])
