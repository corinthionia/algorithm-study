import heapq

V, E = map(int, input().split())
K = int(input())

adj = [[] for _ in range(V+1)]
for _ in range(E):
    u, v, w = map(int, input().split())
    adj[u].append([v, w])

INF = int(1e9)
distances = [INF for _ in range(V+1)]
distances[K] = 0

def dijkstra(start):
    hq = []
    heapq.heappush(hq, (0, start)) # [거리, 노드번호]
    distances[start] = 0
    
    while hq:
        dist, node = heapq.heappop(hq)
    
        if (distances[node] < dist):
            continue
    
        for nextNode, d in adj[node]:
            total = dist + d
            if total < distances[nextNode]:
                distances[nextNode] = total
                heapq.heappush(hq, (total, nextNode))

dijkstra(K)
        
for i in range(1, len(distances)):
    if distances[i] == INF:
        print("INF")
    else:
        print(distances[i])
    
