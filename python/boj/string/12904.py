S = input()
T = input()

def check(S, T):
    while len(S) < len(T):
        if T[-1] == 'A':
            T = T[:-1]
        elif T[-1] == 'B':
            T = T[-2::-1]
        else:
            return 0
    
    return 1 if T == S else 0

print(check(S, T))