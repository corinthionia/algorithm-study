# 이진탐색 + 재귀

def solution(s):
    answer = 0
    length = len(s)
    
    def recursive(length):
        if (s[:length//2] == s[length//2 : length]):
            return length // 2 + 1
        else:
            length = length // 2
            recursive(length)
    
    recursive(length)
    
    return answer 