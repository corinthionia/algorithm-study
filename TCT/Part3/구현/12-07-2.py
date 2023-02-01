n = input()

length = len(n)
sum = 0

for i in range(length // 2):
    sum += int(n[i])

for j in range(length // 2, length):
    sum -= int(n[j])

if (sum == 0):
    print("LUCKY")
else:
    print("READY")