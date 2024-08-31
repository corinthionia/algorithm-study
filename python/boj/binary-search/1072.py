X, Y = map(int, input().split())
Z = (Y * 100) // X

if 99 <= Z:
    print(-1)
    exit(0)

s, e = 0, X

while s < e:
    mid = (s + e) // 2
    if Z < ((Y + mid) * 100 // (X + mid)):
        e = mid
    else:
        s = mid + 1

mid = (s + e) // 2
print(mid)