# reduce 이용해 보기
from functools import reduce

n = int(input())

lst = list(map(int, input().split()))
lst.sort()

answer = 0
for i in range(len(lst)):
    answer += reduce(lambda acc, cur: acc+cur, lst[:i+1])

print(answer)