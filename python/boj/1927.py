import heapq as hq
import sys
input = sys.stdin.readline

n = int(input())

heap = []

for _ in range(n):
    num = int(input())

    if num > 0:
        hq.heappush(heap, num)
    elif num == 0:
        if heap:
            print(hq.heappop(heap))
        else:
            print(0)

