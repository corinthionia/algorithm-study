import sys
input = sys.stdin.readline

N, M, B = map(int, input().split())
ground = [list(map(int, input().split())) for _ in range(N)]

time, height = 1e9, 0

# 땅의 높이의 범위 0 ~ 256
for block_height in range(257):
    over, under = 0, 0

    for i in range(N):
        for j in range(M):
            if block_height < ground[i][j]:
                over += ground[i][j] - block_height
            else: 
                under += block_height - ground[i][j]

    # 잔여 블록이 있고 걸리는 시간이 더 적은 경우
    if under <= over + B and (2 * over) + under <= time:
        time = (2 * over) + under
        height = block_height

print(time, height)