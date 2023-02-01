# 시간 복잡도 고려 X

n, m = map(int, input().split())
lst = list(map(int, input().split()))

cnt = 0

for i in range(len(lst)-1):
    for j in range(i+1, len(lst)):
        if (lst[i] == lst[j]):
            continue
        else:
            cnt += 1

print(cnt)