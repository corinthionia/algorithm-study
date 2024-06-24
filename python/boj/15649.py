n, m = map(int, input().split())
lst = []
visited = [False] * (n+1)

def dfs():
    if len(lst) == m:
        print(' '.join(map(str, lst)))
    
    for i in range(1, n+1):
        if visited[i]:
            continue
        
        visited[i] = True
        lst.append(i)

        dfs()
        lst.pop()

        visited[i] = False
    
dfs()
