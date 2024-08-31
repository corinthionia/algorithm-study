from collections import deque

def BFS(mat, times, dest):
    q = deque([(dest, 0)])
    times[dest] = 0
    
    while q: 
        curr, time = q.popleft()
        # 연결된 지점 중 아직 방문하지 않았다면 time+1
        for nxt in mat[curr]:
            if times[nxt] == -1:
                q.append((nxt, time+1))
                times[nxt] = time+1

                
def solution(n, roads, sources, destination):
    mat = [[] for _ in range(n+1)]
    for a, b in roads:
        mat[a].append(b)
        mat[b].append(a)

    times = [-1] * (n+1)
    BFS(mat, times, destination)

    answer = []
    for source in sources:
        answer.append(times[source])
    
    return answer