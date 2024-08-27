def getCoor(str):
    return [8-int(str[1]), ord(str[0])-65]

direction = {"R": [0, 1], "L": [0, -1], "B": [1, 0], "T": [-1, 0],
             "RT": [-1, 1], "LT": [-1, -1], "RB": [1, 1], "LB": [1, -1]}

a, b, n = input().split()
king, stone, N = getCoor(a), getCoor(b), int(n)

for _ in range(N):
    inp = input()
    dx, dy = direction[inp]
    nkx, nky = king[0]+dx, king[1]+dy
    
    if nkx < 0 or 8 <= nkx or nky < 0 or 8 <= nky:
        continue
    
    # 이동 후의 위치가 돌의 위치와 같다면
    if nkx == stone[0] and nky == stone[1]:
        nsx, nsy = stone[0]+dx, stone[1]+dy
        
        if 0 <= nsx < 8 and 0 <= nsy < 8:
            stone = [nsx, nsy]
        else:
            continue

    king = [nkx, nky]

print(chr(king[1]+65) + str(8-king[0]))
print(chr(stone[1]+65) + str(8-stone[0]))