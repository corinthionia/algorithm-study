from collections import deque

n, m, v = map(int, input().split())
data = []

graph = [[0] * (n+1) for _ in range(n+1)]

for i in range(m):
    # 연결된 노드 받기
    a, b = map(int, input().split())
    graph[a][b] = graph[b][a] = 1

v_dfs = [0] * (n+1)
v_bfs = v_dfs.copy()

def dfs(v):
    # 방문한 노드 방문처리
    v_dfs[v] = 1
    print(v, end = ' ')

    # 1번 노드부터 마지막 노드까지
    for i in range(1, n+1):
        # 노드간 연결되어 있고, 방문하지 않은 노드라면
        if graph[v][i] == 1 and v_dfs[i] == 0:
            dfs(i)

def bfs(v):
    q = deque()
    q.append(v)
    v_bfs[v] = 1

    while q:
        v = q.popleft()
        print(v, end = ' ')

        for i in range(1, n+1):
            if (v_bfs[i] == 0 and graph[v][i] == 1):
                q.append(i)
                v_bfs[i] = 1

dfs(v)
print()
bfs(v)