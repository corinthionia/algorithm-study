N = int(input())
A = sorted(list(map(int, input().split())))

M = int(input())
nums = list(map(int, input().split()))

for target in nums:
    s = 0
    e = N - 1
    
    flag = False

    while s <= e:
        m = (s + e) // 2

        if A[m] == target:
            flag = True
            break
        elif A[m] < target:
            s = m + 1
        else:
            e = m - 1
    
    print(1 if flag else 0)
            