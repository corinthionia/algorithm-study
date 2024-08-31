def solution(numbers):
    answer = []

    for number in numbers:
        # 0이 없는 경우 대비하기 위해 맨 앞에 0 추가
        B = list('0' + format(number, 'b'))
        
        # 가장 마지막 0을 찾아서 1로 바꾸기
        idx = ''.join(B).rfind('0') 
        B[idx] = '1'
        
        # 홀수인 경우 바로 다음 인덱스의 값을 0으로 변경해야 함
        if number % 2 == 1:
            B[idx+1] = '0'
        
        answer.append(int(''.join(B), 2))

    return answer