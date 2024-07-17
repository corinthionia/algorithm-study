from collections import deque

R, C, T = map(int, input().split())

room = []
purifier = []

for i in range(R):
    row = list(map(int, input().split()))
    for j in range(len(row)):
        if row[j] == -1:
            purifier.append((i, j))
    room.append(row)


# 먼지의 확산
def move_dust():
    record = [[0] * C for _ in range(R)]
    
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    
    for x in range(R):
        for y in range(C):
            # 해당 칸에 미세먼지가 있다면
            if 0 < room[x][y]:
                d_cnt = 0  # 확산되는 방향 수
                
                for i in range(4):
                    nx = x + dx[i]
                    ny = y + dy[i]
                    
                    if 0 <= nx < R and 0 <= ny < C and room[nx][ny] != -1:
                        d_cnt += 1
                        record[nx][ny] += room[x][y] // 5
                
                record[x][y] += room[x][y] - (room[x][y] // 5) * d_cnt
    
    for i in range(R):
        for j in range(C):
            if room[i][j] != -1:
                room[i][j] = record[i][j]
    
    
# 공기청정기 바람 방향에 따라 먼지 이동시키기
# 마지막 칸부터 거꾸로 채워 넣기!
def wind_top():
    dx = [-1, 0, 1, 0]
    dy = [0, 1, 0, -1]
    d_idx = 0
    
    # 공기청정기의 위치
    a, b = purifier[0]
    q = deque([(a-1, b)])
    
    while q:
        x, y = q.popleft()
        
        nx = x + dx[d_idx]
        ny = y + dy[d_idx]
        
        if nx == a and ny == b:
            break
        
        if 0 <= nx <= a and 0 <= ny < C:
            room[x][y] = room[nx][ny]
            q.append((nx, ny))
        else:
            d_idx += 1
            q.append((x, y))
    
    # 공기청정기로부터 나가는 첫 지점
    room[a][b+1] = 0     
                
                
def wind_bot():
    dx = [1, 0, -1, 0]
    dy = [0, 1, 0, -1]
    d_idx = 0
    
    # 공기청정기의 위치
    a, b = purifier[1]    
    q = deque([(a+1, b)])
    
    while q:
        x, y = q.popleft()
        
        nx = x + dx[d_idx]
        ny = y + dy[d_idx]
        
        if nx == a and ny == b:
            break
        
        if a <= nx < R and 0 <= ny < C:
            room[x][y] = room[nx][ny]
            q.append((nx, ny))
        else:
            d_idx += 1
            q.append((x, y))
            
    # 공기청정기로부터 나가는 첫 지점
    room[a][b+1] = 0
    
    
for i in range(T):
    move_dust()
    wind_top()
    wind_bot()
    
answer = 0

for row in room:
    for num in row:
        if 0 < num:
            answer += num
            
print(answer)