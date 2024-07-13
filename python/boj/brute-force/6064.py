for _ in range(int(input())):
    M, N, x, y = map(int, input().split())
    answer = -1
    
    while x <= M * N:
        if (x - y) % N == 0:
            answer = x
            break
        x += M

    print(answer)