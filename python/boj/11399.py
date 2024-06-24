from functools import reduce

n = int(input())
lst = list(map(int, input().split()))

answer = reduce(lambda acc, cur: acc+cur, sorted(lst))

print(answer)