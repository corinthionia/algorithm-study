from itertools import combinations

n, m = map(int, input().split())
data = [] # 초기 맵
temp = [[0] * m for _ in range(n)] # 벽 설치한 뒤

for _ in range(n):
    data.append(list(map(int, input().split())))


# 빈 공간의 좌표 저장
empty = []
for i in range(n):
    for j in range(m):
        if (data[i][j] == 0):
            empty.append((i, j))

# 가능한 울타리 조합
total_empty = list(combinations(empty, 3))
print(total_empty)


# 좌, 상, 우, 하
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

result = 0

# DFS 이용하여 바이러스 범위 파악
def virus(x, y):
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]

        if nx >= 0 and nx < n and ny >= 0 and ny < m:
            if temp[nx][ny] == 0:
                temp[nx][ny] = 2
                virus(nx, ny)

# 안전영역 크기 계산
def get_score():
    score = 0

    for i in range(n):
        for j in range(m):
            if temp[i][j] == 0:
                score += 1
    return score

# dfs 이용해 벽 설치 + 안전영역 크기 계산
# count는 설치한 벽의 개수
def dfs():
    global data
    ans = -1

    for e in total_empty:
        for x, y in e:
            data[x][y] = 1
    
        ans = max(get_score(), dfs())

        for x, y in e:
            data[x][y] = 0
    
    return ans

    
print(dfs())



