# 채점 결과
# 정확성: 41.5
# 효율성: 0.0
# 합계: 41.5 / 100.0 
# 내가 봐도 그지 같은 코드 ㅎㅎ...

def solution(food_times, k):
    answer = 0
    idx = 0
    
    for i in range(k):
        if (food_times[idx % len(food_times)] == 0):
            while food_times[idx % len(food_times)] == 0:
                idx += 1
                
            food_times[idx % len(food_times)] -= 1
            idx += 1
        else:
            food_times[idx % len(food_times)] -= 1
            idx += 1
    
    if sum(food_times) == 0:
        answer = -1
    else:
        while food_times[idx % len(food_times)] == 0:
            idx += 1
        answer = idx % len(food_times) + 1
    
    return answer