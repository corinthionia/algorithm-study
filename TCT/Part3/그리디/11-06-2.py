# 아직 카카오는 어렵군요,,,

import heapq

def solution(food_times, k):
    if sum(food_times) <= k:
        return -1
    
    q = []

    for i in range(len(food_times)):
        heapq.heappush(q, (food_times[i], i+1))
    
    time = 0
    prev = 0
    length = len(food_times)

    while time + ((q[0][0] - prev) * length) <= k:
        now = heapq.heappop(q)[0]
        time += (now - prev) * length
        length -= 1
        prev = now
    
    res = sorted(q, key = lambda x: x[1])
    return res[(k - time) % length][1]