N = int(input())
seq = list(map(int, input().split()))
operators = list(map(int, input().split()))  

res_max = int(-1e9)
res_min = int(1e9)

def dfs(step, total, plus, minus, multiply, divide):
    global res_max, res_min
    
    if step == N:
        res_min = min(total, res_min)
        res_max = max(total, res_max)
        return

    if 0 < plus:
        dfs(step+1, total+seq[step], plus-1, minus, multiply, divide)
    if 0 < minus:
        dfs(step+1, total-seq[step], plus, minus-1, multiply, divide)
    if 0 < multiply:
        dfs(step+1, total*seq[step], plus, minus, multiply-1, divide)
    if 0 < divide:
        dfs(step+1, int(total/seq[step]), plus, minus, multiply, divide-1)


dfs(1, seq[0], operators[0], operators[1], operators[2], operators[3])
print(res_max)
print(res_min)