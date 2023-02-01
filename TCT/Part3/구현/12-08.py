inp = input()

arr = []
sum = 0

for x in inp:
    if x.isalpha():
        arr.append(x)
    else:
        sum += int(x)

arr.sort()

if sum != 0:
    arr.append(str(sum))

print(''.join(arr))