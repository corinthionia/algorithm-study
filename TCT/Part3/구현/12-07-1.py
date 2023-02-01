n = list(map(int, input()))

a = 0
b = 0

for i in range(len(n)):
    if (i < len(n)//2):
        a += n[i]
    else:
        b += n[i]

if (a == b):
    print("LUCKY")
else:
    print("READY")