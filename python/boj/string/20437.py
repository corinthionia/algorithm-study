from collections import defaultdict

T = int(input())

for _ in range(T):
    W = input()
    K = int(input())
    
    dict = defaultdict(list)
    
    for i in range(len(W)):
        dict[W[i]].append(i)
    
    answer3 = 10000
    answer4 = 0
    
    for key, values in dict.items():
        if len(values) < K:
            continue
        
        # Sliding window
        for i in range(len(values) - K + 1):
            length = values[i+K-1] - values[i] + 1
            
            answer3 = min(answer3, length)
            answer4 = max(answer4, length)
    
    if answer3 == 10000 or answer4 == 0:
        print(-1)
    else:
        print(answer3, answer4, end=' ')
        
        
            
    
    
