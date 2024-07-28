def solution(S):
    nums = ['zero', 'one', 'two', 'three', 'four',
           'five', 'six', 'seven', 'eight', 'nine']
    
    temp = ''
    answer = ''
    
    for s in S:
        if s.isnumeric():
            answer += s
        else:
            temp += s
            if temp in nums:
                answer += str(nums.index(temp))
                temp = ''
            else:
                continue
    
    return int(answer)