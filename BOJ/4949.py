while True:
    inp = input()

    if inp == ".":
        break
    else:
        stack = []
        is_vps = True

        for c in inp:
            if c == '(' or c == '[':
                stack.append(c)
            elif c == ')':
                if not stack or stack[-1] == '[':
                    is_vps = False
                    break
                elif stack[-1] == '(':
                    stack.pop()
            elif c == ']':
                if not stack or stack[-1] == '(':
                    is_vps = False
                    break
                elif stack[-1] == '[':
                    stack.pop()
    
        if (is_vps == True and not stack):
            print("yes")
        else:
            print("no")
