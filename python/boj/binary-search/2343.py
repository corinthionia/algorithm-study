N, M = map(int, input().split())
lectures = list(map(int, input().split()))

# 블루레이의 크기를 기준으로 이진탐색
# 데이터가 정렬된 채로 입력되는 줄 알았으나 아니었음,,
left = max(lectures) # 블루레이의 크기 최솟값 == 가장 긴 강의의 길이
right = left * N   # 블루레이의 크기 최댓값 == 가장 긴 강의의 길이 * 강의 개수

while left <= right:
    mid = (left + right) // 2
    total = 0 # 구간에 포함된 강의 길이의 총합
    cnt = 1  # 블루레이 개수
    
    for lecture in lectures:
        # mid 값을 기준으로 나누기
        if mid < total + lecture:
            cnt += 1  # 블루레이 1개 추가
            total = 0
        total += lecture 

    if cnt <= M:
        answer = mid
        right = mid - 1
    else:
        left = mid + 1

print(answer)
