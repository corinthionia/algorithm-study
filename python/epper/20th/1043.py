n, m = map(int, input().split())
know = set(input().split()[1:])
parties = []

for _ in range(m):
    parties.append(set(input().split()[1:]))

for _ in range(m):
    for i in parties:
        if i & know:
            know = know.union(i)

cnt = 0

for i in parties:
    if i & know:
        continue
    cnt += 1

print(cnt)