import sys
from collections import Counter

input = sys.stdin.readline

n = int(input())
lst = []

for _ in range(n):
    lst.append(int(input()))

lst.sort()

print(round(sum(lst) / len(lst)))
print(lst[len(lst) // 2])

cnt = Counter(lst).most_common()
if 1 < len(cnt) and cnt[0][1] == cnt[1][1]:
    print(cnt[1][0])
else:
    print(cnt[0][0])

print(max(lst) - min(lst))