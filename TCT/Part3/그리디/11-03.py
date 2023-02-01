str = input()

cnt_0 = 0
cnt_1 = 0

if (str[0] == '0'):
    cnt_0 += 1
else:
    cnt_1 += 1

for i in range(len(str)-1):
    if (str[i] != str[i+1]):
        if (str[i+1] == '0'):
            cnt_0 += 1
        else:
            cnt_1 += 1

print(min(cnt_0, cnt_1))