arr = []

for i in range(9):
    arr.append(int(input()))

arr.sort()

for j in range(8):
    for k in range(j+1, 9):
        if arr[j] + arr[k] == sum(arr) - 100:
            arr.pop(k)
            arr.pop(j)

print(arr)