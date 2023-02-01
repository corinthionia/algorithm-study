n = int(input())  # 원판 개수
k = 0  # 옮긴 횟수

def hanoi(n, a, b, c):
    if n == 1:
        print(a, c)
    else:
        hanoi(n-1, a, c, b)
        print(a, c)
        hanoi(n-1, b, a, c)

for _ in range(n):
    k = 2*k + 1

print(k)
hanoi(n, 1, 2, 3)