# 조합 계산을 할 때에는 조합 라이브러리를 사용하거나, DFS/BFS를 이용하면 된다!
# 즉, 모든 경우의 수를 계산하고, 안전영역 계산 시에는 DFS/BFS를 이용하자.

n, m = map(int, input().split())
data = [] # 초기 맵
temp = [[0] * m for _ in range(n)] # 벽 설치한 뒤

for _ in range(n):
    data.append(list(map(int, input().split())))

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
def dfs(count):
    global result

    if count == 3:
        for i in range(n):
            for j in range(m):
                temp[i][j] = data[i][j] # 원래의 맵 넣기
    
        for i in range(n):
            for j in range(m):
                if temp[i][j] == 2:
                    virus(i, j)
    
        result = max(result, get_score())
        return

    for i in range(n):
        for j in range(m):
            if data[i][j] == 0:
                data[i][j] = 1
                count += 1
                dfs(count)
                data[i][j] = 0
                count -= 1

dfs(0)
print(result)



