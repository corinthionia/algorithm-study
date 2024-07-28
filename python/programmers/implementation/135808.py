def solution(k, m, score):
    score.sort(reverse=True)
    
    answer = 0
    boxes = len(score) // m  # 최대 박스의 개수
    
    for i in range(boxes):
        box = score[i*m : (i+1)*m]
        answer += min(box) * m
    
    return answer