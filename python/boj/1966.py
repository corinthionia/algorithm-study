from collections import deque

T = int(input())

for _ in range(T):
    n, m = map(int, input().split())

    q = deque(map(int, input().split()))

    target = (q[m], m)  # (중요도, 인덱스)

    idx = m
    cnt = 0

    while True:     
        if idx == 0 and max(q) == q[idx]:
            cnt += 1
            break
        else:
            if max(q) == q[0]:
                q.popleft()
                cnt += 1
                idx -= 1
                
            else:
                q.append(q.popleft())

                if idx == 0:
                    idx = len(q) - 1
                else:
                    idx -= 1         
    
    print(cnt)