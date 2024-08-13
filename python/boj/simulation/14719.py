H, W = map(int, input().split())
blocks = list(map(int, input().split()))

answer = 0

for i in range(1, W-1):
    # i를 기준으로 왼쪽에서 최댓값, 오른쪽에서 최댓값 구함
    max1 = max(blocks[:i])
    max2 = max(blocks[i+1:])
    h = min(max1, max2)
    
    # 빗물이 고일 수 있다면
    if blocks[i] < h:
        answer += (h - blocks[i])
 
print(answer)
