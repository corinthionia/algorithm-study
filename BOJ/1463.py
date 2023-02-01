N = int(input())

n = 0

def divide_two (N):
    global n
    n += 1
    return N // 2

def divide_three (N):
    global n
    n += 1
    return N // 3

def minus_one (N):
    global n
    n += 1
    return N - 1

while (N != 1):
    if (N % 2 == 0):
        divide_two(N)
    else:
        divide_two(N-1)

print(n)
