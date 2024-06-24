n = int(input())

answer = 0

for i in range(1, n+1):
    num = sum(map(int, str(i))) + i

    if num == n:
        answer = i
        break
    
print(answer)
