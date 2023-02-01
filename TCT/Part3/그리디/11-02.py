str = input()
ans = int(str[0])

for i in range(1, len(str)):
    if ans == 0 or str[i] == '0':
        ans += int(str[i])
    else:
        ans *= int(str[i])

print(ans)