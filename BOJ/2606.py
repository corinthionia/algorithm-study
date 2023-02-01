n = int(input())
m = int(input())
cnt = 0

graph = [[0] * (n+1) for _ in range(n+1)]
visited = [0] * (n+1)

for _ in range(m):
    a, b = map(int, input().split())
    graph[a][b] = graph[b][a] = 1

def dfs(v):
    global cnt
    visited[v] = 1

    for i in range(1, n+1):
        if graph[v][i] == 1 and visited[i] == 0:
            dfs(i)
    
    cnt += 1

dfs(1)
print(cnt - 1)