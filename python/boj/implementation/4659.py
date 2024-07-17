def contains_vowel(S):
    return any(char in 'aeiou' for char in S)

def check_three(S):
    count_v = 0  # 모음 개수
    count_c = 0  # 자음 개수
    
    for s in S:
        if s in 'aeiou':
            count_c = 0
            count_v += 1
        else:
            count_v = 0
            count_c += 1
        
        if count_v == 3 or count_c == 3:
            return False
    return True


def check_two(S):
    for i in range(len(S)-1):
        if S[i] == S[i+1] and S[i:i+2] not in ['ee', 'oo']:
            return False
    return True


while True:
    S = input()
    
    if S == 'end':
        break
    
    if contains_vowel(S) and check_three(S) and check_two(S):
        print(f'<{S}> is acceptable.')
    else:
        print(f'<{S}> is not acceptable.')