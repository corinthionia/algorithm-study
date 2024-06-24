import sys
import heapq as hq
input = sys.stdin.readline

heap = []

n = int(input())

for _ in range(n):
    num = int(input())

    if num < 0:
        hq.heappush(heap, (-num, num))
    elif num > 0:
        hq.heappush(heap, (num, num))
    else:
        if heap:
            print(hq.heappop(heap)[1])
        else:
            print(0)
