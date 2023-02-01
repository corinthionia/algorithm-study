graph = [[] for _ in range(3)]

# 노드 0에 저장된 정보 저장 (노드, 거리)
graph[0].append((1, 7))
graph[0].append((2, 5))

# 노드 1에 저장된 정보 저장 (노드, 거리)
graph[1].append((0, 7))

# 노드 2에 저장된 정보 저장 (노드, 거리)
graph[2].append((0, 5))

print(graph)