def dfs(graph, v, visited):
    visited[v] = True
    print(v, end=' ')

    for i in graph[v]:
        if not visited[i]:
            dfs(graph, i, visited)

# 각 노드가 연결된 정보를 2차원 리스트로 표현
graph = [
    [], # 인덱스 번호와 노드 번호 맞추기 위한 빈 배열
    [2, 3, 8], # 1번 노드가 연결된 노드들
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7]
]

# 방문한 노드 기록
visited = [False] * 9

dfs(graph, 1, visited)