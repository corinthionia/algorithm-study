import sys
input = sys.stdin.readline

st1 = list(input().strip())
st2 = []

for _ in range(int(input().strip())):
    command = list(input().strip().split())

    if command[0] == 'L' and st1:
            st2.append(st1.pop())
    
    elif command[0] == 'D' and st2:
            st1.append(st2.pop())
    
    elif command[0] == 'B' and st1:
            st1.pop()
    
    elif command[0] == 'P':
            st1.append(command[1])

print(''.join(st1 + st2[::-1]))
