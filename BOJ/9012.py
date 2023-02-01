t = int(input())

for _ in range(t):
    stack = [''] * 50
    top = -1

    inp = input()
    is_vps = True

    for c in inp:
        if (c == '('):
            top += 1
            stack[top] = c
        elif (c == ')'):
            if (stack[0] == ''):
                is_vps = False
                break
            else:
                stack[top] = ''
                top -= 1
        else:
            continue
    
    if (stack[0] != ''):
        is_vps = False

    if (is_vps):
        print("YES")
    else:
        print("NO")
    
