lst = []

for i in range(9):
    lst.append(int(input()))

total = sum(lst) - 100
lst.sort()

for j in range(len(lst)):
    for k in range(j+1, len(lst)):
        if (lst[j] + lst[k] == total):
            lst.pop(j)
            lst.pop(k)