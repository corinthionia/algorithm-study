answer = []
stk = []
top = 1

for _ in range(int(input())):
  seq = int(input())
  
  while top <= seq:
    stk.append(top)
    answer.append('+')
    top += 1

  if stk[-1] == seq:
    stk.pop()
    answer.append('-')
  else:
    print('NO')
    exit(0)				

for ans in answer:
  print(ans)