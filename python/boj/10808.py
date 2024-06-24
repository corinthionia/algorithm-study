str = input()
lst = [0] * 26

for tok in str:
    lst[ord(tok) - ord('a')] += 1

for i in lst:
    print(i, end=' ')