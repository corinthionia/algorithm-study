def solution(scores):
    
    wanho = scores[0]
    wanho_sum = sum(wanho)
    scores.sort(key=lambda x: (-x[0], x[1]))
    
    rank = 0
    max_b = 0
    
    for a, b in scores:
        # 인센티브 못 받음
        if wanho[0] < a and wanho[1] < b:
            return -1
        
        if max_b <= b:
            max_b = b
            if wanho_sum < a + b:
                rank += 1
                
    return rank + 1
        