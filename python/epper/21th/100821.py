def solution():
	answer = ''
	cnt = 0
		
	if (str[0] == '1'):
		answer += '1'
	
	for i in range(len(str)-1):
		if (str[i] == str[i+1]):
			cnt += 1
		else:
			answer += chr(cnt + ord('A'))
			cnt = 0
	
	answer += chr(cnt + ord('A'))
	return answer
	
if __name__ == '__main__':
	str = input()
	print(solution())