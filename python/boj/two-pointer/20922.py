from collections import defaultdict

N, K = map(int, input().split())
nums = list(map(int, input().split()))

dict = defaultdict(int)

# 투 포인터
s, e = 0, 0
answer = 0

while e < N:
    if K <= dict[nums[e]]:
        dict[nums[s]] -= 1
        s += 1
    else:
        dict[nums[e]] += 1
        e += 1
        answer = max(answer, e-s)

print(answer)

