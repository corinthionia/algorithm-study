N = int(input())

S = [input() for _ in range(N)]
S.sort(key=lambda x: (x[0], len(x)))

answer = 0

for i in range(N):
    flag = False
    
    for j in range(i+1, N):
        if S[j].startswith(S[i]):
            flag = True
            break
    
    if not flag:
        answer += 1

print(answer)