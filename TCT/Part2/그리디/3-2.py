n, m, k = map(int, input().split())
lst = list(map(int, input().split()))

lst.sort();

one = lst[-1]
two = lst[-2]


one_cnt = (m // (k + 1)) * k
one_cnt += m % (k + 1)

result = 0
result += (one_cnt) * one
result += (m - one_cnt) * two

print(result)