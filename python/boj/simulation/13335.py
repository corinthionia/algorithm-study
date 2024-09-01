from collections import deque

n, w, L = map(int, input().split())
A = deque(list(map(int, input().split())))

answer = 0
bridge = deque([0] * w)

while A:
    answer += 1
    bridge.popleft()
    
    weights = sum(bridge)
    
    if weights + A[0] <= L:
        bridge.append(A.popleft())
    else:
        bridge.append(0)

# 마지막 트럭이 다리 전체를 지나는 데 걸리는 시간
answer += w

print(answer)
        