N, M = map(int, input().split())

friends = [[N for _ in range(N+1)] for _ in range(N+1)]

for i in range(M):
    a, b = map(int, input().split())
    friends[a][b] = 1
    friends[b][a] = 1

for k in range(1, N+1):
    for i in range(1, N+1):
        for j in range(1, N+1):
            if i == j:
                friends[i][j] = 0
            else:
                friends[i][j] = min(friends[i][j], friends[i][k] + friends[k][j])

# [케빈베이컨수, 번호]
answer = [1e9, 0]
for i in range(1, N+1):
    if sum(friends[i]) < answer[0]:
        answer = [sum(friends[i]), i]
        
print(answer[1])

# 0 0 0 0 0 0
# 0 0 0 1 1 0
# 0 0 0 1 0 0
# 0 1 1 0 1 0
# 0 1 0 1 0 1
# 0 0 0 0 1 0
