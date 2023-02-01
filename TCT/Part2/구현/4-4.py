n, m = map(int, input().split())
x, y, direction = map(int, input().split())

# d는 방문한 곳을 표시하기 위함
d = [[0] * m for _ in range(n)]
d[x][y] = 1

# arr은 현재 맵을 표시
arr = []

for i in range(n):
    arr.append(list(map(int, input().split())))

# 북0, 동1, 남2, 서3
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

def turn_left():
    global direction
    direction -= 1

    if direction == -1:
        direction = 3

cnt = 1
turn_time = 0

while True:
    turn_left()
    nx = x + dx[direction]
    ny = x + dy[direction]

    if d[nx][ny] == 0 and arr[nx][ny] == 0:
        d[nx][ny] = 1
        x = nx
        y = ny
        cnt += 1
        turn_time = 0
        continue
    else:
        turn_time += 1

    if turn_time == 4:
        nx = x - dx[direction]
        ny = y - dy[direction]

        if arr[nx][ny] == 0:
            x = nx
            y = ny
        else:
            break
        turn_time = 0

print(cnt)